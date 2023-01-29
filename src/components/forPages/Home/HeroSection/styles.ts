import styled from 'styled-components'

import { devices } from 'styles/breakpoints'
import { SPACE_BETWEEN, theme } from 'styles/themes'

export const Container = styled.div`
  max-width: 1110px;
  position: relative;
  ${SPACE_BETWEEN}
`

export const Title = styled.h1`
  ${theme.typography.EB_HEADLINE_1}
  max-width: 540px;
  padding: 70px 0 90px 0;
  margin-right: 220px;
  & span {
    color: ${theme.colors.primary};
  }
  @media ${devices.laptop} {
    margin-right: 100px;
  }
  @media ${devices.tablet} {
    margin-right: 0;
  }
`
export const Text = styled.span`
  ${theme.typography.R_PARAGRAPH_2}
  color:${theme.colors.grey};
  max-width: 350px;
`

export const ButtonContainer = styled.div`
  position: absolute;
  right: 20%;
  bottom: -60px;
`

export const HeroImage = styled.img`
  max-width: 1920px;
`
