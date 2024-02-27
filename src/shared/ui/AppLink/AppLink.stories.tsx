import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { MemoryRouter } from 'react-router-dom';
import { AppLinkTheme } from 'widgets/Navbar/ui/Navbar';
import { AppLink } from './AppLink';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  args: {
    to: '/',
  },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary',
    theme: AppLinkTheme.PRIMARY,
  },
};
Primary.decorators = [
  (story) => (
    <div className={`app ${Theme.LIGHT}`}>
      <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    </div>
  ),
];

export const PrimaryDark: Story = {
  args: {
    children: 'Primary',
    theme: AppLinkTheme.PRIMARY,
  },
};
PrimaryDark.decorators = [
  (story) => (
    <div className={`app ${Theme.DARK}`}>
      <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    </div>
  ),
];

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    theme: AppLinkTheme.SECONDARY,
  },
};
Secondary.decorators = [
  (story) => (
    <div className={`app ${Theme.LIGHT}`}>
      <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    </div>
  ),
];

export const SecondaryDark: Story = {
  args: {
    children: 'Secondary',
    theme: AppLinkTheme.SECONDARY,
  },
};
SecondaryDark.decorators = [
  (story) => (
    <div className={`app ${Theme.DARK}`}>
      <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    </div>
  ),
];

export const Red: Story = {
  args: {
    children: 'Red',
    theme: AppLinkTheme.RED,
  },
};
Red.decorators = [
  (story) => (
    <div className={`app ${Theme.LIGHT}`}>
      <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    </div>
  ),
];

export const RedDark: Story = {
  args: {
    children: 'Red',
    theme: AppLinkTheme.RED,
  },
};
RedDark.decorators = [
  (story) => (
    <div className={`app ${Theme.DARK}`}>
      <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    </div>
  ),
];
