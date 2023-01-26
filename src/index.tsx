import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'
import GlobalStyle from './styles/global'

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)
root.render(
  <>
    <GlobalStyle />
    <App />
  </>,
)
