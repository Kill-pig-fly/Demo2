import {request} from './request'

//首页
export function getHomeMultidata() {
  return request({
    url:'/home/multidata'
  }) 
}
export function getHomeGoosData(type,page) {
  return request({
    url: '/home/data',
    data:{
      type,
      page
    }
  })
}