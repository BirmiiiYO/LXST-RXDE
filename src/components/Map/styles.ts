import { MapContainer } from 'react-leaflet'
import styled from 'styled-components'

export const MapWrapper = styled.div`
  height: 460px;
  overflow: hidden;
  .leaflet-pane{
    img{
        position: absolute;
    }
`

export const StyledMapContainer = styled(MapContainer)`
  height: 100%;
`
