// CDN配置文件
module.exports = {
  // 是否启用CDN
  enable: process.env.NODE_ENV === 'production',
  // CDN基础路径 - 当前设置为相对路径，部署时可根据实际情况修改
  publicPath: '/',
  // 需要从CDN加载的第三方库
  externals: {
    'vue': 'Vue',
    'vue-router': 'VueRouter',
    'vuex': 'Vuex',
    'axios': 'axios',
    'element-plus': 'ElementPlus'
  },
  // CDN链接
  cdn: {
    css: [
      'https://cdn.jsdelivr.net/npm/element-plus@2.7.7/dist/index.min.css'
    ],
    js: [
      'https://cdn.jsdelivr.net/npm/vue@3.2.13/dist/vue.global.prod.js',
      'https://cdn.jsdelivr.net/npm/vue-router@4.0.3/dist/vue-router.global.prod.js',
      'https://cdn.jsdelivr.net/npm/vuex@4.0.0/dist/vuex.global.prod.js',
      'https://cdn.jsdelivr.net/npm/axios@1.7.2/dist/axios.min.js',
      'https://cdn.jsdelivr.net/npm/element-plus@2.7.7/dist/index.full.min.js'
    ]
  }
};
