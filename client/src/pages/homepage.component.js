import React, { Component } from 'react';
import HomepageClaimedCounter from '../components/homepageClaimedCounter';
import HomepageDonationsCounter from '../components/homepageDonationsCounter';

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
            <h1 className="text-center" id="home">
              Donations to date
            </h1>
            <HomepageClaimedCounter />
            <HomepageDonationsCounter />
          </div>
        </section>
      </>
    );
  }
}
