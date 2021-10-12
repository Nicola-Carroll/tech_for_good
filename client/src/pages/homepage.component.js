import React, { Component } from 'react';
import HomepageCounter from '../components/homepageCounter';
import HomepageLeaderboard from '../components/homepageLeaderboard';

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center" id="home">
          Donations to date
        </h1>
        <HomepageCounter />
        <HomepageLeaderboard />
      </div>
    );
  }
}
