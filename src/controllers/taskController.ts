import { Request, Response } from 'express';
import Task from '../models/taskModel';
import { Server as SocketIOServer } from 'socket.io';

interface AuthRequest extends Request {
    userId?: string;
}

let io: SocketIOServer;

// Initialize the `io` instance
export const setSocketServerInstance = (socketInstance: SocketIOServer) => {
    io = socketInstance;
};

// Get all tasks for a user
export const getAllTasks = async (req: AuthRequest, res: Response) => {
  try {
    const tasks = await Task.find({ userId: (req as any).userId });
    if (!tasks) {
      return res.status(404).json({ message: 'No tasks found' });
    }
    res.json(tasks);
  } catch (error: any) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Create a new task
export const createTask = async (req: AuthRequest, res: Response) => {
  try {
    const task = new Task({
      ...req.body,
      userId: (req as any).userId,
    });

    await task.save();
    io.emit('taskCreated', task); // Emit the event to all clients
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update a task (only title)
export const updateTask = async (req: AuthRequest, res: Response) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, userId: (req as any).userId },
      { title: req.body.title }, 
      { new: true }
    );

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    io.emit('taskUpdated', task); // Emit the event to all clients
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Complete a task
export const completeTask = async (req: AuthRequest, res: Response) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, userId: (req as any).userId },
      { status: 'completed' }, 
      { new: true }
    );

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    io.emit('taskCompleted', task); // Emit the event to all clients
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete a task
export const deleteTask = async (req: AuthRequest, res: Response) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      userId: (req as any).userId,
    });

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    io.emit('taskDeleted', task._id); // Emit the event to all clients
    res.json({ message: 'Task deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
