import styled from 'styled-components'

import { devices } from 'styles/breakpoints'
import { SPACE_BETWEEN } from 'styles/themes'

export const Row = styled.div`
  width: 1110px;
  padding: 40px 10px;
  ${SPACE_BETWEEN}
  @media ${devices.laptop} {
    width: 100vw;
    padding: 20px 16px;
  }
`

export const Logo = styled.img``
