/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable no-undef */
import axios from 'axios';

describe('View My Listings', () => {
  beforeEach(() => {
    cy.restaurantLogin();
  });

  it('contains the listing headers', () => {
    cy.contains('Listed by');
    cy.contains('Number of meals');
    cy.contains('Description');
    cy.contains('Available until');
    cy.contains('Claim status');
  });

  it('shows only my listings', () => {
    cy.get(".table")
    .find("tr")
    .then((row) => {
      //row.length will give you the row count
      expect(row.length).toBe();
    });

    cy.get('This listing should not appear').should('not.exist');
  });

  it('should last added listing at top', () => {
    const listing = {
      numberOfMeals: 10,
      description: 'This listing should be at the top',
      timeAvailableUntil: '2019-04-29T21:19:15.187Z',
      listedBy: 9,
      listedByName: 3
      claimedBy: 2,
    };
    axios
      .post(`http://localhost:5000/api/listings/account/9`, listing)
      .catch((error) => {
        console.log(error);
      });
    console.log(process.env.NODE_ENV);
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
