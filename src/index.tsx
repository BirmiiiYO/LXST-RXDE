import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  BrowserRouter,
  Route,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import App from './App'
import GlobalStyle from './styles/global'

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)
root.render(
  <BrowserRouter>
    <GlobalStyle />
    <App />
  </BrowserRouter>,
)
