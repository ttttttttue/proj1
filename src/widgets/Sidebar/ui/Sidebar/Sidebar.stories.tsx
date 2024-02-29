import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { Sidebar } from './Sidebar';

const meta = {
  title: 'widgets/Sidebar',
  component: Sidebar,
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [
    (story) => (
      <div className={`app ${Theme.LIGHT}`}>
        <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
      </div>
    ),
  ],
};

export const Dark: Story = {
  decorators: [
    (story) => (
      <div className={`app ${Theme.DARK}`}>
        <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
      </div>
    ),
  ],
};
