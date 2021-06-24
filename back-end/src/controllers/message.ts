import { Request, Response, Router } from "express";
import { validate } from "class-validator";
import { Message } from "../models/message";
import { User } from "../models/user";

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  const userLogged: User = req['user'];

  const messagesReceived = await Message.find({
    relations: ['fromUser', 'toUser'],
    where: {toUser: {id: userLogged.id}},
  });

  const sendersIds = [...new Set(messagesReceived.map(message => message.fromUser.id))];

  const messagesPromised = sendersIds.map(async id => {
    const filter = {
      relations: ['fromUser', 'toUser'],
      where: [
        {fromUser: {id}, toUser: {id: userLogged.id}},
        {fromUser: {id: userLogged.id}, toUser: {id}},
      ],
    };

    const messages = await Message.find(filter);

    const user = messages.find((message) => message.fromUser.id === id).fromUser;

    const message = {
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
      },
      messages: messages,
    };
    return message;
  });

  const messages = await Promise.all(messagesPromised);
  res.json(messages);
});

router.post('/', async (req: Request, res: Response) => {
  const userLogged: User = req['user'];

  let to: User;
  if (userLogged.isAdmin) {
    const toId = parseInt(req.body.to, 10);
    if (isNaN(toId)) {
      res.status(400).json({error: 'Invalid recipient id'});
      return;
    }

    try{
      to = await User.findOne(toId);
    } catch(e) {
      res.status(404).json({error: 'User not found'});
      return;
    }
  } else {
    to = await User.findOne({where: {isAdmin: true}});
  }

  const message = new Message();
  message.fromUser = userLogged;
  message.toUser = to;
  message.content = req.body.content;
  
  const errors = (await validate(message)).map(error => {
    const description = Object.values(error.constraints);
    const field = error.property;

    return {[field]: description};
  });
  if (errors.length > 0) {
    res.status(400).json(errors);
    return;
  }

  try {
    await message.save();
  } catch(e) {
    res.status(500).json({error: 'Internal error'});
  }

  res.status(204).send();
});

export default router;
