import styled from 'styled-components'

import { devices } from 'styles/breakpoints'
import { CENTER, SPACE_BETWEEN, theme } from 'styles/themes'

export const Container = styled.div`
  ${CENTER}
  width:100%;
  background: ${theme.colors.secondary};
  color: ${theme.colors.white};
  border-bottom: 1px solid #607d94;
`

export const Info = styled.div`
  max-width: 540px;
`
export const Text = styled.span`
  ${theme.typography.R_PARAGRAPH_1}
`
export const Input = styled.input``
