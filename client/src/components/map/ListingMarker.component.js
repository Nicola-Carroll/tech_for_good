import React, { Component } from 'react';
import { greatPlaceStyle } from './MarkerStyles';
import { currentUserStyle } from './CurrentUserMarkerStyles';

export default class ListingMarker extends Component {
  style() {
    return `${this.props.type}-marker`;
  }

  renderMarkerImage() {
    if (this.props.type === 'listing') {
      return (
        <div className={this.style()} onClick={this.props.handleClick}>
          <span>{this.props.text}</span>
        </div>
      );
    } else if (this.props.type === 'user') {
      return (
        <img
          id="charity-img"
          className="user-marker"
          src="charity.png"
          alt="Icon of three people linking arms"
        />
      );
    }
  }

  render() {
    return <>{this.renderMarkerImage()}</>;
  }
}
