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

  // it('shows only my listings', () => {
  //   cy.get('.table')
  //     .find('tr')
  //     .then((row) => {
  //       //row.length will give you the row count
  //       expect(row.length).toBe();
  //     });

  //   cy.get('This listing should not appear').should('not.exist');
  // });

  it('should show most recent listing at top', () => {
    cy.addListing(
      '10',
      'This listing should be at the top',
      `2225-01-01T23:55`,
    );
    cy.get('#my-listings-link').click();
    cy.get('.desc').first().contains('This listing should be at the top');
  });
});
