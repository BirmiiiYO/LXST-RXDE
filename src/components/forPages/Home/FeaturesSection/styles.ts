import styled from 'styled-components'

import { devices } from 'styles/breakpoints'
import { CENTER, COLUMN, SPACE_BETWEEN, theme } from 'styles/themes'

export const TextContainer = styled.div`
  max-width: 1110px;
  margin: 120px 0;
  ${SPACE_BETWEEN}
`

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

export const TextAndButton = styled.div`
  ${COLUMN}
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
  background-color: ${theme.colors.background};
`

export const Image = styled.img`
  width: 50%;
  margin-right: 50px;
`

export const Description = styled.div`
  max-width: 450px;
  padding: 10px;
`

export const DescriptionTitle = styled.h2`
  max-width: 450px;
  padding: 10px;
  color: ${theme.colors.black};
  ${theme.typography.EB_HEADLINE_2}
`
