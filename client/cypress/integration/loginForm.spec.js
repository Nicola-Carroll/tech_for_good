/* eslint-disable jest/valid-expect */
/* eslint-disable no-undef */
describe('Login', () => {
  it('should redirect to feed after successful login', () => {
    cy.signup(
      'Charity Login',
      'char1@gmail.com',
      'test',
      'test',
      '1 Road St',
      'London',
      'SW12 9RG',
      '07777123456',
      'Charity',
      '012345',
      'www.charity.com',
    );
    cy.visit('/login');
    cy.get('#username').type('Charity Login');
    cy.get('#password').type('test');
    cy.get('#loginSubmit').click();
    cy.location('pathname').should('eq', '/feed');
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
