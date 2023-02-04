import styled from 'styled-components'

import { CENTER, theme } from 'styles/themes'

export const PortalContainer = styled.div`
  position: absolute;
  top: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  ${CENTER}
`

export const ModalContainer = styled.div`
  position: relative;
  width: 80vw;
  height: 90vh;
`
export const Icon = styled.img`
  position: absolute;
  top: -10px;
  right: -10px;
  padding: 10px;
  border-radius: 6px;
  background: ${theme.colors.aliceBlue};
  cursor: pointer;
`
