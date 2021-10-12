import React, { Component } from 'react';
// import { PropTypes } from 'react/addons';
// import shouldPureComponentUpdate from 'react-pure-render/function';

import { greatPlaceStyle } from './MarkerStyles';

export default class ListingMarker extends Component {
  // static propTypes = {
  //   text: PropTypes.string,
  // };

  // static defaultProps = {};

  // shouldComponentUpdate = shouldPureComponentUpdate

  // onClickMarker() {
  //   console.log('hello');
  // }

  render() {
    return <div style={greatPlaceStyle} onClick={this.props.handleClick}></div>;
  }
}
