import express from 'express';
import { checkError } from './middleware/checkError';
const app = express();

// this middleware substitutes the traditional body-parser:
app.use(express.json());
app.use(checkError);

app.listen(5000, () => {
  console.log('Server up and running on port 5000');
});
