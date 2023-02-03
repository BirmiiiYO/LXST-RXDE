import styled from 'styled-components'

import { CENTER, COLUMN, theme } from 'styles/themes'

export const AboutContainer = styled.div`
  ${CENTER}
  flex-direction:column;
`

export const TitleContainer = styled.div`
  background: ${theme.colors.aliceBlue};
  width: 100%;
  ${CENTER}
  flex-direction:column;
  padding: 100px 0 160px 0;
`

export const Image = styled.img``
