import styled from 'styled-components'

import { CENTER, SPACE_BETWEEN, theme } from 'styles/themes'

export const Container = styled.div`
    max-width:100%
    color:${theme.colors.grey}
    ${CENTER}
`
export const Content = styled.div`
  max-width: 1110px;
  ${SPACE_BETWEEN}
`
export const Info = styled.div`
  margin: 302px 30px;
`
export const Title = styled.div`
  ${theme.typography.EB_HEADLINE_2}
  margin-bottom:30px;
`
export const Text = styled.div`
  ${theme.typography.R_PARAGRAPH_1}
  color:${theme.colors.grey};
  max-width: 540px;
`
export const Cards = styled.div``
