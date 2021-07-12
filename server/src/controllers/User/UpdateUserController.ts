import { Request, Response } from 'express';
import { UpdateUserService } from '../../services/User/UpdateUserService';

class UpdateUserController {
  public async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { password, isExec } = request.body;
    console.log(id);
    const updateUserService = new UpdateUserService();

    const status = await updateUserService.execute({
      password,
      isExec,
      id,
    });

    return response.status(200).json(status);
  }
}

export { UpdateUserController };
