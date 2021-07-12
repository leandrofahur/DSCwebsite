import { Request, Response, NextFunction } from 'express';
import { User } from '../models/User';

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const { user_id } = request;
  const { isExec } = await User.findOne({
    id: user_id,
  });

  console.log('test');

  if (isExec) {
    return next();
  }

  return response.status(401).json({
    message: 'Unauthorized user',
  });
}
