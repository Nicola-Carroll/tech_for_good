// we need to make a page for confirming the listing has been claimed
// we need to update the listing feed so that only unclaimed listings are shown

import React from 'react';

function InitiateClaimButton(props) {
  const buttonId = `claim${props.listing._id}`;
  return (
    <button
      className="btn btn-outline-success"
      type="submit"
      id={buttonId}
      onClick={() => props.handleClick(props.id)}
    >
      Claim Listing
    </button>
  );
}

export default InitiateClaimButton;
