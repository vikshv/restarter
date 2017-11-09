'use strict';

const webpack = require ('webpack');
const config = require('./webpack.config.js');
const rules = require('./webpack/rules');

const prodRules = rules({
    debug: false,
    dirname: __dirname
});

module.exports = Object.assign({}, config, {
    plugins: config.plugins.concat([
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                drop_debugger: true
            },
            output: {
                comments: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            minChunks: function(module) {
                return module.context && module.context.includes('node_modules');
            }
        })
    ]),

    module: Object.assign({}, config.module, {
        rules: config.module.rules.concat(prodRules)
    })
});
