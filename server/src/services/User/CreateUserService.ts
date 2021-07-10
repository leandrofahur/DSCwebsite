import { User, IUser } from '../../models/User';

class CreateUserService {
  async execute({ email, password, isExec }: IUser) {
    const user = new User({
      email,
      password,
      isExec,
    });

    await user.save();

    return user;
  }
}

export { CreateUserService };
