import React, { Component } from 'react';
import CharitySignupForm from './charity-signup-form.component.js';
import RestaurantSignupForm from './restaurant-signup-form.component.js';

export default class SignupForm extends Component {
  correctForm() {
    if (this.props.accountType === 'charity') {
      return <CharitySignupForm />;
    } else if (this.props.accountType === 'restaurant') {
      return <RestaurantSignupForm />;
    }
  }

  render() {
    return <div>{this.correctForm()}</div>;
  }
}
