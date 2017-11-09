module.exports = function(options) {
    const { dirname, debug = true } = options;
    return [
        {
            test: /\.js$/,
            enforce: 'pre',
            loader: 'eslint'
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: 'babel',
                    options: {
                        presets: [
                            ['env', {
                                modules: false
                            }],
                            'stage-0',
                            'react'
                        ],
                        env: {
                            development: {
                                plugins: ['react-hot-loader/babel']
                            },
                            production: {
                                plugins: []
                            }
                        },
                        cacheDirectory: debug
                    }
                }
            ]
        }
    ];
};
