import styled from 'styled-components'

import { player } from 'assets/player.svg'
import { COLUMN, SPACE_BETWEEN, theme } from 'styles/themes'

export const Content = styled.div`
  ${SPACE_BETWEEN}
  padding:70px 10px;
`

export const Block = styled.div`
  ${COLUMN}
  &:not(:last-child) {
    padding: 0 63px;
    border-right: 1px solid ${theme.colors.rhythmicBlue};
  }
`

export const Title = styled.div`
  ${theme.typography.B_PARAGRAPH_1}
  color:${theme.colors.grey};
`

export const Amount = styled.div`
  font-family: 'Open Sans';
  font-weight: 800;
  font-size: 56px;
  line-height: 112px;
  color: ${theme.colors.primary};
`
