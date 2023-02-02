import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import GlobalStyle from '../src/styles/global'

import { setupStore } from 'store/index'
import { Provider } from 'react-redux'

import '../src/i18n'

const store = setupStore()

export const Decorator = story => (
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      {story()}
    </BrowserRouter>
  </Provider>
)
