import React, { Component } from 'react';
import LoginForm from '../components/login-form.component.js';
import { userContext } from '../App.js';

export default class Login extends Component {
  render() {
    return (
      <>
        <userContext.Consumer>
          {({ loginUser }) => {
            return (
              <>
                <div className="m-5">
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
