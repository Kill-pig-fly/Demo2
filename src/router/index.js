import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('@/views/home/Home.vue')
const Cart = () => import('@/views/cart/Cart.vue')
const Category = () => import('@/views/category/Category.vue')
const Profile = () => import('@/views/profile/Profile.vue')
const Detail = () => import('@/views/home/Detail.vue')

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/detail',
    component: Detail
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
const originalReplace = VueRouter.prototype.replace
   VueRouter.prototype.replace = function replace(location) {
   return originalReplace.call(this, location).catch(err => err)
}

export default router
