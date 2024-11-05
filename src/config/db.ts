import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log('Connected to MongoDB');
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.error('MongoDB connection error:', err.message);
        } else {
            console.error('MongoDB connection error:', err);
        }
    }
};

export default connectDB;
