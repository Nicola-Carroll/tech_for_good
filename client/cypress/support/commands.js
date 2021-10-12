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
  cy.visit('/listings/new');
  cy.get('#meals').type(meals);
  cy.get('#desc').type(desc);
  cy.get('#timeAvailableUntil').type(availableTo);
  cy.get('.btn').click();
});

Cypress.Commands.add(
  'signup',
  (
    username,
    email,
    password,
    passwordConfirm,
    add1,
    city,
    postcode,
    tel,
    desc,
    charityNo,
    website,
  ) => {
    cy.visit('/signup');
    cy.get('#charity-btn').click();
    cy.get('#username').type(username);
    cy.get('#emailAddress').type(email);
    cy.get('#password').type(password);
    cy.get('#passwordConfirmation').type(passwordConfirm);
    cy.get('#addressLine1').type(add1);
    cy.get('#addressLine2');
    cy.get('#city').type(city);
    cy.get('#postCode').type(postcode);
    cy.get('#contactNumber').type(tel);
    cy.get('#description').type(desc);
    cy.get('#charityNumber').type(charityNo);
    cy.get('#websiteLink').type(website);
    cy.get('#charitySubmit').click();
  },
);
