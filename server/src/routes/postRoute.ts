import { Router } from 'express';

import { CreatePostController } from '../controllers/Post/CreatePostController';
import { DeletePostController } from '../controllers/Post/DeletePostController';
import { FetchAllPostsController } from '../controllers/Post/FetchAllPostsController';

import { celebrate, Joi, Segments } from 'celebrate';
import joiObjectId from 'joi-objectid';
const myJoiObjectId = joiObjectId(Joi);

const postRoute = Router();

/*
 * @route:  POST /post
 * @desc:   Create a post.
 * @access: Public
 */

const createPostController = new CreatePostController();
postRoute.post(
  '/post',
  celebrate({
    [Segments.BODY]: {
      post_type: Joi.string().required(),
    },
  }),
  createPostController.handle,
);

/*
 * @route:  DELETE /post/:id
 * @desc:   Delete a post by id.
 * @access: Public
 */

const deletePostController = new DeletePostController();
postRoute.delete(
  '/post/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: myJoiObjectId().required(),
    },
  }),
  deletePostController.handle,
);

/*
 * @route:  GET /post/all
 * @desc:   Fetch all posts.
 * @access: Public
 */

const fetchAllPostsController = new FetchAllPostsController();
postRoute.get('/post/all', fetchAllPostsController.handle);

export { postRoute };
