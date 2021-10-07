import request from 'supertest';
import app from '../../server.js';

describe('GET /listings', () => {
  test('it should respond to the GET method', async () => {
    const response = await request(app).get('/listings');
    expect(response.statusCode).toBe(200);
  });
});

describe('POST /listings', () => {
  describe('when passed all required fields', () => {
    test('should respond with a 200 status code', async () => {
      const response = await request(app).post('/listings/create').send({
        numberOfMeals: 10,
        description: 'test',
        timeAvailableUntil: '2019-04-29T21:19:15.187Z',
        listedBy: 1,
        claimedBy: 2,
      });
      expect(response.statusCode).toBe(200);
    });
  });

  describe('when not passed all required fields', () => {
    test('should respond with a 400 status code', async () => {
      const response = await request(app).post('/listings/create').send({
        numberOfMeals: 10,
      });
      expect(response.statusCode).toBe(400);
    });
  });

  describe('when validation is not satisfied', () => {
    test('should respond with a 400 status code', async () => {
      const response = await request(app).post('/listings/create').send({
        numberOfMeals: 'not a number',
        description: 'test',
        timeAvailableUntil: 'this is not a date',
        listedBy: 1,
        claimedBy: 2,
      });
      expect(response.statusCode).toBe(400);
    });
  });
});
