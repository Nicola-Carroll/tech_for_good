import React, { Component } from 'react';

import { greatPlaceStyle } from './MarkerStyles';

export default class ListingMarker extends Component {
  render() {
    return <div style={greatPlaceStyle} onClick={this.props.handleClick}></div>;
  }
}
