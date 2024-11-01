import express from 'express';
import http from 'http';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db';


dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes


// Database connection
connectDB();

// Create HTTP server for Socket.io
const server = http.createServer(app);

// Initialize Socket.io


// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
