import React, { Component } from 'react';
import CharitySignupForm from '../components/charity-signup-form.component.js';
import RestaurantSignupForm from '../components/restaurant-signup-form.component.js';

export default class Signup extends Component {
  constructor() {
    super();
    this.state = {
      showCharitySignupForm: false,
      showRestaurantSignupForm: false,
    };
  }

  render() {
    const showCharitySignupForm = this.state.showCharitySignupForm;
    const showRestaurantSignupForm = this.state.showRestaurantSignupForm;
    let form;
    if (showCharitySignupForm) {
      form = <CharitySignupForm />;
    } else if (showRestaurantSignupForm) {
      form = <RestaurantSignupForm />;
    } else {
    }
    return (
      <div className="m-4">
        <h1 className="text-center">Signup</h1>
        <div className="text-center">
          <button
            className="btn btn-outline-success m-4"
            id="charity-btn"
            data-bs-toggle="button"
            autoComplete="off"
            onClick={() =>
              this.setState({
                showCharitySignupForm: true,
                showRestaurantSignupForm: false,
              })
            }
          >
            I am a charity
          </button>
          <button
            className="btn btn-outline-success m-4"
            id="restaurant-btn"
            data-bs-toggle="button"
            autoComplete="off"
            onClick={() =>
              this.setState({
                showCharitySignupForm: false,
                showRestaurantSignupForm: true,
              })
            }
          >
            I am a restaurant
          </button>
        </div>
        {form}
      </div>
    );
  }
}
