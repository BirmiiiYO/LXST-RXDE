import React from 'react'
import 'leaflet/dist/leaflet.css'
import { TileLayer } from 'react-leaflet'

import { Markers } from 'components/MapMarkers'

import { MapWrapper, StyledMapContainer } from './styles'

export const Map = () => (
  <MapWrapper className="map">
    <StyledMapContainer center={[53.9177318, 27.5945042]} zoom={15}>
      <TileLayer
        url={`${process.env.MAP_LAYER_path}=${process.env.MAP_LAYER_key}`}
      />
      <Markers />
    </StyledMapContainer>
  </MapWrapper>
)
