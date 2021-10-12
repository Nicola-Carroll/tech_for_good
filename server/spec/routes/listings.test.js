import request from 'supertest';
import app from '../../server.js';
import Listing from '../../models/listing.js';

describe('GET /listings', () => {
  test('it should respond to the GET method', async () => {
    const response = await request(app).get('/api/listings');
    expect(response.statusCode).toBe(200);
  });
});

describe('POST /listings', () => {
  describe('when passed all required fields', () => {
    test('should respond with a 200 status code', async () => {
      const response = await request(app).post('/api/listings/create').send({
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
      const response = await request(app).post('/api/listings/create').send({
        numberOfMeals: 10,
      });
      expect(response.statusCode).toBe(400);
    });
  });

  describe('when validation is not satisfied', () => {
    test('should respond with a 400 status code', async () => {
      const response = await request(app).post('/api/listings/create').send({
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

describe('PATCH /listings', () => {
  describe('when passed all required fields', () => {
    test('should respond with a 200 status code', async () => {
      const postResponse = await request(app)
        .post('/api/listings/create')
        .send({
          numberOfMeals: 10,
          description: 'test to confirm patch responds',
          timeAvailableUntil: '2019-04-29T21:19:15.187Z',
          listedBy: 1,
        });

      const response = await request(app)
        .patch(`/api/listings/update/${postResponse.body._id}`)
        .send({
          claimedBy: 200,
        });
      expect(response.statusCode).toBe(200);
    });
  });

  describe('when passed all required fields', () => {
    test('should update the claimed by if null', async () => {
      const postResponse = await request(app)
        .post('/api/listings/create')
        .send({
          numberOfMeals: 10,
          description: 'test',
          timeAvailableUntil: '2019-04-29T21:19:15.187Z',
          listedBy: 1,
        });

      const newListing = postResponse.body;

      const response = await request(app)
        .patch(`/api/listings/update/${newListing._id}`)
        .send({
          claimedBy: 500,
        });
      expect(response.body.claimedBy).toBe(500);
    });

    test('should not update the claimed by if already populated', async () => {
      const postResponse = await request(app)
        .post('/api/listings/create')
        .send({
          numberOfMeals: 10,
          description: 'test',
          timeAvailableUntil: '2019-04-29T21:19:15.187Z',
          listedBy: 1,
          claimedBy: 2,
        });

      const newListing = postResponse.body;

      const response = await request(app)
        .patch(`/api/listings/update/${newListing._id}`)
        .send({
          claimedBy: 500,
        });
      expect(response.body.claimedBy).toBe(2);
    });
  });
});
