const path = require ('path');
const postcssLoader = require('../loaders/postcss.js');
const cssRule = require('./cssRule');

module.exports = function(params) {
    const hot = params.hot;
    const dirname = params.dirname;

    const srcInclude = [
        path.resolve(dirname, './src')
    ];

    const srcLoaders = [
        postcssLoader(dirname)
    ];

    return [
        cssRule({
            include: /node_modules/,
            options: {
                modules: false
            }
        }),
        cssRule({
            include: srcInclude,
            options: {
                modules: false
            },
            loaders: srcLoaders,
            hot: hot
        }),
        cssRule({
            test: /\.mcss$/,
            include: srcInclude,
            options: {
                modules: true
            },
            loaders: srcLoaders,
            hot: hot
        })
    ];
};
