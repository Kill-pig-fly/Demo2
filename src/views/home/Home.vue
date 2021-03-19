<template>
  <div id="home">
    <nav-bar class="home-nav"> <div slot="center">首页</div> </nav-bar>

    <home-swiper :banners='banners'></home-swiper>

    <home-zfscr :recommends='recommends'></home-zfscr>

  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'; 
import HomeZfscr from './childComps/HomeZfscr'


import {getHomeMultidata} from 'components/common/network/data'

export default {
  data() {
    return {
      banners:[],
      recommends: [],
      
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeZfscr
  },
  created() {
    //请求数据
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    }) 
  }
}
</script>

<style lang="scss" scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
