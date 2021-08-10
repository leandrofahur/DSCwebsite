import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
  iat: number;
  exp: number;
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  // 1st: get token
  const authToken = request.headers.authorization;

  // 2nd: check if token has information
  if (!authToken) {
    return response.status(401).end();
  }

  // 3rd: split the beare authentication method
  const [, token] = authToken.split(' ');

  try {
    // check if token is valid
    const { sub } = verify(token, process.env.JWT_SECRET) as IPayload;

    // fetch user information
    request.user = { id: sub };

    return next();
  } catch (err) {
    return response.status(401).end();
  }
}
