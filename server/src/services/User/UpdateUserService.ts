import { User, IUser } from '../../models/User';
import { hash } from 'bcryptjs';

interface IUpdate {
  password: string;
  isExec: boolean;
  id: string;
}

class UpdateUserService {
  public async execute({ password, isExec, id }: IUpdate) {
    let encryptedPassword: string = '';
    // 1st: update required fields
    if (password) {
      encryptedPassword = await hash(password, 8);
    }

    // 2nd step: update user with the encrypted password
    const user = await User.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          password: encryptedPassword,
          isExec,
        },
      },
      { new: true },
    );

    return user;
  }
}

export { UpdateUserService };
