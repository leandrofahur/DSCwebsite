import { Request, Response } from 'express';
import { UpdateUserService } from '../../services/User/UpdateUserService';

class UpdateUserController {
  public async handle(request: Request, response: Response) {
    const id = request.user.id;
    const { password, isExec } = request.body;

    const updateUserService = new UpdateUserService();

    const status = await updateUserService.execute({
      id,
      password,
      isExec,
    });

    return response.status(200).json(status);
  }
}

export { UpdateUserController };
