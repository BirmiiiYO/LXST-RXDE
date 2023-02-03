import styled from 'styled-components'

import { SPACE_BETWEEN } from 'styles/themes'

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
