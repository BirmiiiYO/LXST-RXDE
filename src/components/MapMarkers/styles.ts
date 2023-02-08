import { Popup } from 'react-leaflet'
import styled from 'styled-components'

import { SPACE_BETWEEN, theme } from 'styles/themes'

export const StylesPopup = styled(Popup)`
  ${theme.typography.M_HEADLINE_7}
  ${SPACE_BETWEEN}
  background: ${theme.colors.aliceBlue};
  border-radius: 6px;
  padding: 5px 10px;
  position: absolute;
  margin: 0 0 10px 50px;
`
