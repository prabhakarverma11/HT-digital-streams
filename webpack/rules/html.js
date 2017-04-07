const PATHS = require('../paths');

module.exports = () => {

    return {
        test: /\.html$/,
        loader: "file-loader?name=[name].[ext]"
    };
};

