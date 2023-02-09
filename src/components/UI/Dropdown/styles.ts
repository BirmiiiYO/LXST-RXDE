import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { COLUMN, theme } from 'styles/themes'

export const List = styled.ul`
  padding: 35px 20px;
  border-radius: 6px;
  z-index: 2;
  position: absolute;
  top: 30px;
  right: 0;
  max-width: 300px;
  ${COLUMN}
  background:${theme.colors.secondary}
`

export const Item = styled(Link)`
  width: 150px;
  ${theme.typography.SB_HEADLINE_7}
  color: ${theme.colors.white};
  padding: 5px;
  svg {
    margin-left: 5px;
    fill: ${theme.colors.white};
    stroke: ${theme.colors.white};
  }
  &:active {
    color: ${theme.colors.grey};
    svg {
      fill: ${theme.colors.grey};
      stroke: ${theme.colors.grey};
    }
  }
  &:hover {
    color: ${theme.colors.grey};
    svg {
      fill: ${theme.colors.grey};
      stroke: ${theme.colors.grey};
    }
  }
`
