/* eslint-disable jest/valid-expect */
/* eslint-disable no-undef */
describe('Login', () => {
  it('should redirect to feed after successful charity login', () => {
    cy.charityLogin();
    cy.location('pathname').should('eq', '/feed');
  });

  it('should redirect to my listings page after successful restaurant login', () => {
    cy.restaurantLogin();
    cy.location('pathname').should('eq', '/mylistings');
  });

  it('should give an alert if passwords is incorrect', () => {
    cy.visit('/login');
    cy.get('#username').type('Charity Supreme');
    cy.get('#password').type('wrongpassword');
    cy.get('#loginSubmit').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Incorrect password');
    });
  });

  it('should give an alert if user is not registered', () => {
    cy.visit('/login');
    cy.get('#username').type('wrongusername');
    cy.get('#password').type('Charity123!');
    cy.get('#loginSubmit').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('You have not been registered yet');
    });
  });
});
