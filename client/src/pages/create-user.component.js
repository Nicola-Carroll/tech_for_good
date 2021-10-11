import React, { Component } from 'react';
import CharitySignupForm from '../components/charity-signup-form.component.js';
import RestaurantSignupForm from '../components/restaurant-signup-form.component.js';
import { userContext } from '../App.js';

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
        <userContext.Consumer>
          {({ user, loginUser, logoutUser }) => {
            return <>{user && <h2>You're currently logged in as {user}</h2>}</>;
          }}
        </userContext.Consumer>
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
          <userContext.Consumer>
            {({ user }) => {
              return (
                <>
                  <h1>Logged in user is: {user}</h1>
                </>
              );
            }}
          </userContext.Consumer>
        </div>
        {form}
      </div>
    );
  }
}
