import styled from 'styled-components'

import { theme } from 'styles/themes'

import { ILinkStyleProps } from './types'

export const CustomLink = styled.button<ILinkStyleProps>`
  ${theme.typography.SB_HEADLINE_7}
  color: ${theme.colors.primary};
  border: none;
  display: flex;
  align-items: center;
  background: inherit;
  padding: 5px;
  svg {
    margin-left: 4px;
    fill: ${theme.colors.primary};
    stroke: ${theme.colors.primary};
  }
  &:hover {
    color: ${theme.colors.black};
    svg {
      fill: ${theme.colors.black};
      stroke: ${theme.colors.black};
    }
  &:active {
    color: ${theme.colors.black};
    svg {
      fill: ${theme.colors.black};
      stroke: ${theme.colors.black};
    }
  &:disabled {
    color: ${theme.colors.grey};
    svg {
      fill: ${theme.colors.grey};
      stroke: ${theme.colors.grey};
    }
  }
`
