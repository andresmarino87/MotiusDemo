/**
 * Webpack config for builds
 */
require('es6-promise').polyfill();

module.exports = require('./webpack.make')({
    BUILD: true,
    TEST: false,
    DEV: false
});
