import React, { Component } from 'react';
import { greatPlaceStyle } from './MarkerStyles';
import { currentUserStyle } from './CurrentUserMarkerStyles';

export default class ListingMarker extends Component {
  style() {
    return `${this.props.type}-marker`;
    // if (this.props.type === 'user') {
    //   return currentUserStyle;
    // } else {
    //   return greatPlaceStyle;
    // }
  }

  render() {
    return (
      <>
        <div>{this.props.text}</div>
        <div className={this.style()} onClick={this.props.handleClick}></div>
      </>
    );
  }
}
