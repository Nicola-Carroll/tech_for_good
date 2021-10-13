import request from 'supertest';
import app from '../../server.js';
import Listing from '../../models/listing.js';

describe('GET /listings', () => {
  test('it should respond to the GET method', async () => {
    const response = await request(app).get('/api/listings');
    expect(response.statusCode).toBe(200);
  });
});

describe('GET /listings/donations', () => {
  test('it should respond to the GET method', async () => {
    const response = await request(app).get('/api/listings/donations');
    expect(response.statusCode).toBe(200);
  });

  test('it should respond with total donations from each donator', async () => {
    const postResponse = await request(app).post('/api/listings/create').send({
      numberOfMeals: 12,
      description: 'test',
      timeAvailableUntil: '2019-04-29T21:19:15.187Z',
      listedBy: 'donator',
    });

    const response = await request(app).get('/api/listings/donations');
    expect(response.body).toMatchObject([donator, 12]);
  });
}),
  describe('GET /listings/account/:id', () => {
    describe('when passed a valid ID', () => {
      test('should respond with 200 status code', async () => {
        const postResponse = await request(app)
          .post('/api/accounts/create')
          .send({
            type: 'Restaurant',
            username: 'test_z',
            emailAddress: 'test_z@example.com',
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

        const response = await request(app).get(
          `/api/listings/account/${postResponse.body._id}`,
        );

        expect(response.statusCode).toBe(200);
      });

      test('should return the correct number of listings', async () => {
        const postResponse = await request(app)
          .post('/api/listings/create')
          .send({
            numberOfMeals: 10,
            description: 'test',
            timeAvailableUntil: '2019-04-29T21:19:15.187Z',
            listedBy: 'test_id',
            listedByUsername: 1,
            claimedBy: 2,
          });

        const response = await request(app).get(
          `/api/listings/account/${postResponse.body.listedBy}`,
        );

        expect(response.body.length).toBe(1);
      });
    });
  });

describe('GET /listings/claimed/:id', () => {
  describe('when passed a valid ID', () => {
    test('should respond with 200 status code', async () => {
      const postResponse = await request(app)
        .post('/api/accounts/create')
        .send({
          type: 'Charity',
          username: 'test_y',
          emailAddress: 'test_y@example.com',
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

      const response = await request(app).get(
        `/api/listings/claimed/${postResponse.body._id}`,
      );

      expect(response.statusCode).toBe(200);
    });

    test('should return the correct number of listings', async () => {
      const postResponse = await request(app)
        .post('/api/listings/create')
        .send({
          numberOfMeals: 10,
          description: 'test',
          timeAvailableUntil: '2019-04-29T21:19:15.187Z',
          listedBy: 1,
          listedByUsername: 1,
          claimedBy: 'test_id',
        });

      const response = await request(app).get(
        `/api/listings/claimed/${postResponse.body.claimedBy}`,
      );

      expect(response.body.length).toBe(1);
    });
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
        listedByUsername: 1,
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
        listedByUsername: 1,
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
          listedByUsername: 1,
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
          listedByUsername: 1,
        });

      const newListing = postResponse.body;

      const response = await request(app)
        .patch(`/api/listings/update/${newListing._id}`)
        .send({
          claimedBy: 500,
        });
      expect(response.body.claimedBy).toBe('500');
    });

    test('should not update the claimed by if already populated', async () => {
      const postResponse = await request(app)
        .post('/api/listings/create')
        .send({
          numberOfMeals: 10,
          description: 'test',
          timeAvailableUntil: '2019-04-29T21:19:15.187Z',
          listedBy: 1,
          listedByUsername: 1,
          claimedBy: 2,
        });

      const newListing = postResponse.body;

      const response = await request(app)
        .patch(`/api/listings/update/${newListing._id}`)
        .send({
          claimedBy: 500,
        });
      expect(response.body.claimedBy).toBe('2');
    });
  });
});
