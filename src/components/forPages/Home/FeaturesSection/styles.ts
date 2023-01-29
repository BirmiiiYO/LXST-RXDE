import styled from 'styled-components'

import { CENTER, COLUMN, SPACE_BETWEEN, theme } from 'styles/themes'

export const Wrapper = styled.div`
  width: 1920px;
  ${CENTER}
  flex-direction: column;
`
export const TextContainer = styled.div`
  width: 1110px;
  margin: 120px 0;
  ${SPACE_BETWEEN}
`

export const Title = styled.h1`
  width: 450px;
  color: ${theme.colors.black};
  ${theme.typography.EB_HEADLINE_1}
  span {
    color: ${theme.colors.primary};
  }
`

export const TextAndButton = styled.div`
  ${COLUMN}
`

export const Text = styled.p`
  max-width: 440px;
  color: ${theme.colors.grey};
  ${theme.typography.R_PARAGRAPH_2}
  margin: 30px 0;
`

export const SolutionContainer = styled.div`
  width: inherit;
  height: 740px;
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: center;
  gap: 46px;
  background-color: ${theme.colors.background};
`

export const Image = styled.img`
  width: 930px;
  object-fit: contain;
`

export const Description = styled.div`
  width: 540px;
`

export const DescriptionTitle = styled.h2`
  width: 450px;
  color: ${theme.colors.black};
  ${theme.typography.EB_HEADLINE_2}
`
