import request from 'supertest';
import app from '../../server.js';

describe('GET /accounts/:id', () => {
  describe('when passed a valid ID', () => {
    test('should respond with 200 status code', async () => {
      const postResponse = await request(app)
        .post('/api/accounts/create')
        .send({
          type: 'Charity',
          username: 'test',
          emailAddress: 'test@example.com',
          password: 'test',
          addressLine1: 'test',
          city: 'test',
          postCode: 'SE1 9JB',
          contactNumber: 123456789,
          description: 'test',
          charityNumber: 12545,
          websiteLink: 'test',
          foodHygieneRating: 5,
        });

      console.log(postResponse.body._id);
      console.log(postResponse.statusCode);

      const response = await request(app).get(
        `/api/accounts/${postResponse.body._id}`,
      );

      expect(response.statusCode).toBe(200);
    });

    test('should return the correct account details', async () => {
      const postResponse = await request(app)
        .post('/api/accounts/create')
        .send({
          type: 'Charity',
          username: 'test_a',
          emailAddress: 'test_a@example.com',
          password: 'test',
          addressLine1: 'test',
          city: 'test',
          postCode: 'SE1 9JA',
          contactNumber: 123456789,
          description: 'test',
          charityNumber: 12345,
          websiteLink: 'test',
          foodHygieneRating: 5,
        });

      const response = await request(app).get(
        `/api/accounts/${postResponse.body._id}`,
      );

      expect(response.body._id).toBe(postResponse.body._id);
    });
  });
});

describe('when passed an invalid ID', () => {
  test('should respond with 400', async () => {
    const response = await request(app).get(
      `/api/accounts/123294830248203948xyz`,
    );

    expect(response.statusCode).toBe(400);
  });
});

describe('POST /accounts/create', () => {
  describe('when passed all required fields', () => {
    test('should respond with a 200 status code', async () => {
      const response = await request(app).post('/api/accounts/create').send({
        type: 'Charity',
        username: 'test_c',
        emailAddress: 'test_c@example.com',
        password: 'test',
        addressLine1: 'test',
        city: 'test',
        postCode: 'SE1 9JA',
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
      const response = await request(app).post('/api/accounts/create').send({
        type: 'Charity',
        username: 'test_d',
        emailAddress: 'test.example.com',
        password: 'test',
        addressLine1: 'test',
        city: 'test',
        postCode: '0000 000',
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

describe('POST /accounts/authenticate', () => {
  describe('when passed all required fields', () => {
    test('should respond with a 200 status code', async () => {
      const response = await request(app)
        .post('/api/accounts/authenticate')
        .send({
          username: 'test',
          password: 'test',
        });
      expect(response.statusCode).toBe(200);
    });
  });

  describe('when passed an unregistered username', () => {
    test('should respond with unregistered details message', async () => {
      const response = await request(app)
        .post('/api/accounts/authenticate')
        .send({
          username: 'test999',
          password: 'test',
        });
      expect(response.text).toBe('You have not been registered yet');
    });
  });

  describe('when passed an incorrect password', () => {
    test('should respond with incorrect password message', async () => {
      const response = await request(app)
        .post('/api/accounts/authenticate')
        .send({
          username: 'test',
          password: 'test999',
        });
      expect(response.text).toBe('Incorrect password');
    });
  });
});
