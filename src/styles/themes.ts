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
  fonts: {
    openSans: `'Open Sans', sans-serif`,
    manrope: `'Manrope', sans-serif`,
  },
  fontSizes: {
    XXS: 14,
    XS: 16,
    S: 20,
    M: 22,
    L: 30,
    XL: 38,
    XXL: 46,
  },
  fontWeight: {
    Regular: 400,
    Medium: 500,
    SemiBold: 600,
    Bold: 700,
    ExtraBold: 800,
  },
  shadows: {
    shadowButton: '0px 12px 30px rgba(24, 92, 255, 0.18);',
    shadowCard1: '0px 2px 20px 17px rgba(24, 92, 255, 0.04);',
    shadowCard2: '0px 12px 30px 17px rgba(24, 92, 255, 0.04);',
    shadowCard3: '0px 4px 12px rgba(12, 68, 204, 0.1);',
    shadowDropdown:
      '0px 2px 6px rgba(0, 43, 78, 0.15), 0px 1px 2px rgba(0, 43, 78, 0.3);',
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
