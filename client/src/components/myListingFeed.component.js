import React, { Component, createRef } from 'react';
import MyListing from './myListing.component';
import axios from 'axios';
import { userContext } from '../App.js';

const { REACT_APP_ENDPOINT } = process.env;

export default class MyListingFeed extends Component {
  constructor(props) {
    super(props);
    this.state = { listings: [] };
  }

  availableListings(data) {
    return data.filter((currentListing) => {
      return (
        !currentListing.claimedBy &&
        new Date(currentListing.timeAvailableUntil) > new Date()
      );
    });
  }

  async componentDidMount() {
    try {
      const response = await axios.get(`${REACT_APP_ENDPOINT}listings`);
      this.setState({ listings: this.availableListings(response.data) });
    } catch (error) {
      console.log(error);
    }
  }

  listingFeed() {
    return this.state.listings.map((currentListing) => {
      return (
        <MyListing
          listing={currentListing}
          key={currentListing._id}
        ></MyListing>
      );
    });
  }

  render() {
    return (
      <>
        <userContext.Consumer>
          {({ user }) => {
            // <input
            //   type="hidden"
            //   ref={this.listedByUsername}
            //   value="test1"
            // ></input>;
            // console.log(this.getListings());
            return (
              <>
                <table className="table">
                  <thead className="thead-light">
                    <tr>
                      <th>Listed by</th>
                      <th>Number of meals</th>
                      <th>Description</th>
                      <th>Available until</th>
                      <th>{user.username}</th>
                    </tr>
                  </thead>
                  <tbody>{this.listingFeed()}</tbody>
                </table>
              </>
            );
          }}
        </userContext.Consumer>
      </>
    );
  }
}
