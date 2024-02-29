import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';

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
    theme: ButtonTheme.CLEAR,
  },
};

export const Outline: Story = {
  args: {
    // eslint-disable-next-line i18next/no-literal-string
    children: <p>World</p>,
    theme: ButtonTheme.OUTLINE,
  },
};

export const OutlineSizeL: Story = {
  args: {
    // eslint-disable-next-line i18next/no-literal-string
    children: <p>World</p>,
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
  },
};

export const OutlineSizeXL: Story = {
  args: {
    // eslint-disable-next-line i18next/no-literal-string
    children: <p>World</p>,
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
  },
};

export const OutlineDark: Story = {
  args: {
    // eslint-disable-next-line i18next/no-literal-string
    children: <p>World</p>,
    theme: ButtonTheme.OUTLINE,
  },
  decorators: [
    (Story) => (
      <div className={`app ${Theme.DARK}`}>
        <Story />
      </div>
    ),
  ],
};

export const Background: Story = {
  args: {
    // eslint-disable-next-line i18next/no-literal-string
    children: <p>World</p>,
    theme: ButtonTheme.BACKGROUND,
  },
};

export const BackgroundInverted: Story = {
  args: {
    // eslint-disable-next-line i18next/no-literal-string
    children: <p>World</p>,
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
};

export const SquareM: Story = {
  args: {
    // eslint-disable-next-line i18next/no-literal-string
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.M,
  },
};

export const SquareL: Story = {
  args: {
    // eslint-disable-next-line i18next/no-literal-string
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
  },
};

export const SquareXL: Story = {
  args: {
    // eslint-disable-next-line i18next/no-literal-string
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
  },
};
