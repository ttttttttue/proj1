import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    'storybook-addon-react-router-v6',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../../public'],
  webpackFinal: async (config) => {
    const updateConfig = { ...config };
    if (updateConfig.resolve !== undefined) {
      updateConfig.resolve.modules = [
        ...(updateConfig.resolve.modules || []),
        path.resolve(__dirname, '../src'),
      ];
    }

    return updateConfig;
  },
};
export default config;
