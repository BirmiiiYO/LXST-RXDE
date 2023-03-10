import styled from 'styled-components'

import { devices } from 'styles/breakpoints'
import { theme } from 'styles/themes'

export const Title = styled.h1`
  max-width: 450px;
  color: ${theme.colors.black};
  ${theme.typography.EB_HEADLINE_1}
  span {
    color: ${theme.colors.primary};
  }
  margin-right: 210px;
  @media ${devices.laptop} {
    margin-right: 100px;
  }
  @media ${devices.tablet} {
    margin-right: 0;
  }
`

export const Text = styled.p`
  max-width: 440px;
  padding: 10px;
  color: ${theme.colors.grey};
  ${theme.typography.R_PARAGRAPH_2}
  margin: 30px 0;
`

export const SolutionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${theme.colors.aliceBlue};
  @media ${devices.tablet} {
    flex-direction: column;
    justify-content: center;
  }
`

export const Image = styled.img`
  width: 50%;
  margin-right: 50px;
`

export const Description = styled.div`
  max-width: 450px;
  padding: 10px;
`
