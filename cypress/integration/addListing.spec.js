describe('Add Listing', () => {
  it('contains new listing form', () => {
    cy.visit('http://localhost:3000/listings/new');
    cy.contains('Number of Meals');
    cy.contains('Description');
    cy.contains('Create Listing');
  });

  it('checks click', () => {
    cy.visit('http://localhost:3000/listings/new');
    cy.get('Number of Meals').type('10')
    cy.get('Description').type('Hello, World')
    cy.get('.btn').click()
    cy.focused().click()
  });
});
