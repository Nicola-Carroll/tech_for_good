import React, { Component } from 'react';

export default class ModalContent extends Component {
  renderRestaurantName() {
    return (
      <h3 className="m-3 mb-4" id="restaurant-name">
        {this.props.content.listedByAccount.username}
      </h3>
    );
  }

  renderRestaurantAddress() {
    return (
      <div id="restaurant-address">
        <h3 className="m-3 mb-4">Pick-up address</h3>
        <p>
          {this.props.content.listedByAccount.addressLine1}
          {this.props.content.listedByAccount.addressLine2 && <br />}
          {this.props.content.listedByAccount.addressLine2}
          <br />
          {this.props.content.listedByAccount.city}
          <br />
          {this.props.content.listedByAccount.postCode}
          <br />
        </p>
      </div>
    );
  }

  renderListingDetails() {
    return (
      <div id="restaurant-address">
        <h3 className="m-3 mb-4">Donation details</h3>
        <p>
          There are {this.props.content.listingNumberOfMeals} meals available
        </p>
        <p>Details below: </p>
        <p>{this.props.content.listingDescription}</p>
        <p>
          Grab this donation before {this.props.content.listingAvailableTill}
        </p>
      </div>
    );
  }

  render() {
    return (
      <>
        <div id="restaurant-name">{this.renderRestaurantName()}</div>
        <div id="restaurant-address">{this.renderRestaurantAddress()}</div>
        <div id="listing-details">{this.renderListingDetails()}</div>
      </>
    );
  }
}
