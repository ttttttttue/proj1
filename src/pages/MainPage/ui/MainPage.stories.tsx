import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import MainPage from './MainPage';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'pages/MainPage',
  component: MainPage,
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};
Light.decorators = [
  (story) => <div className={`app ${Theme.LIGHT}`}>{story()}</div>,
];

export const Dark: Story = {
  args: {},
};
Dark.decorators = [
  (story) => <div className={`app ${Theme.DARK}`}>{story()}</div>,
];
