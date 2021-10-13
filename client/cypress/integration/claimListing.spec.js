/* eslint-disable no-undef */
import axios from 'axios';

describe('Claiming a listing', () => {
  beforeEach(() => {
    cy.restaurantLogin();
  });

  it('can claim a listing', () => {
    cy.addListing('10', 'Test listing to be claimed', '2025-01-01T23:55');
    cy.switchToCharity();
    cy.get('#feed-link').click();
    cy.get('.btn').first().click();
    cy.get('#claim-button').click();
    cy.get('#feed-link').click();
    cy.get('.desc')
      .first()
      .contains('Test listing to be claimed')
      .should('not.exist');
  });

  it('allows the user to confirm', () => {
    cy.addListing('10', 'Test listing to be claimed', '2025-01-01T23:55');
    cy.switchToCharity();
    cy.get('#feed-link').click();
    cy.get('.btn').first().click();
    cy.contains('Confirm');
  });

  it('allows the user to go back', () => {
    cy.addListing('10', 'Test listing to be claimed', '2025-01-01T23:55');
    cy.switchToCharity();
    cy.get('#feed-link').click();
    cy.get('.btn').first().click();
    cy.contains('Go back');
  });

  it('go back returns to feed', () => {
    cy.addListing('10', 'Test listing to be claimed', '2025-01-01T23:55');
    cy.switchToCharity();
    cy.get('#feed-link').click();
    cy.get('.btn').first().click();
    cy.get('#back-button').click();
    cy.get('.desc').first().contains('Test listing to be claimed');
    cy.get('#back-button').should('not.exist');
  });
});
