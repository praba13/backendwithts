import express from 'express';
import 'dotenv/config';
//import mongoose from 'mongoose';
import { connectDB } from './config/db';

const app = express();
const PORT = process.env.PORT || 6000;

app.get('/', (req, res) => {
  res.send('HALLO');
});

/*
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING!)
  .then(() => {
    console.log('Mongo DB Connected Sucessfully!!!');
  })
  .catch(console.error);
*/
app.listen(PORT, () => {
  connectDB();
  console.log(`Server Running Successfully on PORT ${PORT}!!!`);
});
