const ExtractTextPlugin = require('extract-text-webpack-plugin');
const cssLoader = require('../loaders/css');

const defaultTest = /\.css$/;

module.exports = function(params) {
    const config = params.hot ? getHotConfig(params) : getDefaultConfig(params);
    return Object.assign({
        test: params.test || defaultTest,
        include: params.include
    }, config);
};

function getDefaultConfig(params) {
    const loaders = [
        cssLoader(params.options)
    ];
    return {
        loader: ExtractTextPlugin.extract(params.loaders ? loaders.concat(params.loaders) : loaders)
    };
}

function getHotConfig(params) {
    const use = [
        {
            loader: 'style'
        },
        cssLoader(params.options)
    ];
    return {
        use: params.loaders ? use.concat(params.loaders) : use
    };
}
