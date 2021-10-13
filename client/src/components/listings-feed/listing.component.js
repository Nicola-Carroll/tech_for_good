import React from 'react';
import InitiateClaimButton from './InitiateClaimButton.component';

function Listing(props) {
  return (
    <tr>
      <td className="listedBy"> {props.listing.listedByUsername}</td>
      <td className="meals">{props.listing.numberOfMeals}</td>
      <td className="desc">{props.listing.description}</td>
      <td className="time">{props.listing.timeAvailableUntil}</td>
      <td>
        <InitiateClaimButton
          listing={props.listing}
          handleClick={() => props.handleClick(props.listing)}
        ></InitiateClaimButton>
      </td>
    </tr>
  );
}

export default Listing;
