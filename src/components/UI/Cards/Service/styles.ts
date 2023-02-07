import styled from 'styled-components'

import { devices } from 'styles/breakpoints'
import { theme } from 'styles/themes'

export const Container = styled.div`
  max-width: 350px;
  box-shadow: ${theme.shadows.shadowCard3};
  padding: 46px 35px;
  margin: 20px;
  @media ${devices.laptop} {
    padding: 30px 25px;
  }
`

export const Icon = styled.img`
  padding: 18px;
  width: 70px;
  border: 1px solid ${theme.colors.rhythmicBlue};
  border-radius: 12px;
`

export const Title = styled.h1`
  ${theme.typography.B_HEADLINE_4}
  margin: 30px 0 16px 0;
`

export const Text = styled.div`
  ${theme.typography.R_PARAGRAPH_2}
  color:${theme.colors.grey}
`
