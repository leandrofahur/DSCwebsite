import { Router } from 'express';
import { CreateUserController } from '../controllers/User/CreateUserController';
import { AuthenticateUserController } from '../controllers/User/AuthenticateUserController';

const userRoute = Router();

/*
 * @route:  POST /user
 * @desc:   Create a new user.
 * @access: Public
 */

const createUserController = new CreateUserController();
userRoute.post('/user', createUserController.handle);

/*
 * @route:  POST /login
 * @desc:   Authenticate the user
 * @access: Public
 */

const authenticateUserController = new AuthenticateUserController();
userRoute.post('/login', authenticateUserController.handle);

export { userRoute };
