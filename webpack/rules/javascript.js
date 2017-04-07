const PATHS = require('../paths');

module.exports = () => {

    const createPresets = () => {
        const presets = ['es2015', 'react', 'stage-2'];
        return presets;
    };
    const presets = createPresets();

    const plugins = ['transform-decorators-legacy'];

    return {
        test: /\.js$|\.jsx$/,
        loader: 'babel-loader',
        query: {
            presets,
            plugins
        },
        exclude: PATHS.modules
    };
};

