const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //配置端口
  devServer: {
    host: 'localhost',
    port: 3000,
    open: true
  },
  //不写的话会变成“严格模式”，关闭eslint.
  lintOnSave: false,
  chainWebpack: config => {
    // 发布模式
    config.when(process.env.NODE_ENV === 'production', config => {
      //发布模式的入口文件为 src/main-prod.js
      config.entry('app').clear().add('./src/main-prod.js')
    })
    config.set('externals', {
      vue: 'Vue',
      'vue-router': 'VueRouter',
      axios: 'axios',
      lodash: '_',
      echarts: 'echarts',
      nprogress: 'NProgress',
      // 'vue-quill-editor': 'VueQuillEditor'
    })
    config.plugin('html').tap(args => {
      args[0].isProd = true
      return args
    })
    // 开发模式
    config.when(process.env.NODE_ENV === 'development', config => {
      //开发模式的入口文件为./src/main-dev.js
      config.entry('app').clear().add('./src/main-dev.js')
      config.plugin('html').tap(args => {
        args[0].isProd = false
        return args
      })
    })
  }
})
