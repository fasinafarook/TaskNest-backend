import mongoose, { ConnectOptions } from 'mongoose';

export const connectDB = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || '', {
      // Explicitly cast as ConnectOptions if additional properties are needed
    } as ConnectOptions);

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${(error as Error).message}`);
    process.exit(1); // Exit process with failure
  }
};
