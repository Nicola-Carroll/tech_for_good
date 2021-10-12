import React, { Component } from 'react';
// import { PropTypes } from 'react/addons';
// import shouldPureComponentUpdate from 'react-pure-render/function';

import { greatPlaceStyle } from './MarkerStyles';

export default class MyGreatPlace extends Component {
  // static propTypes = {
  //   text: PropTypes.string,
  // };

  // static defaultProps = {};

  // shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    return <div style={greatPlaceStyle}>{this.props.text}</div>;
  }
}
