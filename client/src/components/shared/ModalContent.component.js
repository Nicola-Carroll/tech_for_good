import React, { Component } from 'react';

export default class ModalContent extends Component {
  renderRestaurantName() {
    return (
      <h4 className="mb-4" id="restaurant-name">
        Do you want to claim this donation from{' '}
        {this.props.content.listedByAccount.username}?
      </h4>
    );
  }

  renderRestaurantAddress() {
    return (
      <div id="restaurant-address">
        <h6>Pick-up address</h6>
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
        <p class="font-weight-bold">
          There are {this.props.content.listingNumberOfMeals} meals available to
          collect until{' '}
          {Date(this.props.content.listingAvailableTill).slice(0, -34)}.
        </p>
        <h6>Full details </h6>
        <p class="font-weight-light">{this.props.content.listingDescription}</p>
      </div>
    );
  }

  render() {
    return (
      <>
        <div id="restaurant-name">{this.renderRestaurantName()}</div>
        <div id="listing-details">{this.renderListingDetails()}</div>
        <br />
        <div id="restaurant-address">{this.renderRestaurantAddress()}</div>
      </>
    );
  }
}
