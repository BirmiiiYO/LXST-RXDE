import { css } from 'styled-components'

import bigPlayer from 'assets/bigPlayer.svg'
import player from 'assets/player.svg'
import search from 'assets/search.svg'
import { TButtonType } from 'components/UI/Button/types'
import { EButtonType } from 'constants/buttonType'
import { theme } from 'styles/themes'

export const setButtonStyles = (type: TButtonType) => {
  switch (type) {
    case EButtonType.BORDER_WATCH:
      return css`
        ${theme.typography.B_HEADLINE_6}
        border-radius: ${theme.BORDER_RADIUS.S}px;
        border: 1px solid ${theme.colors.primary};
        box-shadow: ${theme.shadows.none};
        padding: 5px 82px;
        &::before {
          content: url(${bigPlayer});
          display: inline-block;
          padding-right: 8px;
          padding-top: 6px;
        }
      `
    case EButtonType.ICON:
      return css`
        border-radius: ${theme.BORDER_RADIUS.S}px;
        box-shadow: ${theme.shadows.none};
        padding: 10px 30px;
        border: none;
        &::before {
          content: url(${search});
          display: inline-block;
        }
      `
    case EButtonType.PRIMARY_WATCH:
      return css`
        ${theme.typography.SB_HEADLINE_7}
        border-radius: ${theme.BORDER_RADIUS.S}px;
        box-shadow: ${theme.shadows.none};
        border: none;
        padding: 3px 14px;
        &::before {
          content: url(${player});
          display: inline-block;
          padding-right: 8px;
          padding-top: 6px;
        }
        &:hover {
          box-shadow: ${theme.shadows.shadowButton};
        }
      `
    case EButtonType.ROUND:
      return css`
        position: relative;
        ${theme.typography.SB_HEADLINE_7}
        border-radius: ${theme.BORDER_RADIUS.CIRCLE}%;
        border: none;
        box-shadow: ${theme.shadows.none};
        padding: 48px 24px;
        &:before {
          border: 1px solid rgba(255, 255, 255, 0.4);
          border-radius: ${theme.BORDER_RADIUS.CIRCLE}%;
          content: ' ';
          position: absolute;
          z-index: 1;
          top: 7px;
          left: 7px;
          right: 7px;
          bottom: 8px;
        }
        &:disabled {
          box-shadow: ${theme.shadows.none};
        }
      `
    case EButtonType.ROUND_SMALL:
      return css`
        position: relative;
        ${theme.typography.SB_HEADLINE_8}
        border-radius: ${theme.BORDER_RADIUS.CIRCLE}%;
        border: none;
        box-shadow: ${theme.shadows.none};
        padding: 38px 17px;
        &:before {
          border: 1px solid rgba(255, 255, 255, 0.4);
          border-radius: ${theme.BORDER_RADIUS.CIRCLE}%;
          content: ' ';
          position: absolute;
          z-index: 1;
          top: 5px;
          left: 5px;
          right: 5px;
          bottom: 5px;
        }
        &:disabled {
          box-shadow: ${theme.shadows.none};
        }
      `
    case EButtonType.SMALL:
      return css`
        ${theme.typography.SB_HEADLINE_7}
        border-radius: ${theme.BORDER_RADIUS.S}px;
        border: none;
        box-shadow: ${theme.shadows.shadowButton};
        padding: 10px 52px;
        &:not([hover]):active {
          box-shadow: ${theme.shadows.none};
        }
        &:disabled {
          box-shadow: ${theme.shadows.none};
        }
      `
    case EButtonType.BIG_WATCH:
      return css`
        border-radius: 6px;
        border: none;
        ${theme.typography.B_HEADLINE_6}
        box-shadow:none;
        padding: 5px 25px;
        &::before {
          content: url(${bigPlayer});
          display: inline-block;
          padding-right: 8px;
          padding-top: 6px;
        }
      `
    case EButtonType.WATCH:
      return css`
        border-radius: 6px;
        border: none;
        ${theme.typography.SB_HEADLINE_7}
        box-shadow:none;
        padding: 3px 12px;
        &::before {
          content: url(${player});
          display: inline-block;
          padding-right: 8px;
          padding-top: 6px;
        }
      `
    // default primary
    default:
      return css`
        ${theme.typography.B_HEADLINE_6}
        border-radius: ${theme.BORDER_RADIUS.S}px;
        border: none;
        box-shadow: ${theme.shadows.shadowButton};
        padding: 15px 52px;
        &:not([hover]):active {
          box-shadow: ${theme.shadows.none};
        }
        &:disabled {
          box-shadow: ${theme.shadows.none};
        }
      `
  }
}
