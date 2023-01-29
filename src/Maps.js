import React, { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
// import Popup from "react-map-gl-popup";
const Maps = ({ places }) => {
  const [viewport, setViewport] = useState({
    latitude: 29.651634,
    longitude: -82.343835,
    zoom: 14,
    width: "200px",
    height: "500px",
  });
  const [popupInfo, setPopupInfo] = useState(null);

  return (
    <div style={{ background: "blue" }}>
      <Map
        mapboxAccessToken={
          "pk.eyJ1IjoibXVuaXNodCIsImEiOiJjbGRndWdzNmEwOGkxM29udmVscmZqa2U2In0.sRFf0UR-hz5isxxoSc8JSw"
        }
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14,
        }}
        style={{ width: 600, height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Marker
          key={"asdf"}
          latitude={29.646703}
          longitude={-82.347481}
          onClick={(e) => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setPopupInfo("");
          }}
        >
          {/* <Pin /> */}
        </Marker>
        {popupInfo && (
          <Popup
            anchor="top"
            longitude={29.646703}
            latitude={-82.347481}
            onClose={() => setPopupInfo(null)}
          >
            <div>"nay nay"</div>
          </Popup>
        )}
      </Map>

      {/* <Map
        {...viewport}
        mapboxAccessToken={
          "pk.eyJ1IjoibXVuaXNodCIsImEiOiJjbGRndWdzNmEwOGkxM29udmVscmZqa2U2In0.sRFf0UR-hz5isxxoSc8JSw"
        }
        //   mapboxApiAccessToken={"pk.eyJ1IjoibXVuaXNodCIsImEiOiJjbGRndWdzNmEwOGkxM29udmVscmZqa2U2In0.sRFf0UR-hz5isxxoSc8JSw"}
        onViewportChange={(newViewport) => setViewport(newViewport)}
      >
        {/* {places.map((place) => (
        <Marker
          key={place.name}
          latitude={29.651634}
          longitude={29.651634}
        >
          <div>{place.name}</div>
        </Marker>
      ))} */}
    </div>
  );
};

export default Maps;
