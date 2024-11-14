import { useEffect } from 'react';
import { MapContainer, TileLayer, CircleMarker } from 'react-leaflet';
import { GeoMetrics } from '../../types';

interface Props {
  geoData: GeoMetrics[];
}

export const GeoMap = ({ geoData }: Props) => {
  return (
    <MapContainer
      center={[0, 0]}
      zoom={2}
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {geoData.map((location, index) => (
        <CircleMarker
          key={index}
          center={[location.latitude, location.longitude]}
          radius={Math.sqrt(location.listeners) / 100}
          fillColor="#FF0000"
          color="#FF0000"
          weight={1}
          opacity={0.5}
          fillOpacity={0.5}
        />
      ))}
    </MapContainer>
  );
};
