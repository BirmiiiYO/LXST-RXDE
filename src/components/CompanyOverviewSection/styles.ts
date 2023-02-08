import styled from 'styled-components'

import { devices } from 'styles/breakpoints'
import { COLUMN, theme } from 'styles/themes'

export const Block = styled.div`
  ${COLUMN}
  background:${theme.colors.aliceBlue};
  &:not(:last-child) {
    padding: 0 63px;
    border-right: 1px solid ${theme.colors.rhythmicBlue};
  }
  @media ${devices.laptop} {
    padding: 10px;
  }
`

export const Amount = styled.div`
  font-family: 'Open Sans';
  font-weight: 800;
  font-size: 56px;
  line-height: 112px;
  color: ${theme.colors.primary};
  @media ${devices.laptop} {
    font-size: 30px;
    line-height: 70px;
  }
`
