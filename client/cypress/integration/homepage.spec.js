describe('Homepage', () => {
  it('contains a title', () => {
    cy.visit('/');
    cy.contains('Donations to date');
  });
});
