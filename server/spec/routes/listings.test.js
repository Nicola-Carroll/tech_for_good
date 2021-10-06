import request from 'supertest';
import app from '../../server.js';

describe('GET /listings', () => {
  test('it should respond to the GET method', async () => {
    // should respond with a 200 status code
    console.log(process.env.NODE_ENV);
    const response = await request(app).get('/listings');
    expect(response.statusCode).toBe(200);
  });
});
