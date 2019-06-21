const webpack = require('webpack')
module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,
  productionSourceMap: false,

  devServer: {
      port: 8000,
      https: false,
      hotOnly: false,
      proxy: false,
      before: app => { }
  },

  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        // $: 'jquery',
        // jquery: 'jquery',
        // jQuery: 'jquery',
        // 'window.jQuery': 'jquery',
        // _: 'lodash'
      })
    ],
  },

  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/assets/scss/main.scss";'
      }
    },
    sourceMap: true,
  },

  // images compressor
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({
        bypassOnDebug: true
      })
      .end()
  },

  publicPath: '/',
}