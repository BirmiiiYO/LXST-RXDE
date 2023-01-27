import { createGlobalStyle } from 'styled-components'

import { theme } from 'styles/themes'

export default createGlobalStyle`
  * {
    width:1920px;
    margin:0 auto;
    padding: ${theme.RANGE.NONE};
    outline: none;
    box-sizing: border-box;
    text-decoration: none;
  }
`
