describe('View Listing', () => {
  it('renders listings from dummy data', () => {
    // still to do - test db with seed data for improved testing
    cy.visit('/feed');
    cy.contains('test');
  });

  // to add an end-to-end test for uploading a listing and then
  // seeing it appear on the feed once that feature is merged

  it('the navbar links to the feed', () => {
    cy.visit('/');
    cy.get('#feed-link').click();
    cy.location('pathname').should('eq', '/feed');
  });

  it('contains the listing headers', () => {
    cy.visit('/feed');
    cy.contains('Listed by');
    cy.contains('Number of meals');
    cy.contains('Description');
    cy.contains('Available until');
  });

  it('listings have buttons', () => {
    // this test is just a placeholder for when we build buttons for listsings
    cy.visit('/feed');
    cy.contains('Buttons to interact with listing');
  });
});
