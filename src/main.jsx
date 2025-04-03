import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from './styles/global-styles.js'
import { theme } from './styles/theme.js'
import Home from './templates/Home/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  </StrictMode>
)
