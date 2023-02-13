import styled from 'styled-components'

import { devices } from 'styles/breakpoints'
import { theme } from 'styles/themes'

export const Container = styled.div`
  max-width: 205px;
  max-height: 205px;
  background: ${theme.colors.white};
  overflow: hidden;
  box-shadow: ${theme.shadows.shadowCard3};
  padding: 25px;
  margin: 10px;
  @media ${devices.laptop} {
    padding: 15px;
    margin: 5px;
  }
  cursor: pointer;
`

export const Icon = styled.img`
  width: 30px;
`
