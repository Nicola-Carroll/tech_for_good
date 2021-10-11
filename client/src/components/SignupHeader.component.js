import React, { Component } from 'react';

export default class SignupHeader extends Component {
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
