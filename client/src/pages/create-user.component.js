import React, { Component } from 'react';
import CharitySignupForm from '../components/charity-signup-form.component.js';
import RestaurantSignupForm from '../components/restaurant-signup-form.component.js';

class SignupHeader extends Component {
  correctContent() {
    if (this.props.accountType === 'charity') {
      return 'Signup your charity';
    } else if (this.props.accountType === 'restaurant') {
      return 'Signup your restaurant';
    } else {
      return 'Signup';
    }
  }

  render() {
    return <h1 className="text-center">{this.correctContent()}</h1>;
  }
}

class SignupForm extends Component {
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

export default class Signup extends Component {
  constructor() {
    super();
    this.state = {
      accountType: '',
    };
    this.setAccountTypeCharity = this.setAccountTypeCharity.bind(this);
    this.setAccountTypeRestaurant = this.setAccountTypeRestaurant.bind(this);
  }

  setAccountTypeCharity() {
    this.setState({
      accountType: 'charity',
    });
  }

  setAccountTypeRestaurant() {
    this.setState({
      accountType: 'restaurant',
    });
  }

  renderForm() {
    return <SignupForm accountType={this.state.accountType}></SignupForm>;
  }

  renderHeader() {
    return <SignupHeader accountType={this.state.accountType}></SignupHeader>;
  }

  render() {
    return (
      <div className="m-4">
        {this.renderHeader()}
        <div className="text-center">
          <button
            className="btn btn-outline-success m-4"
            id="charity-btn"
            data-bs-toggle="button"
            autoComplete="off"
            onClick={this.setAccountTypeCharity}
          >
            I am a charity
          </button>
          <button
            className="btn btn-outline-success m-4"
            id="restaurant-btn"
            data-bs-toggle="button"
            autoComplete="off"
            onClick={this.setAccountTypeRestaurant}
          >
            I am a restaurant
          </button>
        </div>
        {this.renderForm()}
      </div>
    );
  }
}
