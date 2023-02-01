import { css } from 'styled-components'

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
      `
    case EButtonType.ROUND:
      return css`
        position: relative;
        ${theme.typography.SB_HEADLINE_7}
        border-radius: ${theme.BORDER_RADIUS.CIRCLE}%;
        border: none;
        box-shadow: ${theme.shadows.none};
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
    // default primary
    default:
      return css`
        ${theme.typography.B_HEADLINE_6}
        border-radius: ${theme.BORDER_RADIUS.S}px;
        border: none;
        box-shadow: ${theme.shadows.shadowButton};

        &:not([hover]):active {
          box-shadow: ${theme.shadows.none};
        }
        &:disabled {
          box-shadow: ${theme.shadows.none};
        }
      `
  }
}
