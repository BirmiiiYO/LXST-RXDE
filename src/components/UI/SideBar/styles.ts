import styled from 'styled-components'

import { SPACE_BETWEEN, theme } from 'styles/themes'

import { ISideBarStyleProps } from './types'

export const CustomSideBar = styled.div<ISideBarStyleProps>`
  ${SPACE_BETWEEN}
  width:100%;
  ${theme.typography.R_PARAGRAPH_1}
  color:${({ color }) => color};
  padding: 20px 0;
  border-bottom: 1px solid ${theme.colors.grey};
  &:hover {
    color: ${theme.colors.primary};
    svg {
      stroke: ${theme.colors.primary};
    }
  }
  &:disabled {
    color: ${theme.colors.grey};
    svg {
      stroke: ${theme.colors.grey};
    }
  }
  svg {
    stroke: ${theme.colors.white};
  }
`
