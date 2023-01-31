import styled from 'styled-components'

import { CENTER, SPACE_BETWEEN, theme } from 'styles/themes'

export const Container = styled.div`
  ${CENTER}
  width:100%;
  background: ${theme.colors.secondary};
  color: ${theme.colors.white};
`
export const Content = styled.div`
  width: 1110px;
  ${SPACE_BETWEEN}
  padding:80px 0;
`

export const Info = styled.div`
  max-width: 540px;
`
export const Title = styled.h2`
  ${theme.typography.EB_HEADLINE_2}
  margin-bottom:24px;
`
export const Text = styled.span`
  ${theme.typography.R_PARAGRAPH_1}
`
export const Input = styled.input``
