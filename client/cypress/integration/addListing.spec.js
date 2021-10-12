/* eslint-disable no-undef */
describe('Add Listing', () => {
  beforeEach(() => {
    cy.restaurantLogin();
  });

  it('contains new listing form', () => {
    cy.contains('Number of Meals');
    cy.contains('Description');
    cy.contains('Create Listing');
  });

  it('checks click', () => {
    cy.get('#meals').type('10');
    cy.get('#desc').type('Hello, World');
    cy.get('#create-listing-btn').click();
    cy.focused().should('have.attr', 'type', 'submit');
  });

  it('checks submitted data appears in feed', () => {
    cy.get('#meals').type('10');
    cy.get('#desc').type('Hello, World');
    cy.get('#create-listing-btn').click();
    cy.switchToCharity();
    cy.contains('Hello, World');
  });

  it('prevents invalid submission', () => {
    cy.get('#meals').type('0');
    cy.get('#desc').type('Hello, World');
    cy.get('#create-listing-btn').click();
    cy.get('.listing-form').within(() => {
      cy.get('#meals')
        .invoke('prop', 'validationMessage')
        .should('equal', 'Value must be greater than or equal to 1.');
    });
  });

  it('displays notice confirming new listing has been added', () => {
    cy.get('#meals').type('10');
    cy.get('#desc').type('Hello, World');
    cy.get('#create-listing-btn').click();
    cy.get('#submission-notice').contains(
      'Your food listing has been successfully added.',
    );
  });

  it('clears success notice after 3 seconds', () => {
    cy.get('#meals').type('10');
    cy.get('#desc').type('Hello, World');
    cy.get('#create-listing-btn').click();
    cy.wait(2001);
    cy.get('#submission-notice').should('not.exist');
  });

  it('clears the form after success', () => {
    cy.get('#meals').type('10');
    cy.get('#desc').type('Hello, World');
    cy.get('#create-listing-btn').click();
    cy.get('#meals').contains('10').should('not.exist');
    cy.get('#desc').contains('Hello, World').should('not.exist');
  });
});
