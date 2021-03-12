import React from "react";
import L from "leaflet";
import mapPin from "../images/mapPin.png";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";

const Map = ({ lat, lng }) => {
  let position = [lat, lng];

  const mapIcon = L.icon({
    iconUrl: `${mapPin}`,
    iconSize: [25, 41],
    popupAnchor: [0, -15],
  });

  const LocationMarker = () => {
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound() {
        map.flyTo(position, map.getZoom());
      },
    });

    return position === null ? null : (
      <Marker position={position} icon={mapIcon}>
        <Popup>This address is associated with this locate</Popup>
      </Marker>
    );
  };
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
    </MapContainer>
  );
};

export default Map;
