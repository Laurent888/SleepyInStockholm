import React from "react";
import {
  GoogleMap,
  withGoogleMap,
  withScriptjs,
  Marker
} from "react-google-maps";

const MapComponent = withScriptjs(
  withGoogleMap(props => {
    return (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 59.329323, lng: 18.068581 }}
      >
        {props.isMarkerShown && <Marker position={props.latLng} />}
      </GoogleMap>
    );
  })
);

export default MapComponent;
