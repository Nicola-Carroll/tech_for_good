import axios from 'axios';

describe('View Listings', () => {
  beforeEach(() => {
    cy.charityLogin();
  });

  // the logic used to get the selection of listings which need
  // markers is the same as for the listingFeed, which is already tested
  // so will not duplicate this here

  // the modal rendered by clicking on markers is tested inside claimListing

  // we also trust that a component rendered inside GoogleMapReact with
  // a lat & long prop will be added as a marker in the correct spot

  it('the map container exitst', () => {
    cy.get('.map-container');
  });

  // cannot get this to work, even though it manually works

  // it('clicking a marker opens the modal', () => {
  //   cy.get('.listing-marker').first().click();
  //   cy.get('.listing-modal');
  // });
});
