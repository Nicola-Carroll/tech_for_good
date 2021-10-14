import React, { Component } from 'react';
import HomepageDonationsCounter from '../components/homepageDonationsCounter';
import HomepageDonatorsLeaderboard from '../components/homepageDonatorsLeaderboard.component.js';

export default class Homepage extends Component {
  render() {
    return (
      <>
        <section id="intro-section">
          <img
            id="hero-img"
            className="mx-auto d-block"
            src="1.png"
            alt="Graphic of food and people with caption: Second Helpings, Help Others, Reduce Waste"
          />
        </section>
        <section id="counters">
          <div>
            <h2 className="text-center" id="home">
              Donations to date
            </h2>
            <HomepageDonationsCounter />
            <HomepageDonatorsLeaderboard />
          </div>
        </section>
      </>
    );
  }
}
