import React, { Component } from 'react';

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
        <div>
          <p>This is the homepage component</p>
        </div>
      </>
    );
  }
}
