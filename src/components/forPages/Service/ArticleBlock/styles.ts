import styled from 'styled-components'

import { COLUMN, theme } from 'styles/themes'

export const MainContainer = styled.div`
  max-width: 650px;
  align-items: start;
  ${COLUMN}
`

export const Block = styled.div`
  margin: 30px 0;
`
export const Image = styled.img`
  max-width: 650px;
  margin-top: 30px;
`

export const ExtraBlock = styled.div`
  max-width: 200px;
  svg {
    fill: ${theme.colors.primary};
  }
`
