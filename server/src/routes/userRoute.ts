import { Router } from 'express';
import { CreateUserController } from '../controllers/User/CreateUserController';

const userRoute = Router();

const createUserController = new CreateUserController();
userRoute.post('/', createUserController.handle);

export { userRoute };
