import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MyGreatPlace from './Marker.component';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 51.50696956402362,
      lng: -0.12783497069894073,
    },
    zoom: 9,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '75%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAMHv0IEB_pQtRWuYOWWF_M26b4smtMD3Q' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <MyGreatPlace lat={51.955413} lng={-0.337844} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
