//var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
//var commonConfig = require('./webpack.common.js');
var htmlPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        'polyfills': './vendor/polyfill.ts',
        // 'vendor': './vendor/vendor.ts',
        'front': './front/main.ts',
        'admin': './admin/main.ts'
    },
  output: {
    path: ('./dist-hot'),
    publicPath: 'http://localhost:8080/',
    filename: '[name].js'
    //chunkFilename: '[id].chunk.js'
  },
  resolve: {
        extensions: ['', '.ts', '.js']
    },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ],
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
  ],
  devServer: {
    contentBase: './dist-hot',
    // hot: true,
    // inline: true,
    // progress: true,
    
    //quiet: true,
    stats: { colors: true },
    proxy: {
      "/api": {
        target: {
          "host": "localhost",
          "protocal": "http",
          "port": "8081"
        },
        secure: false
      }
    },
    historyApiFallback: {
      rewrites: [
        { from: /^\/admin/, to: '/admin.html' }
      ]
    },
    //stats: 'errors-only',
  }
};
