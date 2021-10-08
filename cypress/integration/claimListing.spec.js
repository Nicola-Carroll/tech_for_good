describe('Claiming a listing', () => {
  it('listings have a claim button', () => {
    cy.visit('/feed');
    cy.contains('.claim-listing');
  });

  // not sure how we will click the claim listing button - will each button have its own id or will the id be fed
  // as an arg to the onClick event

  // it('claiming a listing takes the user to a new page', () => {
  //   cy.visit('/feed');
  //   cy.get('.claim-listing').click()
  //   cy.contains('This listing has been claimed, please come to collect within an hour');
  // });

  // it('claiming a listing removes that listing from the feed', () => {
  //   cy.visit('/feed');
  //   cy.get('.claim-listing').click()
  //   cy.visit('/feed');
  //   cy.contains('#claim-listing');
  // });
});
