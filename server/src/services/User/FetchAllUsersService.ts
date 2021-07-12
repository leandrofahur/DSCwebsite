import { User, IUser } from '../../models/User';
import { hash } from 'bcryptjs';

class FetchAllUsersService {
  public async execute() {
    // 1st: fetch all
    const users = await User.find().select('-password');

    // 2nd: check if the collection is empty
    if (!users) {
      throw new Error('There are currently no users registred');
    }

    return users;
  }
}

export { FetchAllUsersService };
