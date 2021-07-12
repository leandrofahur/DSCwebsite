import request from 'supertest';
import { connectDB, disconnectDB } from '../database';
import { app } from '../app';

let post_id: string;

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

  it('should be able to fetch all posts', async () => {
    const response = await request(app).get('/post/all');
    post_id = response.body[0]._id;

    expect(response.status).toBe(200);
  });

  it('should be able to delete a post by id', async () => {
    const response = await request(app).delete(`/post/${post_id}`).send({
      post_type: 'News',
    });

    expect(response.status).toBe(200);
  });

  afterAll(async () => {
    disconnectDB();
  });
});
