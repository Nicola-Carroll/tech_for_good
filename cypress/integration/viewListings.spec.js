describe('View Listing', () => {
  it('renders listings from dummy', () => {
    cy.visit('http://localhost:3000/listings');
    cy.contains('test');
  });
});
