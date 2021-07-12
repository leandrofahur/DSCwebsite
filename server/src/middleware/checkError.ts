import { Request, Response, NextFunction } from 'express';

const checkError = (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  if (error instanceof Error) {
    return response.status(400).json({
      error: error.message,
    });
  }
  return response.status(500).json({
    status: 'Error',
    message: 'Internal server error occurred',
  });
};

export { checkError };
