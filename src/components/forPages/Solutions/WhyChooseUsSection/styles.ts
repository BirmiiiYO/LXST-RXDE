import styled from 'styled-components'

import { theme } from 'styles/themes'

export const TextBlock = styled.div`
  width: 50%;
  margin: 50px 0 0 46px;
`
export const Image = styled.img`
  width: 50%;
`

export const Benefit = styled.div`
  margin-top: 50px;
  svg {
    stroke: ${theme.colors.primary};
    margin-right: 5px;
  }
`
