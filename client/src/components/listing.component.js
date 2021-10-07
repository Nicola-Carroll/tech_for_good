import React from 'react';

const Listing = (props) => {
  return (
    <tr>
      <td>{props.listing.numberOfMeals}</td>
      <td>{props.listing.description}</td>
      <td>{props.listing.listedBy}</td>
      <td>{props.listing.timeAvailableUntil}</td>
    </tr>
  );
};

export default Listing;
