import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: path.join(__dirname + '../../../.env') });

const db = mongoose;

const connectDB = async () => {
  // check if the connection will be with for test or dev:
  const connectionString =
    process.env.NODE_ENV == 'test'
      ? process.env.MONGODB_URI_TEST
      : process.env.MONGODB_URI_DEV;

  try {
    await db.connect(connectionString, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB up and running...');
  } catch (err) {
    throw new Error(err.message);
  }
};

const disconnectDB = async () => {
  console.log('MongoDB disconnected...');
  await db.connection.close();
};

export { connectDB, disconnectDB };
