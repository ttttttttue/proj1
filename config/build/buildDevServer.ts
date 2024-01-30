import { BuildOptions } from './types/config';
import WebpackDevServer from 'webpack-dev-server';

export function buildDevServer(
  options: BuildOptions,
): WebpackDevServer.Configuration {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
    hot: true,
  };
}
