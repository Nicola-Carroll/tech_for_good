/* eslint-disable no-undef */
describe('Add Listing', () => {
  it('contains new listing form', () => {
    cy.visit('http://localhost:3000/listings/new');
    cy.contains('Number of Meals');
    cy.contains('Description');
    cy.contains('Create Listing');
  });

  it('checks click', () => {
    cy.visit('http://localhost:3000/listings/new');
    cy.get('#meals').type('10');
    cy.get('#desc').type('Hello, World');
    cy.get('.btn').click();
    cy.focused().should('have.attr', 'type', 'submit');
  });

  it('checks submitted data appears in feed', () => {
    cy.visit('http://localhost:3000/listings/new');
    cy.get('#meals').type('10');
    cy.get('#desc').type('Hello, World');
    cy.get('.btn').click();
    cy.get('#feed-link').click();
    cy.contains('Hello, World');
  });

  it('prevents invalid submission', () => {
    cy.visit('http://localhost:3000/listings/new');
    cy.get('#meals').type('0');
    cy.get('#desc').type('Hello, World');
    cy.get('.btn').click();
    cy.get('.listing-form').within(() => {
      cy.get('#meals')
        .invoke('prop', 'validationMessage')
        .should('equal', 'Value must be greater than or equal to 1.');
    });
  });
});
