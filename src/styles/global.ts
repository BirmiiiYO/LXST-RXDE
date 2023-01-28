import { createGlobalStyle } from 'styled-components'

import { theme } from 'styles/themes'

export default createGlobalStyle`
  body{
    margin:0 auto;
    max-width:1920px;
  }
  * {
    padding: ${theme.RANGE.NONE};
    outline: none;
    box-sizing: border-box;
    text-decoration: none;
  }
`
