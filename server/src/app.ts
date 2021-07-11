import express from 'express';
import { connectDB, disconnectDB } from './database';
import { checkError } from './middleware/checkError';
import { userRoute } from './routes/userRoute';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
connectDB();
// disconnectDB();

// this middleware substitutes the traditional body-parser:
app.use(express.json());
app.use(checkError);

app.use('/user', userRoute);

export { app };
