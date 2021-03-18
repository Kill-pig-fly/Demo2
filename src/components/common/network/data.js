import {request} from './request'

//首页
export function getHomeMultidata() {
  return request({
    url:'/home/multidata'
  }) 
}