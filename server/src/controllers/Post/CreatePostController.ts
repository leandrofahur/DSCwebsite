import { Request, Response } from 'express';
import { CreatePostService } from '../../services/Post/CreatePostService';

class CreatePostController {
  public async handle(request: Request, response: Response) {
    const { post_type } = request.body;

    const createPostService = new CreatePostService();

    const post = await createPostService.execute({ post_type });

    return response.status(200).json(post);
  }
}

export { CreatePostController };
