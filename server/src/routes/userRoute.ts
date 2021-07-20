import { Router } from 'express';
import { CreateUserController } from '../controllers/User/CreateUserController';
import { FetchAllUsersController } from '../controllers/User/FetchAllUsersController';
import { AuthenticateUserController } from '../controllers/User/AuthenticateUserController';
import { DeleteUserController } from '../controllers/User/DeleteUserController';
import { UpdateUserController } from '../controllers/User/UpdateUserController';

import { ensureAuthenticated } from '../middleware/ensureAuthenticated';
import { ensureAdmin } from '../middleware/ensureAdmin';

import { celebrate, Joi, Segments } from 'celebrate';

const userRoute = Router();

/*
 * @route:  POST /user
 * @desc:   Create a new user.
 * @access: Public
 */

const createUserController = new CreateUserController();
userRoute.post(
  '/user',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      isExec: Joi.boolean(),
    },
  }),
  createUserController.handle,
);

/*
 * @route:  PUT /user
 * @desc:   Update user.
 * @access: Public
 */

const updateUserController = new UpdateUserController();
userRoute.put(
  '/user/:id',
  ensureAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
    [Segments.BODY]: {
      password: Joi.string().required(),
      isExec: Joi.boolean(),
    },
  }),
  updateUserController.handle,
);

/*
 * @route:  GET /user/all
 * @desc:   Fetch all users from the collection.
 * @access: Public
 */

const fetchAllUsersController = new FetchAllUsersController();
userRoute.get('/user/all', fetchAllUsersController.handle);

/*
 * @route:  Delete /user
 * @desc:   Delete a user by id.
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
 * @desc:   Authenticate the user.
 * @access: Public
 */

const authenticateUserController = new AuthenticateUserController();
userRoute.post('/login', authenticateUserController.handle);

export { userRoute };
