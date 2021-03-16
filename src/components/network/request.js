import axios from 'axios'

export function request(config) {
  //1.创建实例
  const instance = axios.create({
    // baseURL: ,
    // timeout: ,
    // headers: 
  })

  //2.axios的拦截器
  //请求拦截
  instance.interceptors.request.use(config => {
    //比如config中的一些信息不符合服务器的要求

    //比如每次发送网络请求时,希望在界面中显示一个请求图标

    //某些网络请求必须携带一些特殊的信息(比如登录检测token),让其跳转到登录页先登录
    return config;
  },error => {
    return Promise.reject(error);
  });
  //响应拦截
  instance.interceptors.response.use(response => {

  return response.data;
  },error => {
    return Promise.reject(error);
  });

  //3.用实例发送请求
  return instance(config)
}