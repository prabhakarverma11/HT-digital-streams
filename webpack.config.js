const webpack = require('webpack');
const ignore = new webpack.IgnorePlugin(/\.svg$/);
const path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: {
        app: [
            './src/app.js',
            // 'webpack-dev-server/client?http://localhost:8081',
            // 'webpack/hot/only-dev-server',
        ],
    },
    output: {
        publicPath: 'http://localhost:8081/',
        filename: './js/[name].js',
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015','react','stage-2'],
                    plugins: ['transform-decorators-legacy']
                },
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'postcss']
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader', 'postcss']
            },
        ],
    },
    plugins: [ignore],
    devServer: {
        host: 'localhost',
        port: 8081,
        contentBase: './',
        hot: true,
        historyApiFallback: true,
        // proxy: {
        //     '/api/*': 'http://localhost:8081',
        // },
    },
};
