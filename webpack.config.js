const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const styles = require('./webpack/styles');
const uglify = require('./webpack/uglify');
const images = require('./webpack/images');
const html = require('./webpack/html');
const json = require('./webpack/json');
const babel = require('./webpack/babel');

const common = (PATHS,isDebug) => merge([
    {
        entry: {
            main: ['babel-polyfill', PATHS.source+'/index.js']
        },
        output: {
            path: PATHS.build,
            filename: "bundle.js"
        },
        devtool: 'source-map',
        devServer: {
            compress: true,
            port: 5000,
            hot: true,
            https: false
        },
        resolve: {
            alias: {
                styles: PATHS.build
            }
        },
        plugins: [
            new CleanWebpackPlugin(
                [PATHS.build],
                {verbose: true}
            ),
            new webpack.DefinePlugin({
                _DEBUG: isDebug
            }),
            new webpack.HotModuleReplacementPlugin()
        ]
    },
    html(PATHS),
    images(),
    json(),
]);

module.exports = (env = {}) => {
    const isDebug = !env.release;
    const PATHS = {
        source: path.join(__dirname, 'src'),
        build: path.join(__dirname, 'build')
    };

    return merge([
        common(PATHS),
        styles(PATHS,isDebug),
        babel(PATHS,isDebug)
    ]);

};