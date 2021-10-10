// each listing will have a claim listing button
// the onclick event for a claim listing button will interact with the listing
// we need to mark the listing as having been claimed by
// we need to do some backend stuff to edit the listing - PATCH request maybe
// we need to make a page for confirming the listing has been claimed
// we need to update the listing feed so that only unclaimed listings are shown
//
import React from 'react';

function ClaimButton(props) {
  return (
    <button
      className="btn btn-outline-success mt-3"
      type="submit"
      id={props.listing._id}
      onClick={() => props.handleClick(props.id)}
    >
      Claim Listing
    </button>
  );
}

export default ClaimButton;
