import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import { connectDB } from './database';
import { userRoute } from './routes/userRoute';
import { postRoute } from './routes/postRoute';
import dotenv from 'dotenv';
import { checkError } from './middleware/checkError';
import { errors } from 'celebrate';
dotenv.config();

const app = express();
connectDB();

// this middleware substitutes the traditional body-parser:
app.use(express.json());
app.use(userRoute);
app.use(postRoute);

app.use(errors());
app.use(checkError);

export { app };
