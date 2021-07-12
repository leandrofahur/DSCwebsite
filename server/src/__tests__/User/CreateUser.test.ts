import request from 'supertest';
import { connectDB, disconnectDB } from '../../database';
// import mongoose from 'mongoose';
import { app } from '../../app';

describe('Test user route', () => {
  beforeAll(async () => {
    connectDB();
  });

  it('should be able to create a new user', async () => {
    const response = await request(app).post('/user').send({
      email: 'kaiser@email.com',
      password: 'kaiser123',
      isExec: false,
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

  afterAll(async () => {
    disconnectDB();
  });
});
