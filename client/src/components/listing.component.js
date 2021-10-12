import React from 'react';
import InitiateClaimButton from './InitiateClaimButton.component';

function Listing(props) {
  return (
    <tr>
      <td>{props.listing.listedBy}</td>
      <td>{props.listing.numberOfMeals}</td>
      <td className="desc">{props.listing.description}</td>
      <td>{props.listing.timeAvailableUntil}</td>
      <td>
        <InitiateClaimButton
          listing={props.listing}
          handleClick={() => props.handleClick(props.listing._id)}
        ></InitiateClaimButton>
      </td>
    </tr>
  );
}

export default Listing;
