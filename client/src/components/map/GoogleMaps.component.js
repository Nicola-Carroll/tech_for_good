import React, { Component } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { Wrapper } from '@googlemaps/react-wrapper';

// dynamically loads the Maps Javascript API and wraps the process in a promise
// this means you can now import hte js-api-loader and loads hte MAPs JS API via JS rather than HTML
// these libraries manage the insertion of the script tag into HTML
// and abstract away the asynchronous complexity into a Promise nad React hook
const loader = new Loader({
  apiKey: 'AIzaSyAMHv0IEB_pQtRWuYOWWF_M26b4smtMD3Q',
  version: 'weekly',
  libraries: ['places'],
});

loader
  .load()
  .then(() => {
    // use google.maps in application
    console.log('hello loader');
  })
  .catch((error) => {
    console.log(error);
  });

function GoogleMap() {
  return (
    // <Wrapper apiKey={'AIzaSyAMHv0IEB_pQtRWuYOWWF_M26b4smtMD3Q'}>
    <h1>Helllo google component</h1>
    // </Wrapper>
  );
}

export default GoogleMap;
