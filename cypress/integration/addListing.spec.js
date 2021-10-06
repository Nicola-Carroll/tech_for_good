describe('Add Listing', () => {
  it('contains new listing form', () => {
    cy.visit('http://localhost:3000/listings/new');
    cy.get('#newNumberOfMeals').type('3');
    cy.get('#newDescription').type('Tasty Broccoli Stir Fry');
    cy.get('#newListing').submit();
    cy.contains('Listings');
  });
});
