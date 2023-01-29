import styled from 'styled-components'

import { CENTER, SPACE_BETWEEN, theme } from 'styles/themes'

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

export const Block = styled.div``

export const Title = styled.div``

export const Amount = styled.div``
