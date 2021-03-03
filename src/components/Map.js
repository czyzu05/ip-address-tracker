import React from "react";
import L from "leaflet";
import mapPin from "../images/mapPin.png";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = () => {
  const position = [50.061, 19.93];

  const mapIcon = L.icon({
    iconUrl: `${mapPin}`,
    iconSize: [25, 41],
    popupAnchor: [0, -15],
  });
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={mapIcon}>
        <Popup>Localization</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
