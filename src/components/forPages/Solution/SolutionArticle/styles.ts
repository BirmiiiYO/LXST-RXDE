import styled from 'styled-components'

import { COLUMN, theme } from 'styles/themes'

export const InfoContainer = styled.div`
  max-width: 650px;
  margin: 70px 0;
  ${COLUMN}
`
export const List = styled.span`
  ${theme.typography.R_PARAGRAPH_1}
  display: flex;
  color: grey;
  margin-top: 30px;
  svg {
    margin: 5px;
  }
`
export const ArticleContainer = styled.div`
  min-height: 500px;
`

export const Image = styled.img`
  width: 100%;
  margin: 30px 0;
`
