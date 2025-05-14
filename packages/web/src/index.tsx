import React from 'react'
import { createRoot } from 'react-dom/client'

const App = () => {
  return (
    <main>
      <h1>furina is carrying this frontend fr</h1>
    </main>
  )
}

const container = document.getElementById('root')!
const root = createRoot(container)
root.render(<App />)

