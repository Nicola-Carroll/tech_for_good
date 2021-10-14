import React, { Component } from 'react';
import MyClaimFeed from '../components/my-claims-feed/myClaimFeed.component';

export default class ViewMyClaims extends Component {
  render() {
    return (
      <>
        <h1 className="text-center mt-5">Donations you have claimed</h1>
        <MyClaimFeed></MyClaimFeed>
      </>
    );
  }
}
