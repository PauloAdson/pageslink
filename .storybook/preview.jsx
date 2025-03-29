import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../src/styles/global-styles'
import { theme } from '../src/styles/theme'
// import { fn } from '@storybook/test'

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: {
      handles: ['click', 'submit'], // Explicit action handlers
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: theme.colors.white,
        },
        {
          name: 'dark',
          value: theme.colors.primaryColor,
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export const decorators = [
  // eslint-disable-next-line no-unused-vars
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
]

export default preview
