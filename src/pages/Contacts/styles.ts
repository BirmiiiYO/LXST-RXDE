import styled from 'styled-components'

import { devices } from 'styles/breakpoints'
import { COLUMN, SPACE_BETWEEN } from 'styles/themes'

export const CusContainer = styled.div`
  ${SPACE_BETWEEN}
  justify-content:center;
  width: 1110px;
  @media ${devices.content} {
    width: 100%;
  }
`

export const MoreContainer = styled.div`
  ${COLUMN}
  justify-content:center;
  max-width: 500px;
`

export const Containerr = styled.div``
