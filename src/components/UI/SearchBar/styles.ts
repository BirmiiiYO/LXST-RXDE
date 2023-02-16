import styled from 'styled-components'

import { theme } from 'styles/themes'

export const StyledInput = styled.input`
  width: 320px;
  height: 54px;
  border: none;
  padding: 15px 25px;
  margin-right: -5px;
  ${theme.typography.SB_PARAGRAPH_3}
  border: 1px solid ${theme.colors.rhythmicBlue};

  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  &::placeholder {
    color: theme.colors.grey;
  }
  &:focus {
    outline: none;
  }
`

export const StyledButton = styled.button`
  width: 125px;
  height: 54px;
  ${theme.typography.B_HEADLINE_6}
  background-color: ${theme.colors.white};
  border: none;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  user-select: none;
  &:active {
    opacity: 1;
  }
`
