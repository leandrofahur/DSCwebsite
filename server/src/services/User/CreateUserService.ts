import { User, IUser } from '../../models/User';

class CreateUserService {
  async execute({ email, password, isExec = false }: IUser) {
    const userAlreadyExists = await User.findOne({ email });

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    const user = new User({ email, password, isExec });
    await User.save(user);

    return user;
  }
}

export { CreateUserService };
