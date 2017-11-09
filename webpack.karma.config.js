'use strict';

var webpack = require ('webpack');
var config = require('./webpack.config.js');
var CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var rules = require('./webpack/rules');

const karmaRules = rules({
    dirname: __dirname
});

module.exports = Object.assign({}, config, {
    entry: null,
    output: null,

    plugins: [
        new CaseSensitivePathsPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin('[name].css')
    ],

    module: Object.assign({}, config.module, {
        rules: config.module.rules.concat(karmaRules)
    })
});
