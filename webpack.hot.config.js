'use strict';

var webpack = require ('webpack');
var config = require('./webpack.config.js');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
var HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
var styleLintPlugin = require('./webpack/linters/stylelint');
var rules = require('./webpack/rules');

const hotRules = rules({
    hot: true,
    dirname: __dirname
});

module.exports = Object.assign({}, config, {
    devtool: 'cheap-module-source-map',

    entry: Object.assign({}, config.entry, {
        vendors: [
            'webpack-dev-server/client?http://localhost:3000',
            'webpack/hot/only-dev-server',
            'react-hot-loader/patch'
        ]
    }),

    output: Object.assign({}, config.output, {
        filename: '[name].[hash].js',
        publicPath: '/dist'
    }),

    plugins: config.plugins.concat([
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new ProgressBarPlugin(),
        new HtmlWebpackHarddiskPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors'
        }),
        styleLintPlugin
    ]),

    module: Object.assign({}, config.module, {
        rules: config.module.rules.concat(hotRules)
    })
});
