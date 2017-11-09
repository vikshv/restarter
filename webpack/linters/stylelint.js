'use strict';

var styleLintPlugin = require('stylelint-webpack-plugin');

module.exports = new styleLintPlugin({
    configFile: '.stylelintrc.json',
    context: 'src',
    files: [
        '**/*.css',
        '**/*.mcss'
    ],
    quiet: false
});
