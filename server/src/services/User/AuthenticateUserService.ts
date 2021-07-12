import { User, IUser } from '../../models/User';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

interface IAuthenticate {
  email: string;
  password: string;
}

class AuthenticateUserService {
  public async execute({ email, password }: IAuthenticate) {
    // 1st: check if user exists
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error('Incorrect credentials');
    }

    // 2nd: check the password with the hashed
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('Incorrect credentials');
    }

    // 3rd: return token
    const payload = {
      email: user.email,
    };

    const token = sign(payload, process.env.JWT_SECRET, {
      subject: user.id,
      expiresIn: '1d',
    });

    return token;
  }
}

export { AuthenticateUserService };
