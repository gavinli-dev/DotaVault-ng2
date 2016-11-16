var wp = require('webpack');
var htmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'polyfills': './vendor/polyfill.ts',
        //'vendor': './vendor/vendor.ts',
        'front': './front/main.ts',
        'admin': './admin/main.ts'
    },
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader'],
                exclude: [/\.(spec|e2e)\.ts$/]
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.(jpg|png|gif|svg)$/i,
                loader: 'file?name=assets/[name].[ext]'
            },
            {
                test: /\.css$/,
                loader: 'raw'
            }
        ]
    },
    plugins: [
        // new wp.optimize.CommonsChunkPlugin({
        //     name: ['app', 'polyfills']
        // }),
        new htmlPlugin({
            filename: 'index.html',
            template: 'front/index.html',
            chunks: ['polyfills', 'front']
        }),
        new htmlPlugin({
            filename: 'admin.html',
            template: 'admin/index.html',
            chunks: ['polyfills', 'admin']
        })
    ]
}
