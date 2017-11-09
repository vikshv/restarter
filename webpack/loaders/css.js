const defaultOptions = {
    minimize: {
        autoprefixer: false
    },
    sourceMap: true,
    modules: true,
    importLoaders: 2,
    localIdentName: '[name]_[local]_[hash:base64:5]'
};

module.exports = function(options) {
    return {
        loader: 'css',
        options: Object.assign({}, defaultOptions, options)
    };
};
