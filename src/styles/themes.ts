import { css } from 'styled-components'

const theme = {
  colors: {
    primary: '#185CFF',
    secondary: '#002B4E',
    tertiary: '#F0F9FF',
    helperBlue1: '#194060',
    helperBlue2: '#607D94',
    helperBlue3: '#C9DCEC',
    black: '#292D33',
    grey: '#9497A1',
    background: '#F1F6FA',
    redError: '#C14040',
    white: '#FFFFFF',
  },
  typography: {
    EB_HEADLINE_1: css`
      font-family: 'Manrope', sans-serif;
      font-weight: 800;
      font-size: 46px;
      line-height: 60px;
    `,
    EX_HEADLINE_2: css`
      font-family: 'Manrope';
      font-weight: 800;
      font-size: 38px;
      line-height: 56px;
    `,
    EX_HEADLINE_3: css`
      font-family: 'Manrope';
      font-weight: 800;
      font-size: 30px;
      line-height: 40px;
    `,
    B_HEADLINE_4: css`
      font-family: 'Manrope';
      font-weight: 700;
      font-size: 22px;
      line-height: 33px;
    `,
    B_HEADLINE_5: css`
      font-family: 'Manrope';
      font-weight: 700;
      font-size: 20px;
      line-height: 30px;
    `,
    B_HEADLINE_6: css`
      font-family: 'Manrope';
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
    `,
    SB_HEADLINE_7: css`
      font-family: 'Manrope', sans-serif;
      font-weight: 600;
      font-size: 14px;
      line-height: 24px;
    `,
    M_HEADLINE_7: css`
      font-family: 'Manrope';
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
    `,
    R_PARAGRAPH_1: css`
      font-family: 'Open Sans';
      font-weight: 400;
      font-size: 20px;
      line-height: 33px;
    `,
    R_PARAGRAPH_2: css`
      font-family: 'Open Sans', sans-serif;
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
    `,
    B_PARAGRAPH_1: css`
      font-family: 'Open Sans';
      font-weight: 700;
      font-size: 16px;
      line-height: 28px;
    `,
    R_PARAGRAPH_3: css`
      font-family: 'Open Sans';
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
    `,
    SM_PARAGRAPH_3: css`
      font-family: 'Open Sans';
      font-weight: 600;
      font-size: 14px;
      line-height: 24px;
    `,
  },
  shadows: {
    shadowButton: '0px 12px 30px rgba(24, 92, 255, 0.18);',
    shadowCard1: '0px 2px 20px 17px rgba(24, 92, 255, 0.04);',
    shadowCard2: '0px 12px 30px 17px rgba(24, 92, 255, 0.04);',
    shadowCard3: '0px 4px 12px rgba(12, 68, 204, 0.1);',
    shadowDropdown:
      '0px 2px 6px rgba(0, 43, 78, 0.15), 0px 1px 2px rgba(0, 43, 78, 0.3);',
    shadowNone: 'none',
  },
  BORDER_RADIUS: {
    XS: 4,
    S: 6,
    M: 8,
    L: 12,
    CIRCLE: 50,
  },
  RANGE: {
    NONE: 0,
    XS: 4,
    S: 8,
    M: 16,
    L: 24,
    XL: 48,
  },
}

const CENTER = `
  display: flex;
  justify-content: center;
  align-items:center;
  `
const SPACE_BETWEEN = `
  display: flex;
  justify-content: space-between;
  align-items:center;
  `
const COLUMN = `
  display: flex;
  flex-direction:column;
`

export { CENTER, COLUMN, SPACE_BETWEEN, theme }