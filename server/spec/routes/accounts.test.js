import request from 'supertest';
import app from '../../server.js';

describe('POST /accounts', () => {
  describe('when passed all required fields', () => {
    test('should respond with a 200 status code', async () => {
      const response = await request(app)
        .post('/api/accounts/create')
        .send({
          type: 'charity',
          name: 'test',
          email: 'test',
          password: 'test',
          address: {
            streetAddress: 'test',
            city: 'test',
            postCode: 'test',
          },
          telephoneNumber: 13,
          description: 'test',
          charityNumber: 14,
          websiteLink: 'test',
          foodHygieneRating: 'test',
        });
      expect(response.statusCode).toBe(200);
    });
  });

  describe('when not passed all required fields', () => {
    test('should respond with a 400 status code', async () => {
      const response = await request(app).post('/api/accounts/create').send({
        type: 'charity',
      });
      expect(response.statusCode).toBe(400);
    });
  });

  describe('when validation is not satisfied', () => {
    test('should respond with a 400 status code', async () => {
      const response = await request(app)
        .post('/api/accounts/create')
        .send({
          type: 'charity',
          name: 'test',
          email: 'test',
          password: 'test',
          address: {
            streetAddress: 'test',
            city: 'test',
            postCode: 'test',
          },
          telephoneNumber: 'test',
          description: 'test',
          charityNumber: 'test',
          websiteLink: 'test',
          foodHygieneRating: 'test',
        });
      expect(response.statusCode).toBe(400);
    });
  });
});
