import React, { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
// import Popup from "react-map-gl-popup";
const Maps = (props) => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 14
  });
  // Map.on('load', function () {
  //   Map.resize();
  // });
  return (

    <Map
      initialViewState={{
        longitude: -82.3549,
        latitude: 29.6436,
        zoom: 14,
      }}
      // style={{ width: "70vw", height: "100vh", position: 'relative' }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={"pk.eyJ1IjoibXVuaXNodCIsImEiOiJjbGRndWdzNmEwOGkxM29udmVscmZqa2U2In0.sRFf0UR-hz5isxxoSc8JSw"}
    >
      {props.places.map((location) =>
        <Marker
          latitude={location.latitude}
          longitude={location.longitude}
          anchor="top"
          onClick={e => {
            e.originalEvent.stopPropagation();
            setSelectedLocation({ name: location.name, type: location.type })
          }}
        >

        </Marker>)}
      {selectedLocation && (
        <Popup
          latitude={29.6436}
          longitude={-82.3549}
          onClose={() => setSelectedLocation(null)}
        >
          <div>
            <h2>{selectedLocation.name}</h2>
            <p>Type: {selectedLocation.type}</p>
          </div>
        </Popup>

      )}
    </Map>
  );
};

export default Maps;
