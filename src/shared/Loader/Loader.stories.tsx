import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { Loader } from './Loader';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/Loader',
  component: Loader,
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {},
};
Normal.decorators = [
  (story) => <div className={`app ${Theme.LIGHT}`}>{story()}</div>,
];

export const Dark: Story = {
  args: {},
};
Dark.decorators = [
  (story) => <div className={`app ${Theme.DARK}`}>{story()}</div>,
];
