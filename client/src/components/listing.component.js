import React from 'react';
import ClaimButton from './ClaimButton.component';

function Listing(props) {
  return (
    <tr>
      <td>{props.listing.listedBy}</td>
      <td>{props.listing.numberOfMeals}</td>
      <td>{props.listing.description}</td>
      <td>{props.listing.timeAvailableUntil}</td>
      <td>
        <ClaimButton
        // listing={props.currentListing}
        // handleSubmit={props.handleSubmit}
        ></ClaimButton>
      </td>
    </tr>
  );
}

export default Listing;
