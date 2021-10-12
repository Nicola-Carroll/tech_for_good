/* eslint-disable no-undef */
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('addListing', (meals, desc, availableTo) => {
  cy.get('#new-listing-link').click();
  cy.get('#meals').type(meals);
  cy.get('#desc').type(desc);
  cy.get('#timeAvailableUntil').type(availableTo);
  cy.get('#create-listing-btn').click();
 });

Cypress.Commands.add('charityLogin', () => {
  cy.visit('/login');
  cy.get('#username').type('Charity Supreme');
  cy.get('#password').type('Charity123!');
  cy.get('#loginSubmit').click();
});

Cypress.Commands.add('restaurantLogin', () => {
  cy.visit('/login');
  cy.get('#username').type('Restaurant Extreme');
  cy.get('#password').type('Password123!');
  cy.get('#loginSubmit').click();
});

Cypress.Commands.add('switchToCharity', () => {
  cy.get('#logout-link').click();
  cy.charityLogin();
});

Cypress.Commands.add('switchToRestaurant', () => {
  cy.get('#logout-link').click();
  cy.restaurantLogin();
});
