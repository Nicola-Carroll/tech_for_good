/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable no-undef */
describe('View My Listings', () => {
  beforeEach(() => {
    cy.restaurantLogin();
  });

  it('contains all details', () => {
    cy.addListing('10', 'This listing has all details', `2225-01-01T23:55`);
    cy.get('#my-listings-link').click();
    cy.get('h5').should('have.class', 'listedBy');
    cy.get('p').should('have.class', 'meals');
    cy.get('p').should('have.class', 'desc');
    cy.get('p').should('have.class', 'time');
    cy.get('p').should('have.class', 'claimStatus');
  });

  it('shows only my listings', () => {
    cy.get('.listedBy').each(($el) => {
      cy.contains('Restaurant Extreme');
    });
  });

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
