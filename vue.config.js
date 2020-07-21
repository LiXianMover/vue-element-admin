const webpack = require('webpack')

module.exports = {
  configureWebpack: {
    plugins: []
  },
  devServer: {
    port: '8888',
    proxy: {
      '/api': {
        target: 'http://172.28.5.59:8881', // http://test.lease.gree.com
        ws: true, // proxy websocks
        changeOrigin: true,
        pathRewrite: {}
      }
    }
  },
  productionSourceMap: false,
  // lintOnSave: false
}
