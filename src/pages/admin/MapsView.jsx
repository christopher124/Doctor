import React from "react";
import GoogleMaps from "simple-react-google-maps";
import { NavBar } from "../../components/navbar/NavBar";
import { TOKENMAP } from "../../utils/constants";
export function MapsView() {
  return (
    <div>
      <NavBar />
      <h1 className="mt-20 text-7xl text-center text-[#46B0CF]">Ubicación</h1>
      <GoogleMaps
        apiKey={TOKENMAP}
        style={{ height: "500px", width: "370px" }}
        zoom={10}
        center={{
          lat: 20.63296,
          lng: -103.468021,
        }}
        markers={{
          lat: 20.63296,
          lng: -103.468021,
        }}
      />
    </div>
  );
}
