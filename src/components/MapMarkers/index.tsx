import { Icon } from 'leaflet'
import markerIconPng from 'leaflet/dist/images/marker-icon.png'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Marker } from 'react-leaflet'

import { StylesPopup } from './styles'

export const Markers = () => {
  const { t } = useTranslation()
  const locations = t('contactsPage.locations', { returnObjects: true }) as []
  return (
    <>
      {locations.map(({ structureId, lat, lng, name }) => (
        <Marker
          key={structureId}
          position={[lat, lng]}
          icon={
            new Icon({
              iconUrl: markerIconPng,
            })
          }
        >
          <StylesPopup>{name}</StylesPopup>
        </Marker>
      ))}
    </>
  )
}
