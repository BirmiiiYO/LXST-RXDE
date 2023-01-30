import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import GlobalStyle from '../src/styles/global'

export const Decorator = story => (
  <BrowserRouter>
    <GlobalStyle />
    {story()}
  </BrowserRouter>
)
