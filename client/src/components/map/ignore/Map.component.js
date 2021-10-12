import React, { useEffect, useRef, ReactElement } from 'react';

export function MyMapComponent(props) {
  var center = props.center,
    zoom = props.zoom;
  var ref = useRef();

  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center: center,
      zoom: zoom,
    });
  });

  return <div ref={ref} id="map"></div>;
}
