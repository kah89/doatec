import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { User } from "../models/user";

export const verifyAuth = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const auth = req.headers.authorization;
  if (!auth) {
    res.status(401).json({error: 'Authorization header not provided'});
    return;
  } else if (!auth.startsWith('Bearer ')) {
    res.status(403).json({error: 'Malformed authorization header'});
    return;
  }

  const token = auth.split('Bearer ')[1];
  const payload = jwt.verify(token, process.env.JWT_SECRET, {algorithms: ['HS512']});
  if (payload instanceof String) {
    res.status(500).json({error: 'Internal error'});
  }

  const user = await User.findOne({id: payload['id']});
  req['user'] = user;
  return next();
};

export const verifyAdmin = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const userLogged: User = req['user'];
  if (!userLogged.isAdmin) {
    res.status(401).json({error: 'Unauthorized'});
  } else return next();
};

export const validateRequestBody = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const {
    firstName,
    lastName,
    email,
    password,
  } = req.body;

  if (!firstName) {
    res.status(400).json({error: 'Missing first name'});
  } else if (!lastName) {
    res.status(400).json({error: 'Missing last name'});
  } else if (!email) {
    res.status(400).json({error: 'Missing email'});
  } else if (!password) {
    res.status(400).json({error: 'Missing password'});
  } else return next();
};
