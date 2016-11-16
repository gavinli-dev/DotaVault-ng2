var webpackMerge = require('webpack-merge');
//var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
//var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: ('./dist'),
    publicPath: 'http://localhost:8080/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  // plugins: [
  //   new ExtractTextPlugin('[name].css')
  // ],

  devServer: {
    contentBase: './dist',
//    inline: true,
//    progress: true,
//    hot: true,
    // quiet: false,
    // stats: { colors: true },
    proxy: {
      "/api": {
        // "target": {
        //   "host": 'localhost',
        //   "protocal": 'http:',
        //   "port": 50029
        // },
        // ignorePath: true,
        // changeOrigin: true,
        // secure: false
        target: "http://localhost:50029",
        secure: false
      }
    },
    historyApiFallback: {
      rewrites: [
        { from: /^\/admin/, to: '/admin.html' }
      ]
    },
    stats: 'errors-only',
  }
});
