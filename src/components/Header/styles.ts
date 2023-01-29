import styled from 'styled-components'

import { CENTER, SPACE_BETWEEN, theme } from 'styles/themes'

export const Container = styled.div`
  ${CENTER}
  width:100%;
  background: ${theme.colors.secondary};
`

export const Row = styled.div`
  height: 146px;
  max-width: 1110px;
  ${SPACE_BETWEEN}
`

export const Logo = styled.img`
  width: 146px;
  height: 41px;
`
