import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button, ThemeButton } from './Button';
import { Theme } from '../../../app/providers/ThemeProvider';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: <p>Hello</p>,
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Clear: Story = {
  args: {
    children: <p>Hello</p>,
    theme: ThemeButton.CLEAR,
  },
};

export const Outline: Story = {
  args: {
    children: <p>World</p>,
    theme: ThemeButton.OUTLINE,
  },
};

export const OutlineDark: Story = {
  args: {
    children: <p>World</p>,
    theme: ThemeButton.OUTLINE,
  },
};
OutlineDark.decorators = [
  (Story) => (
    <div className={`app ${Theme.DARK}`}>
      <Story />
    </div>
  ),
];
