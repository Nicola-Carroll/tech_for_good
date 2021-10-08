import request from 'supertest';
import app from '../../server.js';

describe('POST /accounts', () => {
  describe('when passed all required fields', () => {
    test('should respond with a 200 status code', async () => {
      const response = await request(app)
        .post('/api/accounts/create')
        .send({
          type: 'Charity',
          username: 'test',
          emailAddress: 'test@example.com',
          password: 'test',
          address: {
            addressLine1: 'test',
            city: 'test',
            postCode: 'SE1 9JA',
          },
          contactNumber: 123456789,
          description: 'test',
          charityNumber: 12345,
          websiteLink: 'test',
          foodHygieneRating: 5,
        });
      expect(response.statusCode).toBe(200);
    });
  });

  describe('when not passed all required fields', () => {
    test('should respond with a 400 status code', async () => {
      const response = await request(app).post('/api/accounts/create').send({
        type: 'Charity',
      });
      expect(response.statusCode).toBe(400);
    });
  });

  describe('when validation is not satisfied', () => {
    test('should respond with a 400 status code', async () => {
      const response = await request(app)
        .post('/api/accounts/create')
        .send({
          type: 'Charity',
          username: 'test2',
          emailAddress: 'test.example.com',
          password: 'test',
          address: {
            addressLine1: 'test',
            city: 'test',
            postCode: '0000 000',
          },
          contactNumber: 1234,
          description: 'test',
          charityNumber: 12,
          websiteLink: 'test',
          foodHygieneRating: 7,
        });
      expect(response.statusCode).toBe(400);
    });
  });
});
