import React, { Component } from 'react';
import LoginForm from '../components/login-form.component.js';

export default class Login extends Component {
  render() {
    return (
      <div className="m-4">
        <h1 className="text-center">Login</h1>
        <LoginForm />
      </div>
    );
  }
}
