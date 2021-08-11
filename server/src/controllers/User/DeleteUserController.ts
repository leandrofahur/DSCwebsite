import { Request, Response } from 'express';
import { DeleteUserService } from '../../services/User/DeleteUserService';

class DeleteUserController {
  public async handle(request: Request, response: Response) {
    const id = request.user.id;
    const deleteUserService = new DeleteUserService();

    const status = await deleteUserService.execute(id);

    return response.status(200).json(status);
  }
}

export { DeleteUserController };
