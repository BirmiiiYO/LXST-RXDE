import styled from 'styled-components'

import { devices } from 'styles/breakpoints'
import { CENTER, SPACE_BETWEEN } from 'styles/themes'

export const Content = styled.div`
  max-width: 1110px;
  ${SPACE_BETWEEN}
  padding:50px 0;
`
export const Info = styled.div`
  max-width: 300px;
`
export const Cards = styled.ul`
  ${CENTER}
  width:1000px;
  margin-left: 50px;
  flex-wrap: wrap;

  padding: 120px 0;
  & > * {
    &:nth-child(2n + 1) {
      margin-top: -100px;
      @media ${devices.content} {
        margin-top: 0;
      }
    }
  }
  @media ${devices.content} {
    width: 100%;
    grid-row: auto;
    padding: 5px;
    overflow-x: scroll;
    white-space: nowrap;
  }
`
