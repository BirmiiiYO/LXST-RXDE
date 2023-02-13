import styled from 'styled-components'

import { CENTER, SPACE_BETWEEN, theme } from 'styles/themes'

export const Content = styled.div`
  max-width: 1110px;
  ${SPACE_BETWEEN}
  padding:50px 0;
`
export const Info = styled.div`
  margin-right: 50px;
  max-width: 450px;
`
export const Cards = styled.ul`
  ${CENTER}
  flex-wrap: wrap;
  padding: 120px 0;
  & > * {
    &:nth-child(2n + 1) {
      margin-top: -100px;
    }
  }
`
