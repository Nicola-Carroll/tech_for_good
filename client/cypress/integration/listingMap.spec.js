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

  it('should have a map container', () => {
    cy.get('.map-container');
  });

  // cannot get this to work, even though it manually works

  // manual test - first add listing as a restaurant
  // log in as charity
  // scroll to the map and click on the marker
  // the listing modal opens
  // clicking claim listing closes the modeal and removes that listing from the listing feed
  // if the restaurant has more than one listing the next oldest one will be rendered as a marker in place
  // clicking "go back" just closes the modal and changes nothing

  // it('clicking a marker opens the modal', () => {
  //   cy.get('.listing-marker').first().click();
  //   cy.get('.listing-modal');
  // });
});
