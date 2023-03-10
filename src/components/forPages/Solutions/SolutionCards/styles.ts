import styled from 'styled-components'

import { devices } from 'styles/breakpoints'
import { CENTER } from 'styles/themes'

export const SolutionsCards = styled.div`
  padding: 120px 0;
  ${CENTER}
  flex-wrap: wrap;
  & > * {
    margin: 10px;
    @media ${devices.tablet} {
      border-radius: 6px;
      width: 80vw;
      margin: 5px 0;
    }
  }
`
