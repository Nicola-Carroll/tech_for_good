/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable no-undef */
import axios from 'axios';

describe('View Listings', () => {
  beforeEach(() => {
    cy.charityLogin();
  });

  it('listings have buttons', () => {
    cy.contains('Claim Listing');
  });

  it('contains all details', () => {
    cy.contains('.listedBy');
    cy.contains('.meals');
    cy.contains('.desc');
    cy.contains('.time');
    // cy.contains('.address');
    cy.contains('.claim');
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

  it('should not show listings available in the past', () => {
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
    cy.get('#feed-link').click();
    cy.get('This listing should not appear').should('not.exist');
  });

  it('should show listings available in the future', () => {
    cy.switchToRestaurant();
    cy.addListing('10', 'This listing should appear', `2225-01-01T23:55`);
    cy.wait(1000);
    cy.switchToCharity();
    cy.contains('This listing should appear');
  });
});
