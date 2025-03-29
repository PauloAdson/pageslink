import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import Home from './templates/App/index.jsx'
import { GlobalStyles } from './styles/global-styles.js'
import { theme } from './styles/theme.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  </StrictMode>
)
