
import express from 'express';
import { Request, Response } from 'express';
import { register, login } from '../controllers/userController';



userRouter.post('/register',async (req: Request, res: Response) => {
    await register(req, res);
});
userRouter.post('/login', async (req: Request, res: Response) => {
    await login(req, res);
});

export default userRouter;
