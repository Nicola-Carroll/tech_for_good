describe('Add Listing', () => {
  it('contains new listing form', () => {
    cy.visit('http://localhost:3000/listings/new');
    cy.contains('Number of Meals');
    cy.contains('Description');
    cy.contains('Create Listing');
  });
});
