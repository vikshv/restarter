'use strict';

const webpack = require ('webpack');
const config = require('./webpack.config.js');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const CleanObsoleteChunks = require('webpack-clean-obsolete-chunks');
const styleLintPlugin = require('./webpack/linters/stylelint');
const rules = require('./webpack/rules');

const watchRules = rules({
    dirname: __dirname
});

module.exports = Object.assign({}, config, {
    watch: true,

    watchOptions: {
        aggregateTimeout: 300,
        pull: 1000
    },

    devtool: 'source-map',

    plugins: config.plugins.concat([
        new CleanObsoleteChunks(),
        new ProgressBarPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            minChunks: function(module) {
                return module.context && module.context.includes('node_modules');
            }
        }),
        styleLintPlugin
    ]),

    module: Object.assign({}, config.module, {
        rules: config.module.rules.concat(watchRules)
    })
});
