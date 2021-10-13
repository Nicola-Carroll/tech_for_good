import React from 'react';

function MyClaim(props) {
  return (
    <tr>
      <td className="listedBy">{props.listing.listedByUsername}</td>
      <td className="meals">{props.listing.numberOfMeals}</td>
      <td className="desc">{props.listing.description}</td>
      <td className="time">{props.listing.timeAvailableUntil}</td>
    </tr>
  );
}

export default MyClaim;
