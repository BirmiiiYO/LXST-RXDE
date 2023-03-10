import { css } from 'styled-components'

import { TButtonType } from 'components/UI/Button/types'
import { EButtonType } from 'constants/buttonType'
import { theme } from 'styles/themes'

export const setButtonStyles = (type: TButtonType) => {
  switch (type) {
    case EButtonType.BORDER_WATCH:
      return css`
        box-shadow: none;
        border: none;
      `
    case EButtonType.ROUND:
      return css`
        position: relative;
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
    default:
      return css`
        border-radius: ${theme.BORDER_RADIUS.S}px;
        border: none;
      `
  }
}
