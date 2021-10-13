import React from 'react';

function MyListing(props) {
  return (
    <tr>
      <td className="listedBy">{props.listing.listedByUsername}</td>
      <td className="meals">{props.listing.numberOfMeals}</td>
      <td className="desc">{props.listing.description}</td>
      <td className="time">{props.listing.timeAvailableUntil}</td>
      <td className="claimStatus">{props.listing.claimStatus}</td>
    </tr>
  );
}

export default MyListing;
