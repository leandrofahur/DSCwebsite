import path from 'path';
import fs from 'fs';

import { User } from '../../models/User';
import uploadConfig from '../../config/upload';

interface IRequest {
  user_id: string;
  avatarFileName: string;
}

class UpdateUserAvatarService {
  public async execute({ user_id, avatarFileName }: IRequest) {
    const user = await User.findOne({ _id: user_id }).select('-password');

    if (!user) {
      throw new Error('User not found');
    }

    if (user.avatar) {
      const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar);
      const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);

      if (userAvatarFileExists) {
        await fs.promises.unlink(userAvatarFilePath);
      }
    }

    user.avatar = avatarFileName;

    await user.save();

    return user;
  }
}

export { UpdateUserAvatarService };
