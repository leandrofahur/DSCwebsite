import { Request, Response } from 'express';
import { FetchAllUsersService } from '../../services/User/FetchAllUsersService';

class FetchAllUsersController {
  public async handle(request: Request, response: Response) {
    const fetchAllUsersService = new FetchAllUsersService();

    const user = await fetchAllUsersService.execute();

    return response.status(200).json(user);
  }
}

export { FetchAllUsersController };
