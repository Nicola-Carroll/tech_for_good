/* eslint-disable no-undef */
describe('Homepage', () => {
  it('contains a What we do section', () => {
    cy.visit('/');
    cy.contains('What we do');
    cy.contains('SecondHelpings');
  });

  it('contains a title', () => {
    cy.visit('/');
    cy.contains('Donations to date');
  });

  it('contains the total for donations', () => {
    cy.visit('/');
    cy.get('#total');
  });

  it('shows a leaderboard with maximum 5 top donators', () => {
    cy.restaurantLogin();
    cy.addListing('10', 'Hello, World', '2025-02-02T11:55');
    cy.visit('/');
    cy.get('#top-donators');
  });
});
