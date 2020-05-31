const path = require('path');

module.exports = {
    watch : true,
    entry: './public/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/dist'),
    },
};
