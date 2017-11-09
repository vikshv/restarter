const path = require ('path');
const autoprefixer = require('autoprefixer');
const postcssNesting = require('postcss-nesting');
const postcssCustomProperties = require('postcss-custom-properties');
const postcssImport = require('postcss-import');
const postcssColorFunction = require('postcss-color-function');
const postcssCalc = require('postcss-calc');
const postcssCustomMedia = require('postcss-custom-media');

module.exports = function(dirname) {
    return {
        loader: 'postcss',
        options: {
            plugins: function() {
                return [
                    postcssImport({
                        root: dirname,
                        path: [
                            path.resolve(dirname, './src')
                        ]
                    }),
                    postcssCustomProperties(),
                    postcssCustomMedia(),
                    postcssCalc(),
                    postcssNesting(),
                    postcssColorFunction(),
                    autoprefixer()
                ];
            }
        }
    };
};
