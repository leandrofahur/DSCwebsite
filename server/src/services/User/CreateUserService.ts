import { User, IUser } from '../../models/User';
import { hash } from 'bcryptjs';

class CreateUserService {
  public async execute({
    firstName,
    lastName,
    studentNumber,
    signupDate,
    prefferedPronoum,
    phone,
    avatar,
    bio,
    social,
    codingSkills,
    userType,
    program,
    expectedGraduationDate,
    courses,
    isWorkingDeveloper,
    email,
    password,
    isExec,
  }: IUser) {
    // 1st step: check if email is empty
    if (!email) {
      throw new Error('Incorrect credentials');
    }

    // 2nd step: check if the user already exists using the email
    const userAlreadyExists = await User.findOne({ email });

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    if (isExec) {
      isExec = false;
    }

    // @TODO: save array of preffered pronoums:
    // 3rd step: check all the other variables:
    // treat the case for array of types.

    const encryptedPassword = await hash(password, 8);

    // 3rd: create a new user with the encrypted password
    const user = new User({
      firstName,
      lastName,
      studentNumber,
      signupDate,
      prefferedPronoum,
      phone,
      avatar,
      bio,
      social,
      codingSkills,
      userType,
      program,
      expectedGraduationDate,
      courses,
      isWorkingDeveloper,
      email,
      password: encryptedPassword,
      isExec,
    });

    await user.save();

    return user;
  }
}

export { CreateUserService };
