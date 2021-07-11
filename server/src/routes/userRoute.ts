import { Router } from 'express';
import { CreateUserController } from '../controllers/User/CreateUserController';

const userRoute = Router();

/*
 * @route:  POST /user
 * @desc:   Register a user.
 * @access: Public
 */
const createUserController = new CreateUserController();
userRoute.post('/', createUserController.handle);

export { userRoute };
