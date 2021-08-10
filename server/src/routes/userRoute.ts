import { Router } from 'express';
import { CreateUserController } from '../controllers/User/CreateUserController';
import { FetchAllUsersController } from '../controllers/User/FetchAllUsersController';
import { AuthenticateUserController } from '../controllers/User/AuthenticateUserController';
import { DeleteUserController } from '../controllers/User/DeleteUserController';
import { UpdateUserController } from '../controllers/User/UpdateUserController';
import { UpdateUserAvatarController } from '../controllers/User/UpdateUserAvatarController';

import { ensureAuthenticated } from '../middleware/ensureAuthenticated';
import { ensureAdmin } from '../middleware/ensureAdmin';

import { celebrate, Joi, Segments } from 'celebrate';
import joiObjectId from 'joi-objectid';
const myJoiObjectId = joiObjectId(Joi);

import multer from 'multer';
import uploadConfig from '../config/upload';
const upload = multer(uploadConfig);

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
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      studentNumber: Joi.number().required(),
      signupDate: Joi.date().required(),
      prefferedPronoum: Joi.array().items(Joi.string()),
      phone: Joi.object().keys({
        canadian: Joi.string(),
        whatsapp: Joi.string(),
      }),
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
      id: myJoiObjectId().required(),
    },
    [Segments.BODY]: {
      password: Joi.string(),
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
  celebrate({
    [Segments.PARAMS]: {
      id: myJoiObjectId().required(),
    },
  }),
  deleteUserController.handle,
);

/*
 * @route:  POST /login
 * @desc:   Authenticate the user.
 * @access: Public
 */

const authenticateUserController = new AuthenticateUserController();
userRoute.post('/login', authenticateUserController.handle);

/*
 * @route:  PUT /avatar
 * @desc:   Update user avatar.
 * @access: Private
 */

const updateUserAvatarController = new UpdateUserAvatarController();
userRoute.patch(
  '/user/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  updateUserAvatarController.handle,
);

export { userRoute };
