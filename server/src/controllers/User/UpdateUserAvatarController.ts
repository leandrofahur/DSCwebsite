import { Request, Response } from 'express';
import { UpdateUserAvatarService } from '../../services/User/UpdateUserAvatarService';

class UpdateUserAvatarController {
  public async handle(request: Request, response: Response) {
    const { user_id } = request.params;
    const avatarFileName = request.file?.filename as string;

    const updateUserAvatarService = new UpdateUserAvatarService();

    const status = await updateUserAvatarService.execute({
      user_id,
      avatarFileName,
    });

    return response.status(200).json(status);
  }
}

export { UpdateUserAvatarController };
