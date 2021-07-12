import { Request, Response } from 'express';
import { DeletePostService } from '../../services/Post/DeletePostService';

class DeletePostController {
  public async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deletePostService = new DeletePostService();

    const status = await deletePostService.execute(id);

    return response.status(200).json(status);
  }
}

export { DeletePostController };
