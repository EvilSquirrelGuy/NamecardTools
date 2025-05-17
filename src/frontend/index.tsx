import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from '@frontend/App'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'

const container = document.getElementById('root')!
const root = createRoot(container)
root.render(
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
)