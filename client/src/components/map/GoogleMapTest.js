import React from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';

import { MyMapComponent } from './Map.component';

var render = function (status) {
  if (status === Status.LOADING) return <h3>{status}..</h3>;
  if (status === Status.FAILURE) return <h3>{status}...</h3>;
  return null;
};

export function GoogleMapTest() {
  var center = { lat: -34.397, lng: 150.644 };
  var zoom = 4;

  return (
    <Wrapper apiKey="AIzaSyAMHv0IEB_pQtRWuYOWWF_M26b4smtMD3Q">
      <MyMapComponent center={center} zoom={zoom} />
    </Wrapper>
  );
}
