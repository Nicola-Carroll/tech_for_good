import React from 'react';

function MyClaim(props) {
  return (
    <div className="card mt-4 mb-4 w-75 mx-auto p-2">
      <div className="card-body">
        <h5 className="listedBy mb-4">{props.listing.listedByUsername}</h5>
        <p className="meals">
          <b>Meals:</b> {props.listing.numberOfMeals}
        </p>
        <p className="desc">
          <b>Description:</b>
          <br />
          {props.listing.description}
        </p>
        <p className="time">
          <b>Pick up available until:</b>{' '}
          {Date(props.listing.timeAvailableUntil).slice(0, -34)}
        </p>
      </div>
    </div>
  );
}

export default MyClaim;
