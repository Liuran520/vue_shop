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
})
