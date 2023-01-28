import { css } from 'styled-components'

import watchSvg from 'assets/Vector.svg'
import { TButtonType } from 'components/Button/types'
import { EButtonType } from 'constants/buttonType'
import { theme } from 'styles/themes'

export const setButtonStyles = (type: TButtonType) => {
  switch (type) {
    case EButtonType.BORDER_WATCH:
      return css``
    case EButtonType.ICON:
      return css`
        padding: 18px 33px;
        border-radius: 6px;
        border: none;
        background: blue;
        color: white;
        &:active {
          background: #467dff;
        }
        &:disabled {
          background: grey;
        }
      `
    case EButtonType.PRIMARY_WATCH:
      return css`
        color: white;
        background: blue;
        border-radius: 6px;
        border: none;
        ${theme.typography.SB_HEADLINE_7}
        display: flex;
        align-items: center;
        padding: 4px 15px;
        &::before {
          content: url(${watchSvg});
          padding-right: 10px;
          padding-top: 8px;
        }
      `
    case EButtonType.ROUND:
      return css``
    case EButtonType.ROUND_SMALL:
      return css``
    case EButtonType.SMALL:
      return css``
    case EButtonType.SMALL_WATCH:
      return css``
    case EButtonType.WATCH:
      return css`
        border-radius: 6px;
        background: white;
        border: none;
        ${theme.typography.SB_HEADLINE_7}
        box-shadow:none;
        padding: 4px 15px;
        display: flex;
        align-items: center;
        &::before {
          content: url(${watchSvg});
          background: white;
          margin-right: 10px;
          padding-top: 8px;
        }
        &:hover {
          color: blue;
        }
        &:active {
          color: blue;
        }
        &:disabled {
          color: grey;
        }
      `
    // default primary
    default:
      return css`
        color: white;
        background: blue;
        border-radius: 6px;
        border: none;
        box-shadow: 0px 12px 30px rgba(24, 92, 255, 0.18);
        padding: 15px 52px;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        &:hover {
          background: #467dff;
        }
        &:not([hover]):active {
          box-shadow: none;
        }
        &:disabled {
          background: grey;
          box-shadow: none;
        }
      `
  }
}
