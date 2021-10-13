describe('Claiming a listing', () => {
  beforeEach(() => {
    cy.restaurantLogin();
    cy.switchToCharity();
    cy.addListing('10', 'Test listing to be claimed', '2025-01-01T23:55');
    cy.get('#feed-link').click();
    cy.get('.btn').first().click();
  });

  it('can claim a listing', () => {
    cy.get('#restaurant-name');
    cy.contains('Restaurant Extreme');
  });

  it('can claim a listing', () => {
    cy.get('#restaurant-address');
    cy.contains('2 London Road');
    cy.contains('London');
    cy.contains('SE19 3PR');
  });

  it('can claim a listing', () => {
    cy.get('#listing-size');
    cy.contains('10');
  });

  it('can claim a listing', () => {
    cy.get('#listing-details');
    cy.contains('Test listing to be claimed');
  });

  it('can claim a listing', () => {
    cy.get('#listing-time');
    cy.contains('2025-01-01T23:55');
  });
});
