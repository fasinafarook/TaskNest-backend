import express from 'express';
import http from 'http';
import dotenv from 'dotenv';
import cors from 'cors';
import userRouter from './routes/userRoutes';
import taskRouter from './routes/taskRoutes';
import initializeSocket from './config/socket';
import { setSocketServerInstance } from './controllers/taskController';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = initializeSocket(server);

// Set the `io` instance for the task controller
setSocketServerInstance(io);

app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGO_URI as string)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/user', userRouter);
app.use('/api/task', taskRouter);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
