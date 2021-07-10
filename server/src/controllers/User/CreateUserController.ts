import { Request, Response } from 'express';
import { CreateUserService } from '../../services/User/CreateUserService';

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { email, password, isExec } = request.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({ email, password, isExec });

    return response.status(200).json(user);
  }
}

export { CreateUserController };
