const PATHS = require('./paths');
const rules = require('./rules');
const plugins = require('./plugins');
const externals = require('./externals');
const resolve = require('./resolve');


module.exports = () => {

    const devRender = {
        // devtool: "source-map",
        context: PATHS.src,
        entry: {
            app: "./app.js",
            html: "./index.html"
        },
        externals,
        output: {
            filename: "app.js",
            path: PATHS.compiled,
        },
        module: {loaders: rules({production: false, browser: false})},
        resolve,
        plugins: plugins({production: false, browser: false})
    };

    return devRender;
};