import { Router } from 'express';
import { CreateUserController } from '../controllers/User/CreateUserController';
import { FetchAllUsersController } from '../controllers/User/FetchAllUsersController';
import { AuthenticateUserController } from '../controllers/User/AuthenticateUserController';

import { ensureAuthenticated } from '../middleware/ensureAuthenticated';
import { ensureAdmin } from '../middleware/ensureAdmin';
import { DeleteUserController } from '../controllers/User/DeleteUserController';

const userRoute = Router();

/*
 * @route:  POST /user
 * @desc:   Create a new user.
 * @access: Public
 */

const createUserController = new CreateUserController();
userRoute.post('/user', createUserController.handle);

/*
 * @route:  GET /user/all
 * @desc:   Fetch all users from the collection
 * @access: Public
 */

const fetchAllUsersController = new FetchAllUsersController();
userRoute.get('/user/all', fetchAllUsersController.handle);

/*
 * @route:  Deleete /user
 * @desc:   Delete user
 * @access: Private
 */

const deleteUserController = new DeleteUserController();
userRoute.delete(
  '/user/:id',
  ensureAdmin,
  ensureAuthenticated,
  deleteUserController.handle,
);

/*
 * @route:  POST /login
 * @desc:   Authenticate the user
 * @access: Public
 */

const authenticateUserController = new AuthenticateUserController();
userRoute.post('/login', authenticateUserController.handle);

export { userRoute };
