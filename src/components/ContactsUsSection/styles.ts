import styled from 'styled-components'

import { CENTER, theme } from 'styles/themes'

export const Content = styled.div`
  max-width: 540px;
  ${CENTER}
  flex-direction:column;
  margin: 100px 0;
`
export const Text = styled.div`
  padding: 0 30px;
  text-align: center;
  ${theme.typography.R_PARAGRAPH_2}
  color:${theme.colors.grey};
  margin: 30px 0;
`
