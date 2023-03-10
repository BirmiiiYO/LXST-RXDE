import { MapContainer } from 'react-leaflet'
import styled from 'styled-components'

export const MapWrapper = styled.div`
  height: 460px;
  overflow: hidden;
  .leaflet-pane {
    img {
      position: absolute;
    }
  }
  .leaflet-control-container {
    position: relative;
    z-index: 999;
  }
`

export const StyledMapContainer = styled(MapContainer)`
  height: 100%;
`
