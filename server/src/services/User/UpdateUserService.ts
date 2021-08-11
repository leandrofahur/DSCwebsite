import { User, IUser } from '../../models/User';
import { hash } from 'bcryptjs';

interface IUpdate {
  readonly id: string;
  password: string;
  isExec: boolean;
}

class UpdateUserService {
  public async execute({ id, password, isExec }: IUpdate) {
    let encryptedPassword: string = '';
    // 1st: update required fields
    if (password) {
      encryptedPassword = await hash(password, 8);
    }

    // 2nd step: update user with the encrypted password
    const user = await User.updateMany(
      { _id: id },
      {
        $set: {
          password: encryptedPassword,
          isExec,
        },
      },
      { new: true },
    );

    return 'Update successful';
  }
}

export { UpdateUserService };
