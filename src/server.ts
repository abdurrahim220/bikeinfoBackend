import mongoose from 'mongoose';
import app from './app';
import { config } from './config';

const connectDB = async () => {
  try {
    await mongoose.connect(config.database_url as string);
    console.log('Database connected successfully');
  } catch (error) {
    console.log('Failed to connect database', error);
  }
};

app.listen(config.port, () => {
  console.log(`Example app listening on port ${config.port}`);
});

connectDB();
