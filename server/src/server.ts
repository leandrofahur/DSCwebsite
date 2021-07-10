import express from 'express';
const app = express();

// this middleware substitutes the trditional body-parser:
app.use(express.json());

const PORT = process.env.PORT | 5000;
app.listen(PORT, (req, res) => {
  console.log('Server up and running on port 5000');
});
