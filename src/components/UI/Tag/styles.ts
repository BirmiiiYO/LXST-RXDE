import styled from 'styled-components'

import { theme } from 'styles/themes'

export const StyledTag = styled.button`
  color: ${theme.colors.primary};
  font-family: 'Manrope';
  font-weight: 800;
  font-size: 14px;
  line-height: 24px;
  background-color: ${theme.colors.white};
  font-size: 14px;
  line-height: 24px;
  padding: 3px 11px;
  border: 1px solid ${theme.colors.aliceBlue};
  border-radius: 6px;
  margin: 5px;
  &:not([disabled]):hover {
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
  }

  &:disabled {
    color: ${theme.colors.grey};
  }
`
