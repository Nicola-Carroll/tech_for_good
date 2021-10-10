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

  it('it can claim a listing', () => {
    const listing = {
      numberOfMeals: 10,
      description: 'Test listing to be claimed',
      timeAvailableUntil: '2019-04-29T21:19:15.187Z',
      listedBy: 1,
    };
    let id;
    axios
      .post(`http://localhost:5000/api/listings/create`, listing)
      .then((response) => {
        id = `claim${response.data._id}`;
        console.log(id);
      })
      .catch((error) => {
        console.log(error);
      });
    cy.visit('/feed');
    cy.get(`${id}`).click();
    cy.visit('/feed');
    cy.get('Test listing to be claimed').should('not.exist');
  });
});
