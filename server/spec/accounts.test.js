import request from 'supertest';
import app from '../server.js';

describe('POST /users', () => {
  describe('when passed all required fields', () => {
    test('should respond with a 200 status code', async () => {
      const response = await request(app)
        .post('/accounts/create')
        .send({
          type: 'charity',
          name: 'beau2',
          email: 'beau',
          password: 'beau',
          address: {
            streetAddress: 'beau',
            city: 'beau',
            postCode: 'beau',
          },
          telephoneNumber: 13,
          description: 'beau',
          charityNumber: 14,
          websiteLink: 'beau',
          foodHygieneRating: 'beau',
        });
      expect(response.statusCode).toBe(200);
    });
  });

  describe('when not passed all required fields', () => {
    test('should respond with a 400 status code', async () => {
      const response = await request(app).post('/accounts/create').send({
        type: 'charity',
      });
      expect(response.statusCode).toBe(400);
    });
  });

  describe('when validation is not satisfied', () => {
    test('should respond with a 400 status code', async () => {
      const response = await request(app)
        .post('/accounts/create')
        .send({
          type: 'charity',
          name: 'beau2',
          email: 'beau',
          password: 'beau',
          address: {
            streetAddress: 'beau',
            city: 'beau',
            postCode: 'beau',
          },
          telephoneNumber: 'beau',
          description: 'beau',
          charityNumber: 'beau',
          websiteLink: 'beau',
          foodHygieneRating: 'beau',
        });
      expect(response.statusCode).toBe(400);
    });
  });
});
