import React, { Component } from 'react';
import HomepageClaimedCounter from '../components/homepageCounter';
import HomepageDonationsCounter from '../components/homepageDonationsCounter';
// import HomepageLeaderboard from '../components/homepageLeaderboard';

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center" id="home">
          Donations to date
        </h1>
        <HomepageClaimedCounter />
        <HomepageDonationsCounter />
        {/* <HomepageLeaderboard /> */}
      </div>
    );
  }
}
