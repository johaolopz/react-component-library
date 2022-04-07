import { createRoot } from 'react-dom/client'
import React from 'react'
import './assets/styles/index.css'
import App from './pages/App'
import { ChakraProvider } from '@chakra-ui/react'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to find the root element')
const root = createRoot(rootElement)

root.render(
    <React.StrictMode>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </React.StrictMode>
)
