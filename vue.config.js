const { defineConfig } = require('@vue/cli-service')
const cdnConfig = require('./cdn.config.js')

module.exports = defineConfig({
  transpileDependencies: true,
  // 生产环境下不生成sourcemap
  productionSourceMap: false,
  // 生产环境使用CDN的publicPath
  publicPath: process.env.NODE_ENV === 'production' ? cdnConfig.publicPath : '/',
  // 配置CDN
  configureWebpack: config => {
    if (cdnConfig.enable) {
      // 外部扩展
      config.externals = cdnConfig.externals
    }
  },
  chainWebpack: config => {
    // 注入CDN变量
    config.plugin('html').tap(args => {
      args[0].cdn = cdnConfig.enable ? cdnConfig.cdn : {css: [], js: []}
      return args
    })

    // 图片压缩优化 - 仅在生产环境中启用
    if (process.env.NODE_ENV === 'production') {
      config.module
        .rule('images')
        .test(/\.(png|jpe?g|gif|webp|avif)$/)
        .use('image-webpack-loader')
        .loader('image-webpack-loader')
        .options({
          disable: process.env.NODE_ENV !== 'production', // 在开发环境中禁用
          mozjpeg: {
            progressive: true,
            quality: 75
          },
          optipng: {
            enabled: true,
            optimizationLevel: 5
          },
          pngquant: {
            quality: [0.7, 0.9],
            speed: 4
          },
          webp: {
            quality: 75
          }
        })
        .end()
    }
  },
  // 开发服务器配置
  devServer: {
    compress: true,
    open: true
  }
})
