import styled from 'styled-components'

import { SPACE_BETWEEN, theme } from 'styles/themes'

import { devices } from '../../../../styles/breakpoints'

export const Container = styled.div`
  max-width: 1110px;
  position: relative;
  ${SPACE_BETWEEN}
  @media ${devices.content} {
    width: 100vw;
    padding: 0 10px;
  }
  @media ${devices.tablet} {
    flex-direction: column;
    justify-content: center;
  }
`
export const Text = styled.span`
  ${theme.typography.R_PARAGRAPH_2}
  color:${theme.colors.grey};
  max-width: 350px;
  padding: 10px;
`

export const ButtonContainer = styled.div`
  position: absolute;
  right: 20%;
  bottom: -60px;
`

export const HeroImage = styled.img`
  width: 100%;
`
