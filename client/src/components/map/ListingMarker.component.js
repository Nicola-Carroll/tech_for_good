import React, { Component } from 'react';
import { greatPlaceStyle } from './MarkerStyles';
import { currentUserStyle } from './CurrentUserMarkerStyles';

export default class ListingMarker extends Component {
  style() {
    if (this.props.type === 'user') {
      return currentUserStyle;
    } else {
      return greatPlaceStyle;
    }
  }
  render() {
    return (
      <div style={this.style()} onClick={this.props.handleClick}>
        {this.props.text}
      </div>
    );
  }
}
