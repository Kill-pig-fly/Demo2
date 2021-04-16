import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import toast from './components/common/toast/index'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

//安装自定义插件
Vue.use(toast)

// 解决移动端点击300ms延迟
FastClick.attach(document.body)

//图片懒加载
Vue.use(VueLazyload,{
  // loading: require('加载中的图片'),//加载中图片，一定要有，不然会一直重复加载占位图
  // error: require('加载失败的图片')  //加载失败图片
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



/*
服务器问题：一台电脑（没有显示器的主机），24小时开着，为用户提供服务。
公司服务主机-> 租借 阿里云/华为云/腾讯云
主机 -> 操作系统 -> window(.net)/linux -> tomcat/nginx(软件/反向代理)
第一：将自己的电脑作为服务器
第二：远程部署
linux centos
ssh 登录远程服务器
yum install nginx 在服务器上安装nginx
systemctl start nginx.service 开启nginx服务
systemctl enable nginx.service 跟随系统启动

vim 编辑文本
i 开始编辑
编辑完按下esc 
敲出:wq
 */
