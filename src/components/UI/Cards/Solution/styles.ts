import styled from 'styled-components'

import { devices } from 'styles/breakpoints'
import { theme } from 'styles/themes'

import check from './check.svg'

export const Container = styled.div`
  width: 350px;
  border-top: 6px solid ${theme.colors.primary};
  padding: 41px 35px 35px 35px;
  box-shadow: ${theme.shadows.shadowCard3};
  border-radius: 6px;
  @media ${devices.laptop} {
    padding: 35px 25px 30px 25px;
  }
`

export const Title = styled.h2`
  ${theme.typography.B_HEADLINE_4}
  margin-bottom:35px;
`

export const Info = styled.div`
  ${theme.typography.R_PARAGRAPH_2}
  margin-bottom:15px;
  &::before {
    content: url(${check});
    padding-right: 5px;
  }
`
