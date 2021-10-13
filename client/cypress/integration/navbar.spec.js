/* eslint-disable jest/valid-expect */
/* eslint-disable no-undef */
describe('Navbar', () => {
  it('should only show homepage, signup and login links before user logs in', () => {
    cy.visit('/');
    cy.get('#signup-link').click();
    cy.location('pathname').should('eq', '/signup');
    cy.get('#login-link').click();
    cy.location('pathname').should('eq', '/login');
    cy.get('#homepage-link').click();
    cy.location('pathname').should('eq', '/');
    cy.get('#feed-link').should('not.exist');
    cy.get('#new-listing-link').should('not.exist');
    cy.get('#my-listings-link').should('not.exist');
  });

  it('should only show homepage and feed page to logged in charity', () => {
    cy.charityLogin();
    cy.get('#feed-link').click();
    cy.location('pathname').should('eq', '/feed');
    cy.get('#homepage-link').click();
    cy.location('pathname').should('eq', '/');
    cy.get('#signup-link').should('not.exist');
    cy.get('#login-link').should('not.exist');
    cy.get('#new-listing-link').should('not.exist');
    cy.get('#my-listings-link').should('not.exist');
  });

  it('should only show homepage, my listings page and add listing page to logged in restaurant', () => {
    cy.restaurantLogin();
    cy.get('#new-listing-link').click();
    cy.location('pathname').should('eq', '/listings/new');
    cy.get('#my-listings-link').click();
    cy.location('pathname').should('eq', '/mylistings');
    cy.get('#homepage-link').click();
    cy.location('pathname').should('eq', '/');
    cy.get('#signup-link').should('not.exist');
    cy.get('#login-link').should('not.exist');
    cy.get('#feed-link').should('not.exist');
  });
});
