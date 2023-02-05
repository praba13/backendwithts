import mongoose from 'mongoose';
import 'dotenv/config';
//mongoose.set('strictQuery', false);
import env from '../utils/validateEnv';

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(env.MONGO_CONNECTION_STRING, {});
    console.log(`MongoDB Connected on ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit();
  }
};
