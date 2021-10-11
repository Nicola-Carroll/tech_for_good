describe('Homepage', () => {
  it('contains a title', () => {
    cy.visit('/');
    cy.contains('Donations to date');
  });

  it('contains a subheader', () => {
    cy.visit('/');
    cy.contains('Number of meals that have been saved from waste thus far:');
  });
  
  it('contains the total', () => {
   cy.visit('/');
   cy.get('#total').should('be.a', 'number')
  });
});
