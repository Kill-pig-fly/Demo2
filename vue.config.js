
module.exports = {
  //创建元素未使用 设置false不报错
  lintOnSave: false,

  //解决runtime-only报错:指定到对应的vue文件
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js' ,
      }
    }
  },
}
