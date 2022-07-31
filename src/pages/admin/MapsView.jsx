import React from "react";
import { NavBar } from "../../components/navbar/NavBar";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap
} from "react-google-maps";
import constants from "../../utils/constants"

const mapURL = "https://maps.googleapis.com/maps/api/js?v=3.exp&key=${constants.Map}"

export function MapsView() {
  return (
    <div>
      <NavBar />
      <h1 className="mt-20 text-7xl text-center text-[#46B0CF]">Ubicación</h1>
      <Map
        GoogleMapURL={mapURL}
        containerElement={<div style={{ height: "400px" }} />}
        mapElement={<div style={{ height: "100%" }} />}
        loadingElement={<p>Cargando</p>}
      />

    </div>
  );
}

const Map = (props) => {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: -34.997, lng: 150.644 }}
    />
  );
}

export default withScriptjs(
  withGoogleMap(
    Map
  )
)