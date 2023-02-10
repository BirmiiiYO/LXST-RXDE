import styled from 'styled-components'

import { CENTER } from 'styles/themes'

export const TeamCards = styled.div`
  padding: 120px 0 120px 0;
  ${CENTER}
  flex-wrap: wrap;
  & > * {
    margin: 10px;

    @media (min-width: 1110px) {
      &:nth-child(3n + 2) {
        margin-top: -140px;
      }
    }
    @media (min-width: 1110px) {
      padding: 240px 0 120px 0;
    }
  }
`
