import express from 'express';
import { connectDB } from './database';

const app = express();
connectDB(); // connection with the database

// this middleware substitutes the traditional body-parser:
app.use(express.json());

app.listen(5000, () => {
  console.log('Server up and running on port 5000');
});
