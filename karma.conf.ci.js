var webpackConfig = require('./webpack.karma.config.js');

module.exports = function (config) {
    config.set({
        browsers: [
            'PhantomJS'
        ],

        port: 9876,

        singleRun: true,

        autoWatch: false,

        colors: false,

        concurrency: Infinity,

        logLevel: config.LOG_INFO,

        frameworks: [
            'mocha',
            'chai'
        ],

        files: [
            './node_modules/phantomjs-polyfill/bind-polyfill.js',
            'tests.webpack.js'
        ],

        plugins: [
            'karma-phantomjs-launcher',
            'karma-chai',
            'karma-mocha',
            'karma-webpack'
        ],

        preprocessors: {
            'tests.webpack.js': ['webpack']
        },

        reporters: ['dots'],

        webpack: webpackConfig,

        webpackServer: {
            noInfo: true
        }
    });
};
