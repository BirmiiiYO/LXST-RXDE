import React from 'react'
import 'leaflet/dist/leaflet.css'
import { useTranslation } from 'react-i18next'
import { Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet'

import { MapWrapper, StyledMapContainer } from './styles'

// import { LatLngExpression } from 'leaflet'

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
  // const locations = t('contactsPage.locations', { returnObjects: true }) as []

  return (
    <MapWrapper className="map">
      <StyledMapContainer
        center={[53.9177318, 27.5945042]}
        zoom={13}
        scrollWheelZoom
      >
        <TileLayer
          url={`${process.env.MAP_LAYER_path}=${process.env.MAP_LAYER_key}`}
        />
        <LocationMarker />
      </StyledMapContainer>
    </MapWrapper>
  )
}
