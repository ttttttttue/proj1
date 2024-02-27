import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { MemoryRouter } from 'react-router-dom';
import { Navbar } from './Navbar';

const meta = {
  title: 'widgets/Navbar',
  component: Navbar,
} satisfies Meta<typeof Navbar>;

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
