import styled from 'styled-components'

import { devices } from 'styles/breakpoints'
import { CENTER, COLUMN, theme } from 'styles/themes'

export const Center = styled.div`
  ${CENTER}
`

export const InfoContainer = styled.div`
  ${CENTER};
  margin: ${theme.RANGE.L};
`

export const Background = styled.div`
  width: 100vw;
  min-height: 100vh;
  ${CENTER}
`

export const Container = styled.div`
  background: ${theme.colors.dark};
  width: 90vw;
  min-height: 540px;
  opacity: 0.75;
  ${COLUMN}
  @media ${devices.laptop} {
    width: 100%;
  }
`

export const Title = styled.h1`
  font-size: ${theme.FONT_SIZE.L}px;
  font-weight: ${theme.FONT_WEIGHT.S};
  color: ${theme.colors.dark};
`
