import React from 'react';

function Listing(props) {
  return (
    <tr>
      <td>{props.listing.listedBy}</td>
      <td>{props.listing.numberOfMeals}</td>
      <td>{props.listing.description}</td>
      <td>{props.listing.timeAvailableUntil}</td>
      <td>Buttons to interact with listing</td>
    </tr>
  );
}

export default Listing;
