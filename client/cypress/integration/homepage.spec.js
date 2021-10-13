describe('Homepage', () => {
  it('contains a title', () => {
    cy.visit('/');
    cy.contains('Donations to date');
  });

  it('contains a subheader for total donations', () => {
    cy.visit('/');
    cy.contains('Number of meals that have been given to those in need thus far:');
  });

  it('contains the total for donations', () => {
    cy.visit('/');
    cy.get('#total');
  });
});
