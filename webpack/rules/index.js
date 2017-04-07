const image = require('./image');
const javascript = require('./javascript');
const css = require('./css');
const html = require('./html');


module.exports = () => (
    [
        javascript(),
        css(),
        image(),
        html()
    ]
);
