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
        {this.renderForm()}
      </div>
    );
  }
}
