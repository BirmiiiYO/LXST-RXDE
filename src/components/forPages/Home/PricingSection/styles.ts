import styled from 'styled-components'

import { COLUMN } from 'styles/themes'

export const Cards = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
`

export const PriceContainer = styled.div`
  width: 1110px;
  margin: 120px 0 0;
  ${COLUMN}
  @media (max-width: 1110px) {
    width: 100%;
  }
`
