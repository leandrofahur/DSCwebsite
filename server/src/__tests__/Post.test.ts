import request from 'supertest';
import { connectDB, disconnectDB } from '../database';
import { app } from '../app';

describe('Test post route', () => {
  beforeAll(async () => {
    connectDB();
  });

  it('should be able to create a new post', async () => {
    const response = await request(app).post('/post').send({
      post_type: 'News',
    });

    expect(response.status).toBe(200);
  });

  afterAll(async () => {
    disconnectDB();
  });
});
