import React, { Component } from 'react';
import MyClaimFeed from '../components/myClaimFeed.component';

export default class ViewMyClaims extends Component {
  render() {
    return (
      <>
        <div>Your claimed listings</div>
        <MyClaimFeed></MyClaimFeed>
      </>
    );
  }
}
