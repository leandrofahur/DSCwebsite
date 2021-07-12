import { Request, Response } from 'express';
import { FetchAllPostsService } from '../../services/Post/FetchAllPostsService';

class FetchAllPostsController {
  public async handle(request: Request, response: Response) {
    const fetchAllPostsService = new FetchAllPostsService();

    const post = await fetchAllPostsService.execute();

    return response.status(200).json(post);
  }
}

export { FetchAllPostsController };
