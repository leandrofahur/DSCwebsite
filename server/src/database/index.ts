import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

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
  } catch (err) {
    throw new Error(err.message);
  }
};

const disconnectDB = async () => {
  if (process.env.NODE_ENV == 'test') {
    await db.connection.dropDatabase();
  }
  await db.connection.close();
};

export { connectDB, disconnectDB };
