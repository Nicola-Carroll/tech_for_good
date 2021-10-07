import React, { Component } from 'react';
import SignupForm from '../components/signup-form.component.js';

export default class Signup extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center">Signup</h1>
        <SignupForm />
      </div>
    );
  }
}
