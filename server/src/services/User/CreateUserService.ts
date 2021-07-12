import { User, IUser } from '../../models/User';
import { hash } from 'bcryptjs';

class CreateUserService {
  public async execute({ email, password, isExec }: IUser) {
    // 1st step: check if email is empty
    if (!email) {
      throw new Error('Incorrect credentials');
    }

    // @TODO: check all required fields:

    // 2nd step: check if the user already exists using the email
    const userAlreadyExists = await User.findOne({ email });

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    const encryptedPassword = await hash(password, 8);

    // 3rd: create a new user with the encrypted password
    const user = new User({
      email,
      password: encryptedPassword,
      isExec,
    });

    await user.save();

    return user;
  }
}

export { CreateUserService };
