import styled from 'styled-components'

import { CENTER, SPACE_BETWEEN, theme } from 'styles/themes'

export const Container = styled.div`
  width: 100%;
  color: ${theme.colors.black};
  background: ${theme.colors.aliceBlue};
  ${CENTER}
`
export const Content = styled.div`
  max-width: 1110px;
  ${SPACE_BETWEEN}
  padding:50px 0;
`
export const Info = styled.div`
  margin-right: 50px;
`

export const Text = styled.div`
  ${theme.typography.R_PARAGRAPH_2}
  color:${theme.colors.grey};
  max-width: 540px;
`
export const Cards = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`
