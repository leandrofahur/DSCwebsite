import request from 'supertest';
import { connectDB, disconnectDB } from '../database';
import { app } from '../app';

let token: string;
let user_id: string;

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

  it('should not be able to create a user that already exists', async () => {
    const response = await request(app).post('/user').send({
      email: 'kaiser@email.com',
      password: 'kaiser123',
      isExec: false,
    });

    expect(response.status).toBe(400);
  });

  it('shoulde be able to fetch all users', async () => {
    const response = await request(app).get('/user/all');

    user_id = response.body[0]._id;
    expect(response.status).toBe(200);
  });

  it('shoulde be able to update itself', async () => {
    const fetchToken = await request(app).post('/login').send({
      email: 'kaiser@email.com',
      password: 'kaiser123',
    });

    token = fetchToken.body;
    console.log(user_id);
    const response = await request(app)
      .put(`/user/${user_id}`)
      .set('Authorization', `Bearer ${token}`)
      .send({
        password: 'kaiser123456',
        isExec: true,
      });

    expect(response.status).toBe(200);
  });

  it('shoulde be able to delete itself', async () => {
    const fetchToken = await request(app).post('/login').send({
      email: 'kaiser@email.com',
      password: 'kaiser123456',
    });

    token = fetchToken.body;

    const response = await request(app)
      .delete(`/user/${user_id}`)
      .set('Authorization', `Bearer ${token}`);

    expect(response.body).toBe('User deleted!');
  });

  afterAll(async () => {
    disconnectDB();
  });
});
