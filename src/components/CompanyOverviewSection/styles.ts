import styled from 'styled-components'

import { CENTER, COLUMN, SPACE_BETWEEN, theme } from 'styles/themes'

export const Container = styled.div`
  ${CENTER}
  background:${theme.colors.primary};
  color: ${theme.colors.white};
`
export const Content = styled.div`
  width: 1110px;
  ${SPACE_BETWEEN}
  padding:70px 0;
`

export const Block = styled.div`
  ${COLUMN}
  &:not(:last-child) {
    padding: 0 63px;
    border-right: 1px solid rgba(241, 246, 250, 0.2);
  }
`

export const Title = styled.div`
  ${theme.typography.B_PARAGRAPH_1}
`

export const Amount = styled.div`
  font-family: 'Open Sans';
  font-weight: 800;
  font-size: 56px;
  line-height: 112px;
`
