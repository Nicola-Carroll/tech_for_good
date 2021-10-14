/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable no-undef */
describe('View My Claims', () => {
  beforeEach(() => {
    cy.charityLogin();
  });

  it('contains all details', () => {
    cy.switchToRestaurant();
    cy.addListing('10', 'This listing has all details', `2225-01-01T23:55`);
    cy.switchToCharity();
    cy.get('#my-claims-link').click();
    cy.get('h5').should('have.class', 'listedBy');
    cy.get('p').should('have.class', 'meals');
    cy.get('p').should('have.class', 'desc');
    cy.get('p').should('have.class', 'time');
    // cy.contains('.address');
  });

  it('shows only my claimed listings', () => {
    cy.switchToRestaurant();
    cy.addListing('10', 'I will claim this', '2025-01-01T23:55');
    cy.addListing('10', 'I will claim this too', '2025-02-01T23:55');
    cy.switchToCharity();
    cy.get('#feed-link').click();
    cy.get('.btn').first().click();
    cy.get('#claim-button').click();
    cy.get('#feed-link').click();
    cy.get('.btn').first().click();
    cy.get('#claim-button').click();
    cy.get('#my-claims-link').click();
    cy.get('.desc').contains('I will claim this');
    cy.get('.desc').contains('I will claim this too');
  });
});
