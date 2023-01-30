import styled from 'styled-components'

import { theme } from 'styles/themes'

export const Input = styled.input`
  ${theme.typography.SB_PARAGRAPH_3}
  border-radius: 6px;
  border: none;
  padding: 8.4px 0 7.4px 0;
  margin-right: -10px;
  background: #c9dcec;
  &:focus {
    outline: none;
  }
`

export const Button = styled.button`
  ${theme.typography.B_HEADLINE_6}
  color:${theme.colors.black}
background: ${theme.colors.white};
  border-radius: 6px;
  border: none;
  padding: 8px 43px;
`

export const Container = styled.div``
