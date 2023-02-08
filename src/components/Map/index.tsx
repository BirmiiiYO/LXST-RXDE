import React from 'react'
import 'leaflet/dist/leaflet.css'
import { useTranslation } from 'react-i18next'
import { Marker, Popup, TileLayer } from 'react-leaflet'

import { MapWrapper, StyledMapContainer } from './styles'

export const Map = () => {
  const { t } = useTranslation()
  // const locations = t('contactsPage.locations', { returnObjects: true }) as []

  return (
    <MapWrapper className="map">
      <StyledMapContainer center={[53.9177318, 27.5945042]} zoom={15}>
        <TileLayer
          url={`${process.env.MAP_LAYER_path}=${process.env.MAP_LAYER_key}`}
        />
        <Marker position={[53.9177318, 27.5945042]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </StyledMapContainer>
    </MapWrapper>
  )
}
