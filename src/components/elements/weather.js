import React, { useState, useEffect } from 'react';

function Weather({ userLocation }) {

  return (
    <div>
      {userLocation ? (
        <p>Your location: {userLocation.latitude}, {userLocation.longitude}</p>
      ) : (
        <p>Fetching your location...</p>
      )}
      {console.log(userLocation)}
    </div>
  );
}

export default Weather;
