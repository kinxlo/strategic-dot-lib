import type { Preview } from '@storybook/react'
import '../src/lib/tailwind/theme.css'

const preview: Preview = {
  tags: ['autodocs', 'autodocs'],
  parameters: {
    // actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
