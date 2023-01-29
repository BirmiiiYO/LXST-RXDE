import { css } from 'styled-components'

import bigPlayer from 'assets/bigPlayer.svg'
import player from 'assets/player.svg'
import { TButtonType } from 'components/Button/types'
import { EButtonType } from 'constants/buttonType'
import { theme } from 'styles/themes'

export const setButtonStyles = (type: TButtonType) => {
  switch (type) {
    case EButtonType.BORDER_WATCH:
      return css`
        ${theme.typography.B_HEADLINE_6}
        color: ${theme.colors.primary};
        border-radius: ${theme.BORDER_RADIUS.S}px;
        border: 1px solid ${theme.colors.primary};
        box-shadow: ${theme.shadows.none};
        padding: 11px 81px;
        &:active {
          color: ${theme.colors.hover};
          border-color: ${theme.colors.hover};
        }
        &:disabled {
          color: ${theme.colors.grey};
          border-color: ${theme.colors.grey};
        }
      `
    case EButtonType.ICON:
      return css``
    case EButtonType.PRIMARY_WATCH:
      return css`
        ${theme.typography.SB_HEADLINE_7}
        color: ${theme.colors.white};
        background: ${theme.colors.primary};
        border-radius: ${theme.BORDER_RADIUS.S}px;
        box-shadow: ${theme.shadows.none};
        border: none;
        display: flex;
        align-items: center;
        padding: 3px 14px;
        &::before {
          content: url(${player});
          display: inline-block;
          padding-right: 8px;
          padding-top: 6px;
        }
        &:hover {
          background: ${theme.colors.hover};
          box-shadow: ${theme.shadows.shadowButton};
        }
        &:disabled {
          background: ${theme.colors.grey};
        }
      `
    case EButtonType.ROUND:
      return css``
    case EButtonType.ROUND_SMALL:
      return css``
    case EButtonType.SMALL:
      return css``
    case EButtonType.BIG_WATCH:
      return css`
        border-radius: 6px;
        color: ${theme.colors.black};
        background: ${theme.colors.white};
        border: none;
        ${theme.typography.B_HEADLINE_6}
        box-shadow:none;
        padding: 5px 25px;
        display: flex;
        align-items: center;
        &::before {
          content: url(${bigPlayer});
          display: inline-block;
          padding-right: 8px;
          padding-top: 6px;
        }
        &:hover {
          color: ${theme.colors.primary};
        }
        &:active {
          color: ${theme.colors.primary};
        }
        &:disabled {
          color: ${theme.colors.grey};
        }
      `
    case EButtonType.WATCH:
      return css`
        border-radius: 6px;
        color: ${theme.colors.black};
        background: ${theme.colors.white};
        border: none;
        ${theme.typography.SB_HEADLINE_7}
        box-shadow:none;
        padding: 3px 14px;
        display: flex;
        align-items: center;
        &::before {
          content: url(${player});
          display: inline-block;
          padding-right: 8px;
          padding-top: 6px;
        }
        &:hover {
          color: ${theme.colors.primary};
        }
        &:active {
          color: ${theme.colors.primary};
        }
        &:disabled {
          color: ${theme.colors.grey};
        }
      `
    // default primary
    default:
      return css`
        ${theme.typography.B_HEADLINE_6}
        color: ${theme.colors.white};
        background: ${theme.colors.primary};
        border-radius: ${theme.BORDER_RADIUS.S}px;
        border: none;
        box-shadow: ${theme.shadows.shadowButton};
        padding: 15px 52px;
        &:hover {
          background: ${theme.colors.hover};
        }
        &:not([hover]):active {
          box-shadow: ${theme.shadows.none};
        }
        &:disabled {
          background: ${theme.colors.grey};
          box-shadow: ${theme.shadows.none};
        }
      `
  }
}
