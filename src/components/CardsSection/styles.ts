import styled from 'styled-components'

import { devices } from 'styles/breakpoints'
import { SPACE_BETWEEN } from 'styles/themes'

export const SpaceBetween = styled.div`
  width: 250px;
  ${SPACE_BETWEEN};
  @media ${devices.content} {
    width: 200px;
  }
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

export const CardsContainer = styled.div`
  width: 100%;
  margin-bottom: 50px;
  ${SPACE_BETWEEN}
`
