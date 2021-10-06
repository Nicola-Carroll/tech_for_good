import request from 'supertest';
import app from '../server.js';

describe('POST /users', () => {
  describe('when passed a username and password', () => {
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
});
