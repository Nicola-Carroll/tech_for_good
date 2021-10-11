/* eslint-disable no-undef */
import axios from 'axios';

describe('Claiming a listing', () => {
  // not sure how we will click the claim listing button - will each button have its own id or will the id be fed
  // as an arg to the onClick event

  // it('claiming a listing takes the user to a new page', () => {
  //   cy.visit('/feed');
  //   cy.get('.claim-listing').click()
  //   cy.contains('This listing has been claimed, please come to collect within an hour');
  // });

  // this test can't find the claim button :((

  it('can claim a listing', () => {
    cy.addListing(10, 'Test listing to be claimed');

    cy.visit('/feed');
    cy.get('.btn').first().click();
    cy.visit('/feed');
    cy.get('.desc')
      .first()
      .contains('Test listing to be claimed')
      .should('not.exist');
  });
});
