import styled from 'styled-components'

import { CENTER } from 'styles/themes'

export const Cards = styled.ul`
  max-width: 1110px;
  ${CENTER}
  flex-wrap: wrap;
  & > * {
    margin: 40px;
  }
`
