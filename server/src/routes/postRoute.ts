import { Router } from 'express';
import { CreatePostController } from '../controllers/Post/CreatePostController';

const postRoute = Router();

/*
 * @route:  POST /post
 * @desc:   Create a post.
 * @access: Public
 */

const createPostController = new CreatePostController();
postRoute.post('/post', createPostController.handle);

export { postRoute };
