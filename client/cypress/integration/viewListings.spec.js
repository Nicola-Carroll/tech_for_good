/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable no-undef */
import axios from 'axios';

describe('View Listings', () => {
  beforeEach(() => {
    cy.charityLogin();
  });

  it('contains the listing headers', () => {
    cy.contains('Listed by');
    cy.contains('Number of meals');
    cy.contains('Description');
    cy.contains('Available until');
  });

  it('listings have buttons', () => {
    cy.contains('Claim Listing');
  });

  it('only shows unclaimed listings', () => {
    const listing = {
      numberOfMeals: 10,
      description: 'This listing should not appear',
      timeAvailableUntil: '2019-04-29T21:19:15.187Z',
      listedBy: 1,
      claimedBy: 2,
    };
    axios
      .post(`http://localhost:5000/api/listings/create`, listing)
      .catch((error) => {
        console.log(error);
      });
    console.log(process.env.NODE_ENV);
    cy.get('This listing should not appear').should('not.exist');
  });

  it('only shows listings available in the future', () => {
    let now = new Date(new Date().toString().split('GMT')[0] + ' UTC')
      .toISOString()
      .split('.')[0];
    cy.switchToRestaurant();
    cy.addListing(
      '10',
      'This listing should not appear',
      `${now.substring(0, now.length - 3)}`,
    );
    cy.switchToCharity();
    cy.wait(1000);
    cy.visit('/feed');
    cy.get('This listing should not appear').should('not.exist');
  });
});
