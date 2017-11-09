'use strict';

const path = require ('path');
const webpack = require ('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        main: './src/apps/main/index.js'
    },

    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },

    resolve: {
        modules: [
            __dirname,
            'node_modules'
        ],
        alias: {
            'core': 'src/core',
            'main': 'src/apps/main'
        }
    },

    resolveLoader: {
        moduleExtensions: ['-loader']
    },

    plugins: [
        new CleanWebpackPlugin([
            path.resolve(__dirname, 'dist')
        ], {
            root: __dirname,
            verbose: false
        }),
        new ExtractTextPlugin('[name].[chunkhash].css'),
        new CaseSensitivePathsPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale/, /(en-gb|ru)\.js/),
        new HtmlWebPackPlugin({
            template: './src/apps/main/index.html',
            alwaysWriteToDisk: true
        })
    ],

    module: {
        noParse: [
            /\/node_modules\//
        ],
        rules: [
            {
                test: /\.html$/,
                loader: 'html'
            }
        ]
    },

    stats: {
        children: false
    }
}
