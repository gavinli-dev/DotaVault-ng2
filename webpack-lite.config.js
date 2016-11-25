module.exports = {
  devServer: {
    contentBase: './dist-build',
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
  }
};
