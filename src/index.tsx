import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { setupStore } from 'store/index'

import App from './App'
import GlobalStyle from './styles/global'

import './i18n'

const store = setupStore()

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </Provider>,
)
