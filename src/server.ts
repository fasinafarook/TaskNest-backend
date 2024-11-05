import express from 'express';
import http from 'http';
import dotenv from 'dotenv';
import cors from 'cors';

import { connectDB } from './config/db';
import userRouter from './routes/userRoutes';
import taskRouter from './routes/taskRoutes';
import initializeSocket from './config/socket';
import { setSocketServerInstance } from './controllers/taskController';

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = initializeSocket(server);

// Set the `io` instance for the task controller
setSocketServerInstance(io);


// Middleware
app.use(cors());
app.use(express.json());


// Database connection
mongoose();

// Routes
app.use('/api/user', userRouter);
app.use('/api/task', taskRouter);




const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
