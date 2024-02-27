import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    // eslint-disable-next-line i18next/no-literal-string
    children: <p>Hello</p>,
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Clear: Story = {
  args: {
    // eslint-disable-next-line i18next/no-literal-string
    children: <p>Hello</p>,
    theme: ThemeButton.CLEAR,
  },
};

export const Outline: Story = {
  args: {
    // eslint-disable-next-line i18next/no-literal-string
    children: <p>World</p>,
    theme: ThemeButton.OUTLINE,
  },
};

export const OutlineDark: Story = {
  args: {
    // eslint-disable-next-line i18next/no-literal-string
    children: <p>World</p>,
    theme: ThemeButton.OUTLINE,
  },
  decorators: [
    (Story) => (
      <div className={`app ${Theme.DARK}`}>
        <Story />
      </div>
    ),
  ],
};
