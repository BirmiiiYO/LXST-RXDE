import styled from 'styled-components'

import { SPACE_BETWEEN, theme } from 'styles/themes'

export const CustomSideBar = styled.div`
  width: 400px;
  ${SPACE_BETWEEN}
  ${theme.typography.R_PARAGRAPH_1}
  padding:20px 0;
  border-bottom: 1px solid ${theme.colors.grey};
  &:hover {
    color: ${theme.colors.primary};
  }
  &:disabled {
    color: ${theme.colors.grey};
  }
`

export const Icon = styled.img`
  padding-left: 10px;
`
