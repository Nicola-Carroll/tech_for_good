import React, { Component } from 'react';
import LoginForm from '../components/login-form.component.js';
import { userContext } from '../App.js';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null,
    };

    this.loggedInUser = this.loggedInUser.bind(this);
  }

  loggedInUser(user) {
    this.setState({ loggedInUser: user });
    console.log(this.state.loggedInUser);
  }

  render() {
    return (
      <>
        <userContext.Consumer>
          {({ user, loginUser, logoutUser }) => {
            return (
              <>
                {user && <h2>You're currently logged in as {user}</h2>}
                <div className="m-4">
                  <h1 className="text-center">Login</h1>
                  <LoginForm updateUser={loginUser} />
                </div>
              </>
            );
          }}
        </userContext.Consumer>
      </>
    );
  }
}
