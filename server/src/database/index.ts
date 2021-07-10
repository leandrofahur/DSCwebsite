import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: path.join(__dirname + '../../../.env') });

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI_TEST, {
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log('MongoDB connected successfully');
  } catch (err) {
    throw new Error(err.message);
  }
};

export { connectDB };
