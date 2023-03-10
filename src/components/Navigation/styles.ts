import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { SPACE_BETWEEN, theme } from 'styles/themes'

import { IStyleLinkProps } from './types'

export const Nav = styled.ul`
  ${SPACE_BETWEEN};
`

export const CustomLink = styled(Link)<IStyleLinkProps>`
  color: ${theme.colors.white};
  ${theme.typography.SB_HEADLINE_7}
  ${({ active }) => (active ? `border-bottom: 1px solid white` : '')};
  padding: 5px 10px;
`
