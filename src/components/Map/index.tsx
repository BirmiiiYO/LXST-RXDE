import React from 'react'
import 'leaflet/dist/leaflet.css'
import { useTranslation } from 'react-i18next'
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from 'react-leaflet'

import { MapWrapper } from './styles'

const LocationMarker = () => {
  const map = useMapEvents({
    click() {
      map.flyTo([53.9177318, 27.5945042])
    },
  })

  return (
    <Marker position={[53.9177318, 27.5945042]}>
      <Popup />
    </Marker>
  )
}

export const Map = () => {
  const { t } = useTranslation()
  return (
    <MapWrapper>
      <MapContainer
        center={[53.9177318, 27.5945042]}
        zoom={15}
        scrollWheelZoom
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidGVtYWJpcm1pIiwiYSI6ImNsNnVtbTBnZDFmZnkzam4yZm5ibWVtb3UifQ.Oiw_j57yDwQpFyfjpxMngA" />
        <LocationMarker />
      </MapContainer>
    </MapWrapper>
  )
}
