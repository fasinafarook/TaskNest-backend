import express, { Router } from 'express';
import { protect } from '../middleware/auth';
import { Request, Response } from 'express';

import {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  completeTask, // Import the new completeTask function
} from '../controllers/taskController';

const taskRouter: Router = express.Router();

// Define routes and link them to controller functions
taskRouter.get('/', protect, async (req: Request, res: Response) => {
    await getAllTasks(req, res);
});
taskRouter.post('/', protect, async (req: Request, res: Response) => {
    await createTask(req, res);
});
taskRouter.put('/:id', protect, async (req: Request, res: Response) => {
    await updateTask(req, res);
});
taskRouter.patch('/:id', protect, async (req: Request, res: Response) => { // Route for completing a task
    await completeTask(req, res);
});
taskRouter.delete('/:id', protect, async (req: Request, res: Response) => {
    await deleteTask(req, res);
});
export default taskRouter;
