/* eslint-disable no-undef */
describe('Signup', () => {
  it('can show charity sign up form', () => {
    cy.visit('/signup');
    cy.get('#charity-btn').click();
    cy.get('#type');
    cy.get('#emailAddress');
    cy.get('#password');
    cy.get('#passwordConfirmation');
    cy.get('#addressLine1');
    cy.get('#addressLine2');
    cy.get('#city');
    cy.get('#postCode');
    cy.get('#contactNumber');
    cy.get('#description');
    cy.get('#charityNumber');
    cy.get('#websiteLink');
  });

  it('can show restaurant sign up form', () => {
    cy.visit('/signup');
    cy.get('#restaurant-btn').click();
    cy.get('#type');
    cy.get('#emailAddress');
    cy.get('#password');
    cy.get('#passwordConfirmation');
    cy.get('#addressLine1');
    cy.get('#addressLine2');
    cy.get('#city');
    cy.get('#postCode');
    cy.get('#contactNumber');
    cy.get('#description');
    cy.get('#foodHygieneRating');
  });
});
