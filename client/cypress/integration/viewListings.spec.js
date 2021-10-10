import axios from 'axios';

describe('View Listing', () => {
  // it('renders listings from dummy data', () => {
  //   // still to do - test db with seed data for improved testing
  //   cy.visit('/feed');
  //   cy.contains('test');
  // });

  it('the navbar links to the feed', () => {
    cy.visit('/');
    cy.get('#feed-link').click();
    cy.location('pathname').should('eq', '/feed');
  });

  it('contains the listing headers', () => {
    cy.visit('/feed');
    cy.contains('Listed by');
    cy.contains('Number of meals');
    cy.contains('Description');
    cy.contains('Available until');
  });

  it('listings have buttons', () => {
    cy.visit('/feed');
    cy.contains('Claim Listing');
  });

  it('only shows unclaimed listings', () => {
    const listing = {
      numberOfMeals: 10,
      description: 'This listing should not appear',
      timeAvailableUntil: '2019-04-29T21:19:15.187Z',
      listedBy: 1,
      claimedBy: 2,
    };
    axios
      .post(`http://localhost:5000/api/listings/create`, listing)
      .catch((error) => {
        console.log(error);
      });
    console.log(process.env.NODE_ENV);
    cy.visit('/feed');
    cy.get('This listing should not appear').should('not.exist');
  });
});
