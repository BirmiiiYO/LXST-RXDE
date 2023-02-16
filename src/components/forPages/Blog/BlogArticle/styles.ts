import styled from 'styled-components'

import { SPACE_BETWEEN, theme } from 'styles/themes'

export const Image = styled.img`
  width: 100%;
  border-radius: 6px;
`

export const Date = styled.div`
  ${theme.typography.R_PARAGRAPH_3}
  color:${theme.colors.grey};
  margin: 25px 0 40px;
  svg {
    margin-right: 5px;
  }
`

export const Views = styled.div``

export const Share = styled.div`
  ${theme.typography.R_PARAGRAPH_3}
  color:${theme.colors.grey};
  padding: 10px;
`

export const Tags = styled.div``

export const BlogContainer = styled.div`
  max-width: 635px;
`

export const InfoContainer = styled.div`
  ${SPACE_BETWEEN}
  ${theme.typography.R_PARAGRAPH_3}
  color:${theme.colors.grey}
`
