import request from 'supertest';
import { connectDB, disconnectDB } from '../../database';
import { app } from '../../app';

let token: string;
// let user: { id: string; email: string; password: string; isExec: boolean };

describe('Test user route', () => {
  beforeAll(async () => {
    connectDB();
  });

  it('should be able to create a new user', async () => {
    const response = await request(app).post('/user').send({
      email: 'kaiser@email.com',
      password: 'kaiser123',
      isExec: true,
    });

    expect(response.status).toBe(200);
  });

  it('shoulde not be able to create a user that already exists', async () => {
    const response = await request(app).post('/user').send({
      email: 'kaiser@email.com',
      password: 'kaiser123',
      isExec: false,
    });

    expect(response.status).toBe(400);
  });

  it('shoulde be able to fetch all users', async () => {
    const response = await request(app).get('/user/all');

    expect(response.status).toBe(200);
  });

  afterAll(async () => {
    disconnectDB();
  });
});
