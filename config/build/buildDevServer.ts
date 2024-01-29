import WebpackDevServer from 'webpack-dev-server';
import { BuildOptions } from './types/config';

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
