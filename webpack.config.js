const webpack = require('webpack');
const ignore = new webpack.IgnorePlugin(/\.svg$/);
const path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: {
        app: [
            './src/app.js',
            'webpack-dev-server/client?http://localhost:8081',
            'webpack/hot/only-dev-server',
        ],
    },
    output: {
        publicPath: 'http://localhost:8081/',
        filename: '/js/[name].js',
    },
    historyApiFallback: true,
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel?' + JSON.stringify({
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['transform-decorators-legacy']
                })],
                exclude: /node_modules/
            },
            {test: /\.scss$/, loaders: ['style', 'css', 'postcss']},
            {test: /\.css$/, loaders: ['style', 'css', 'postcss']},
        ],
    },
    plugins: [ignore],
    devServer: {
        host: 'localhost',
        port: 8081,
        proxy: {
            '/api/*': 'http://localhost:8081',
        },
    },
};
