import { Router, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { User } from "../models/user";
import { verifyAuth, validateRequestBody, verifyAdmin } from "../middlewares/user";
import { QueryFailedError } from "typeorm";
import bcrypt from "bcrypt";

const router = Router();

router.post('/authenticate', async (req: Request, res: Response): Promise<void> => {
  const email: string = req.body.email;
  const password: string = req.body.password;

  if (!password) {
    res.status(400).json({error: 'Missing password'});
    return;
  } else if (!email) {
    res.status(400).json({error: 'Missing email'});
    return;
  }

  let user: User;
  try {
    user = await User.findOne({where: {email}});
  } catch(e) {
    console.log(e);
    res.status(404).json({error: 'User not found'});
    return;
  }

  const match = await user.comparePassowrd(password);
  if (!match) {
    res.status(403).json({error: 'Wrong password'});
    return;
  }

  const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {algorithm: 'HS512'});

  const data = {
    token,
    user: {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      isAdmin: user.isAdmin,
    },
  };
  res.json(data);
});

router.post('/', validateRequestBody, async (req: Request, res: Response): Promise<void> => {
  const firstName: string = req.body.firstName;
  const lastName: string = req.body.lastName;
  const email: string = req.body.email;
  const password: string = req.body.password;

  if (password.length < 8) {
    res.status(400).json({error: 'Invalid password lenght. It must be greater than or equal to 8'});
    return;
  }

  const user = new User();
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.password = await bcrypt.hash(password, 10);
  user.isAdmin = false;
  try {
    await user.save();
  } catch(e) {
    if (e instanceof QueryFailedError && e.message.startsWith('Duplicate entry')) {
      res.status(409).json({error: 'email already registered'});
    } else {
      console.log(e);
      res.status(500).json({error: 'Internal error'});
    }
    return;
  }


  const data = {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  };
  res.status(201).json(data);
});

router.use(verifyAuth);

router.get('/me', async (req: Request, res: Response): Promise<void> => {
  const userLogged: User = req['user'];

  const data = {
    id: userLogged.id,
    firstName: userLogged.firstName,
    lastName: userLogged.lastName,
    email: userLogged.email,
    isAdmin: userLogged.isAdmin,
  };
  res.json(data);
});

router.patch('/password', async (req: Request, res: Response): Promise<void> => {
  const password: string = req.body.password;
  const userLogged: User = req['user'];

  await userLogged.updatePassword(password);
  res.status(204).send();
})

router.get('/', verifyAdmin, async (req: Request, res: Response): Promise<void> => {
  const users = await User.find();
  res.json(users);
});

export default router;
