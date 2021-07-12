import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import { connectDB } from './database';
import { userRoute } from './routes/userRoute';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
connectDB();

// this middleware substitutes the traditional body-parser:
app.use(express.json());

app.use(userRoute);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof Error) {
      return response.status(400).json({
        error: error.message,
      });
    }
    return response.status(500).json({
      status: 'Error',
      message: 'Internal server error occurred',
    });
  },
);

export { app };
