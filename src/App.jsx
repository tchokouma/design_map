import React from 'react';

import { GoogleMap, useLoadScript } from '@react-google-maps/api';

import SearchBox from './SearchBox';
const containerStyle = {
  width: '100%',
  height: '1000px',
};
function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAySbYAnzl51I3CRYb_USlv9LPlLENmiF8',
    //libraries: ["places"],
  });

  if (loadError) {
    return <div>Error loading the map</div>;
  }

  if (!isLoaded) {
    return <div>Loading the map...</div>;
  }

  return (
    <div>
      <SearchBox />

      <GoogleMap></GoogleMap>
    </div>
  );
}

export default Map;
