import { User, IUser } from '../../models/User';

// interface IDelete {
//   id: string;
// }

class DeleteUserService {
  public async execute(id: String) {
    // 1st: search user
    const user = await User.findById(id);
    if (!user) {
      return 'User does not exists!';
    }

    // 2nd: delete user
    await User.remove({ _id: id });
    return 'User deleted!';
  }
}

export { DeleteUserService };
