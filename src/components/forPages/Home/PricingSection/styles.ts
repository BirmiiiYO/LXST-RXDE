import styled from 'styled-components'

import { devices } from 'styles/breakpoints'
import { CENTER, COLUMN, SPACE_BETWEEN, theme } from 'styles/themes'

export const Container = styled.div`
  width: 1110px;
  margin: 120px 0;
  ${COLUMN}
  @media (max-width: 1110px) {
    width: 900px;
  }
`

export const Cards = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
`
