import mongoose from 'mongoose';

//mongoose.set('strictQuery', false);

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGO_CONNECTION_STRING!,
      {}
    );
    console.log(`MongoDB Connected on ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit();
  }
};
