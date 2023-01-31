import styled, { css } from 'styled-components'

import { theme } from 'styles/themes'

import right from './right.svg'
import { ILinkStyleProps } from './types'

export const CustomLink = styled.button<ILinkStyleProps>`
  ${theme.typography.SB_HEADLINE_7}
  background:${theme.colors.white};
  color: ${theme.colors.primary};
  border: none;
  padding: 5px;
  ${({ icon }) =>
    icon
      ? `
          &::after {
            content: url(${right});
            padding-left: 10px;
          }
        `
      : ''}
  &:active:hover {
    color: ${theme.colors.black};
  }
  &:hover {
    color: ${theme.colors.black};
  }
  &:disabled {
    color: ${theme.colors.grey};
  }
`
