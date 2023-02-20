import styled from 'styled-components'

import { devices } from 'styles/breakpoints'
import { theme } from 'styles/themes'

export const Container = styled.div`
  width: 255px;
  height: 255px;
  background: ${theme.colors.white};
  overflow: hidden;
  box-shadow: ${theme.shadows.shadowCard3};
  padding: 25px;
  margin: 10px;
  @media ${devices.laptop} {
    width: 205px;
    height: 205px;
    padding: 15px;
    margin: 5px;
  }
  cursor: pointer;
`

export const Icon = styled.img`
  width: 30px;
`
