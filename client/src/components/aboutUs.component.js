import React, { Component } from 'react';

export default class AboutUs extends Component {
  render() {
    return (
      <div className="w-50 m-auto pt-5 pb-5">
        <h1 className="mt-2 mb-2 display-5 text-center pb-5" htmlFor="meals">
          What we do
        </h1>
        <p
          id="paragraph"
          className="row font-weight-bold justify-content-center display-7 text-center"
        >
          SecondHelpings is a London based charity food redistributor. We
          connect businesses that have surplus food with frontline charities.
          Helping others and reducing waste.
        </p>
      </div>
    );
  }
}
