import styled from 'styled-components'

import { COLUMN, SPACE_BETWEEN } from 'styles/themes'

export const Container = styled.div`
  width: 1110px;
  margin-bottom: 120px;
  ${COLUMN}
  @media (max-width: 1110px) {
    width: 900px;
  }
`

export const SpaceBetween = styled.div`
  margin-bottom: 50px;
  width: 100%;
  ${SPACE_BETWEEN};
`

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`

export const Controls = styled.div`
  width: 240px;
  ${SPACE_BETWEEN}
`
