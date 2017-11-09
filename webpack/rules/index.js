var jsRules = require('./jsRules.js');
var cssRules = require('./cssRules.js');

module.exports = function(options) {
    return [].concat(
        jsRules(options),
        cssRules(options)
    );
}

