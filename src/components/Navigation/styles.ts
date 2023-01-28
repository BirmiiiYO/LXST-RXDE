import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Down from 'assets/down.svg'
import { devices } from 'styles/breakpoints'
import { SPACE_BETWEEN, theme } from 'styles/themes'

import { IStyleLinkProps } from './types'

export const Nav = styled.ul`
  width: 511px;
  ${SPACE_BETWEEN};
  @media ${devices.laptop} {
    width: 400px;
  }
`

export const CustomLink = styled(Link)<IStyleLinkProps>`
  color: ${theme.colors.white};
  ${theme.typography.SB_HEADLINE_7}
  ${({ active }) => (active ? `border-bottom: 1px solid white` : '')};
  &:nth-child(3) {
    &::after {
      content: url(${Down});
      padding-left: 5px;
    }
  }
`
