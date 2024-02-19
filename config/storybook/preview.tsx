import React from 'react';
import type { Preview } from '@storybook/react';
import { Theme } from '../../src/app/providers/ThemeProvider';
import '../../src/app/styles/index.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <div className={`app ${Theme.LIGHT}`}>
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
