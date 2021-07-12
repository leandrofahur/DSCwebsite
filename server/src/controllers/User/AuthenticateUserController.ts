import { Request, Response } from 'express';
import { AuthenticateUserService } from '../../services/User/AuthenticateUserService';

class AuthenticateUserController {
  public async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticateUserService = new AuthenticateUserService();

    const token = await authenticateUserService.execute({
      email,
      password,
    });

    return response.status(200).json(token);
  }
}

export { AuthenticateUserController };
