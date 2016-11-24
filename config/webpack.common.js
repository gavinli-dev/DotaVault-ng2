var wp = require('webpack');

module.exports = {
    entry: {
        //'polyfills': './vendor/polyfill.ts',
        //'vendor': './vendor/vendor.ts',
        //'front': './front/main.ts'
        //'admin': './admin/main.ts'
        'test': './front/test.ts'
    },
    resolve: {
        extensions: ['', '.ts', '.js']
    }
}
