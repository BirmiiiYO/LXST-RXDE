import styled from 'styled-components'

import { COLUMN, theme } from 'styles/themes'

export const Block = styled.div`
  ${COLUMN}
  &:not(:last-child) {
    padding: 0 63px;
    border-right: 1px solid ${theme.colors.rhythmicBlue};
  }
`

export const Amount = styled.div`
  font-family: 'Open Sans';
  font-weight: 800;
  font-size: 56px;
  line-height: 112px;
  color: ${theme.colors.primary};
`
