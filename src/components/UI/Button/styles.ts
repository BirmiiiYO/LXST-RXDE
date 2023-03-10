import styled, { css } from 'styled-components'

import { theme } from 'styles/themes'
import { getTypography } from 'utils/getTypography'
import { setButtonStyles } from 'utils/setButtonStyles'

import { IButtonStyleProps } from './types'

export const StyledButton = styled.button<IButtonStyleProps>`
  ${({ typography }) => typography && getTypography(typography)}
  display: flex;
  ${({ primary }) =>
    primary
      ? css`
          background: ${theme.colors.primary};
          color: ${theme.colors.white};
          box-shadow: ${theme.shadows.shadowButton};
          border: none;
          &:hover {
            background: #467dff;
          }
          &:active {
            box-shadow: none;
          }
          &:disabled {
            background: ${theme.colors.grey};
          }
        `
      : css`
          background: ${theme.colors.white};
          color: ${theme.colors.black};
          box-shadow: none;
          &:hover {
            color: ${theme.colors.primary};
            svg {
              fill: ${theme.colors.primary};
              stroke: ${theme.colors.primary};
            }
          }
          &:active {
            color: ${theme.colors.primary};
            box-shadow: none;
            svg {
              fill: ${theme.colors.primary};
              stroke: ${theme.colors.primary};
            }
          }
          &:disabled {
            color: ${theme.colors.grey};
          }
        `}
  align-items: center;
  cursor: pointer;
  padding: ${({ padding }) => padding};
  ${({ buttonType }) => buttonType && setButtonStyles(buttonType)}
  svg {
    margin-right: 10px;
    fill: ${({ primary }) =>
      primary ? theme.colors.white : theme.colors.black};
    stroke: ${({ primary }) =>
      primary ? theme.colors.white : theme.colors.black};
  }
`
