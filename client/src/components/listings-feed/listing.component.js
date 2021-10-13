import React from 'react';
import InitiateClaimButton from './InitiateClaimButton.component';

function Listing(props) {
  return (
    <div className="card m-4 w-75 mx-auto">
      <div className="card-header">
        <h5 className="card-title listedBy pt-2">
          {props.listing.listedByUsername}
        </h5>
      </div>
      <div className="card-body">
        <p className="card-text meals">
          <b>Meals available: </b>
          {props.listing.numberOfMeals}
        </p>
        <p className="card-text desc">
          <b>Description: </b>
          {props.listing.description}
        </p>
        <p className="card-text time">
          <b>Available until: </b>
          {props.listing.timeAvailableUntil}
        </p>
        <InitiateClaimButton
          listing={props.listing}
          handleClick={() => props.handleClick(props.listing._id)}
        ></InitiateClaimButton>
      </div>
    </div>
  );
}

export default Listing;
