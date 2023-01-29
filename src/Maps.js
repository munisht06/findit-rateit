import React, { useState } from "react";
import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Pin from "./Pin";
// import Popup from "react-map-gl-popup";


const Maps = ({ places }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 14
  });

  // const [popupInfo, setPopupInfo] = useState(true);

  return (
    // <div style={{ background: "blue" }}>
      <Map
        // {...viewport}
        mapboxAccessToken={
          "pk.eyJ1IjoibXVuaXNodCIsImEiOiJjbGRndWdzNmEwOGkxM29udmVscmZqa2U2In0.sRFf0UR-hz5isxxoSc8JSw"
        }
        initialViewState={{
          longitude: -82.347481,
          latitude: 29.646703,
          bearing: 0,
          pitch: 0,
          zoom: 12,
        }}
        // style={{ width: "100vw", height: "100vh"}}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <GeolocateControl position="top-left" />
        <FullscreenControl position="top-left" />
        <NavigationControl position="top-left" />
        <ScaleControl />


        {places.map((place) => (
          <Marker
            key={place.name}
            latitude={place.lat}
            longitude={place.long}
            anchor="bottom"
            onClick={(e) => {
              // If we let the click event propagates to the map, it will immediately close the popup
              // with `closeOnClick: true`
              e.originalEvent.stopPropagation();
              console.log("clicked");
              setSelectedLocation({ name: place.name, type: place.type, lat: place.lat, long: place.long })
            }
            }
          >

            <Pin type={place.type}/>
          </Marker>
        ))
        }
       
       {selectedLocation && (
        <Popup
          latitude={selectedLocation.lat}
          longitude={selectedLocation.long}
          anchor="top"
          onClose={() => setSelectedLocation(null)}
        >
          <div>
            <h2>{selectedLocation.name}</h2>
            <p>Type: {selectedLocation.type}</p>
          </div>
        </Popup>

      )}
      </Map>
    // </div>
  );
};

export default Maps;
