import React, { Component } from 'react';
import SignupHeader from '../components/SignupHeader.component.js';
import SignupForm from '../components/SignupForm.component.js';
import { userContext } from '../App.js';

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
        <userContext.Consumer>
          {(value) => <h1>{value}</h1>}
        </userContext.Consumer>
        {form}
      </div>
    );
  }
}
