// we need to make a page for confirming the listing has been claimed
// we need to update the listing feed so that only unclaimed listings are shown

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
