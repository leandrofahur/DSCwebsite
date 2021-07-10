import express from 'express';
import { connectDB } from './database';
import { checkError } from './middleware/checkError';
import { userRoute } from './routes/userRoute';

const app = express();
connectDB();

// this middleware substitutes the traditional body-parser:
app.use(express.json());
app.use(checkError);

app.use('/user', userRoute);

app.listen(5000, () => {
  console.log('Server up and running on port 5000');
});
