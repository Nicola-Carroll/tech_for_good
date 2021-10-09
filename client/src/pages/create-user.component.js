import React, { Component } from 'react';
import CharitySignupForm from '../components/charity-signup-form.component.js';
import RestaurantSignupForm from '../components/restaurant-signup-form.component.js';

class SignupForm extends Component {
  chooseCorrectForm() {
    if (this.props.accountType === 'charity') {
      return <CharitySignupForm />;
    } else if (this.props.accountType === 'restaurant') {
      return <RestaurantSignupForm />;
    }
  }

  render() {
    return <div>{this.chooseCorrectForm()}</div>;
  }
}

export default class Signup extends Component {
  constructor() {
    super();
    this.state = {
      accountType: '',
    };
    this.renderCharityForm = this.renderCharityForm.bind(this);
    this.renderRestaurantForm = this.renderRestaurantForm.bind(this);
  }

  renderCharityForm() {
    this.setState({
      accountType: 'charity',
    });
  }

  renderRestaurantForm() {
    this.setState({
      accountType: 'restaurant',
    });
  }

  renderForm() {
    return <SignupForm accountType={this.state.accountType}></SignupForm>;
  }

  render() {
    return (
      <div className="m-4">
        <h1 className="text-center">Signup</h1>
        <div className="text-center">
          <button
            className="btn btn-outline-success m-4"
            id="charity-btn"
            data-bs-toggle="button"
            autoComplete="off"
            onClick={this.renderCharityForm}
          >
            I am a charity
          </button>
          <button
            className="btn btn-outline-success m-4"
            id="restaurant-btn"
            data-bs-toggle="button"
            autoComplete="off"
            onClick={this.renderRestaurantForm}
          >
            I am a restaurant
          </button>
        </div>
        {this.renderForm()}
      </div>
    );
  }
}
