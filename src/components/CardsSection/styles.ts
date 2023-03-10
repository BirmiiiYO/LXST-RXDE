import styled from 'styled-components'

import { devices } from 'styles/breakpoints'
import { SPACE_BETWEEN } from 'styles/themes'

export const SpaceBetween = styled.div`
  ${SPACE_BETWEEN};
`

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  @media ${devices.laptop} {
    justify-content: center;
  }
`
