const path = require('path');

/*
 * __dirname is changed after webpack-ed to another directory
 * so process.cwd() is used instead to determine the correct base directory
 * Read more: https://nodejs.org/api/process.html#process_process_cwd
 */
const CURRENT_WORKING_DIR = process.cwd();

module.exports = {
    src: path.resolve(CURRENT_WORKING_DIR, './src'),
    assets: path.resolve(CURRENT_WORKING_DIR, 'public', 'assets'),
    compiled: path.resolve(CURRENT_WORKING_DIR, './dist'),
    public: '/assets/', // use absolute path for css-loader?
    modules: path.resolve(CURRENT_WORKING_DIR, 'node_modules')
};

