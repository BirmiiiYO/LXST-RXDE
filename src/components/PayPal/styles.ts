import styled from 'styled-components'

import { COLUMN, theme } from 'styles/themes'

export const PayPalContainer = styled.div`
  width: 300px;
  height: 300px;
  padding: 25px;
  ${COLUMN}
  align-items:center;
  border-radius: 6px;
  background: ${theme.colors.aliceBlue};
`
