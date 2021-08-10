import { Request, Response } from 'express';
import { CreateUserService } from '../../services/User/CreateUserService';

class CreateUserController {
  public async handle(request: Request, response: Response) {
    const {
      firstName,
      lastName,
      studentNumber,
      signupDate,
      prefferedPronoum,
      phone,
      email,
      password,
      isExec,
    } = request.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({
      firstName,
      lastName,
      studentNumber,
      signupDate,
      prefferedPronoum,
      phone,
      email,
      password,
      isExec,
    });

    return response.status(200).json(user);
  }
}

export { CreateUserController };
