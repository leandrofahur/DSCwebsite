import { User, IUser } from '../../models/User';

class DeleteUserService {
  public async execute(id: String) {
    // 1st: search user
    const user = await User.findById(id);
    if (!user) {
      return 'User does not exists!';
    }

    // @TODO: remove posts

    // 2nd: delete user
    await User.deleteOne({ _id: id });
    return 'User deleted!';
  }
}

export { DeleteUserService };
