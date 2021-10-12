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


  it('contains a subheader for total meals claimed', () => {
    cy.visit('/');
    cy.contains('Number of meals that have been saved from waste thus far:');
  });

  it('contains the total for meals claimed', () => {
    cy.visit('/');
    cy.get('#totalClaimed');
  });
});