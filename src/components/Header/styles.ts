import styled from 'styled-components'

import { devices } from 'styles/breakpoints'
import { CENTER, SPACE_BETWEEN, theme } from 'styles/themes'

export const Container = styled.div`
  ${CENTER}
  width:100%;
  background: ${theme.colors.secondary};
`

export const Row = styled.div`
  width: 1110px;
  padding: 40px 10px;
  ${SPACE_BETWEEN}
  @media ${devices.laptop} {
    width: 100vw;
    padding: 20px 16px;
  }
`

export const Logo = styled.img`
  width: 146px;
  height: 41px;
  @media ${devices.mobileL} {
    width: 92px;
    height: 30px;
  }
`
