import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { PageError } from './PageError';

const meta = {
  title: 'widgets/PageError',
  component: PageError,
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [
    (story) => <div className={`app ${Theme.LIGHT}`}>{story()}</div>,
  ],
};

export const Dark: Story = {
  decorators: [(story) => <div className={`app ${Theme.DARK}`}>{story()}</div>],
};
