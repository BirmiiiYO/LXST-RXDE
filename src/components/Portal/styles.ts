import styled from 'styled-components'

import { CENTER, theme } from 'styles/themes'

import { TModalStyleProps } from './types'

export const PortalContainer = styled.div`
  position: absolute;
  top: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  ${CENTER}
`

export const ModalContainer = styled.div<TModalStyleProps>`
  position: relative;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  svg {
    fill: black;
    stroke: black;
    position: absolute;
    top: -10px;
    right: -10px;
    margin: 10px;
    background: ${theme.colors.aliceBlue};
    cursor: pointer;
  }
`
