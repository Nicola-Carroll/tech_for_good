/* eslint-disable no-undef */
describe('Add Listing', () => {
  beforeEach(() => {
    cy.restaurantLogin();
  });

  it('contains new listing form', () => {
    cy.get('#new-listing-link').click();
    cy.contains('Number of Meals');
    cy.contains('Description');
    cy.contains('Available Until');
    cy.contains('Create Listing');
  });

  it('checks click', () => {
    cy.addListing('10', 'Hello, World', '2025-01-01T23:55');
    cy.focused().should('have.attr', 'type', 'submit');
  });

  it('checks submitted data appears in feed', () => {
    cy.addListing('10', 'Hello, World', '2025-02-02T11:55');
    cy.switchToCharity();
    // cy.get('.listedBy').first().contains('Restaurant Extreme');
    cy.get('.meals').first().contains('10');
    cy.get('.desc').first().contains('Hello, World');
    // Also checking the correct hour is shown, regardless of format
    cy.get('.time').first().contains('11');
  });

  it('prevents invalid submission', () => {
    cy.addListing('0', 'Hello, World', '2025-01-01T23:55');
    cy.get('.listing-form').within(() => {
      cy.get('#meals')
        .invoke('prop', 'validationMessage')
        .should('equal', 'Value must be greater than or equal to 1.');
    });
  });

  it('displays notice confirming new listing has been added', () => {
    cy.addListing('10', 'Hello, World', '2025-01-01T23:55');
    cy.get('#submission-notice').contains(
      'Your food listing has been successfully added.',
    );
  });

  it('clears success notice after 3 seconds', () => {
    cy.addListing('10', 'Hello, World', '2025-01-01T23:55');
    cy.wait(2001);
    cy.get('#submission-notice').should('not.exist');
  });

  it('clears the form after success', () => {
    cy.addListing('10', 'Hello, World', '2025-01-01T23:55');
    cy.get('#meals').contains('10').should('not.exist');
    cy.get('#desc').contains('Hello, World').should('not.exist');
  });
});
