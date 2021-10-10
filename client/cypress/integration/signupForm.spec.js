/* eslint-disable no-undef */
describe('Signup', () => {
  it('should submit charity details', () => {
    cy.visit('/signup');
    cy.get('#charity-btn').click();
    cy.get('#username').type('Charity Supreme');
    cy.get('#emailAddress').type('charity@supreme.com');
    cy.get('#password').type('Charity123!');
    cy.get('#passwordConfirmation').type('Charity123!');
    cy.get('#addressLine1').type('1 London Road');
    cy.get('#addressLine2');
    cy.get('#city').type('London');
    cy.get('#postCode').type('E2 6LP');
    cy.get('#contactNumber').type('07777111222');
    cy.get('#description').type('We do a weekly soup kitchen.');
    cy.get('#charityNumber').type('012345');
    cy.get('#websiteLink').type('www.google.com');
    cy.get('#charitySubmit').click();
    cy.location('pathname').should('eq', '/login');
  });

  it('should give an alert if passwords do not match', () => {
    cy.visit('/signup');
    cy.get('#charity-btn').click();
    cy.get('#username').type('Charity Supreme');
    cy.get('#emailAddress').type('charity@supreme.com');
    cy.get('#password').type('Charity123!');
    cy.get('#passwordConfirmation').type('Charity');
    cy.get('#addressLine1').type('1 London Road');
    cy.get('#addressLine2');
    cy.get('#city').type('London');
    cy.get('#postCode').type('E2 6LP');
    cy.get('#contactNumber').type('07777111222');
    cy.get('#description').type('We do a weekly soup kitchen.');
    cy.get('#charityNumber').type('012345');
    cy.get('#websiteLink').type('www.google.com');
    cy.get('#charitySubmit').click();
    cy.on('window:alert', (str) => {
      expect(str).toBe("Passwords don't match");
    });
  });

  it('should submit restaurant details', () => {
    cy.visit('/signup');
    cy.get('#restaurant-btn').click();
    cy.get('#username').type('Restaurant Extreme');
    cy.get('#emailAddress').type('restaurant@extreme.com');
    cy.get('#password').type('Password123!');
    cy.get('#passwordConfirmation').type('Password123!');
    cy.get('#addressLine1').type('2 London Road');
    cy.get('#addressLine2');
    cy.get('#city').type('London');
    cy.get('#postCode').type('SE19 3PR');
    cy.get('#contactNumber').type('07777333444');
    cy.get('#description').type('We cook tasty mexican food.');
    cy.get('#foodHygieneRating').type('5');
    cy.get('#restaurantSubmit').click();
    cy.location('pathname').should('eq', '/login');
  });
});
