describe('View Listing', () => {
  it('renders listings from dummy', () => {
    cy.visit('http://localhost:3000/feed');
    cy.contains('test');
  });
});
