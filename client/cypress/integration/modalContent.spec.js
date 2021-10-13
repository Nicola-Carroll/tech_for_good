describe('Claiming a listing', () => {
  beforeEach(() => {
    cy.restaurantLogin();
    cy.addListing('10', 'Test listing to be claimed', '2025-01-01T23:55');
    cy.switchToCharity();
    cy.get('#feed-link').click();
    cy.get('.btn').first().click();
  });

  it('shows the restaurants name', () => {
    cy.get('#restaurant-name');
    cy.contains('Restaurant Extreme');
  });

  it('shows the restaurants details', () => {
    cy.get('#restaurant-address');
    cy.contains('2 London Road');
    cy.contains('London');
    cy.contains('SE19 3PR');
  });

  it('shows the listing details', () => {
    cy.get('#listing-details');
    cy.contains('10');
    cy.contains('Test listing to be claimed');
    cy.contains('2025-01-01T23:55');
  });
});
