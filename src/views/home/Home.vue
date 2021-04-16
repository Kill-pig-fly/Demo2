<template>
  <div id="home">
    <nav-bar class="home-nav"> <div slot="center">首页</div> </nav-bar>
    <tab-control v-show="isTabFixed" ref="tabControl2" :titles='["流行","新款","精选"]' class="tab-control" @getImgIndex='getImgIndex'></tab-control>

    <scroll class="content" ref="scroll" @contentScr="contentScr">
      <home-swiper :banners='banners'></home-swiper>

      <home-zfscr :recommends='recommends'></home-zfscr>

      <tab-control ref="tabControl" :titles='["流行","新款","精选"]' @getImgIndex='getImgIndex'></tab-control>

      <goods :imgIndex='imgIndex'></goods>

    </scroll>

<!-- native监听组件事件 -->
    <back-top class="backTop" @click.native="backTopClick" v-show="isTabFixed"></back-top>
  </div>
</template>


<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'; 
import HomeZfscr from './childComps/HomeZfscr'
import BackTop from './childComps/BackTop'  

import TabControl from 'components/content/tabControl/TabControl';
import Goods from 'components/content/goods/Goods'

import Scroll from 'components/common/scroll/Scroll'

import {getHomeMultidata,getHomeGoosData} from '@/components/common/network/data.js'
import {itemImgListenerMixin} from '@/common/mixin.js'
import {debounce} from '@/common/utils.js'

export default {
  data() {
    return {
      banners: [],           
      recommends: [],
      goods: {
        'pop': {page:0, list:[]},
        'new': {page:0, list:[]},
        'sell': {page:0, list:[]}
      },
      imgIndex:1,
      isTabFixed:false,
      // itemImgListener:null,//写到混入mixin.js内去了
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeZfscr,
    TabControl,
    Goods,
    Scroll,
    BackTop
  },
  created() {
    //请求头部数据
    this.multidata()
    //商品列表数据
    this.goosData() 
    
    //上面数据渲染完才会走下面的函数,对应的dom已经渲染但是图片已然没有加载完
    this.$nextTick(() => {

    })
  },
  methods: {
    multidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      }) 
    },
    goosData() {
      getHomeGoosData('new',1).then(res => {
        console.log(res);
      })
    },
    getImgIndex(index) {
      // console.log(index);
      this.imgIndex = index
      this.$refs.tabControl.stateIndex = index-1
      this.$refs.tabControl2.stateIndex = index-1
    },
    contentScr(position) {
      this.isTabFixed = (-position.y) > this.$refs.tabControl.$el.offsetTop
    },
    backTopClick() {
      this.$refs.scroll.scroll.scrollTo(0,0,500)
    }
  },
  computed: {
    
  },
  mixins:[itemImgListenerMixin]
  ,
  mounted() {
    // //图片加载完刷新滚动高度  写到混入mixin.js内去了
    // const refresh = debounce(this.$refs.scroll.refresh)
    // this.itemImgListener = () => {
    //   refresh()
    // }
    // this.$bus.$on('imgRefresh', this.itemImgListener);//监听事件
  },
  deactivated() {
    this.$bus.$off('imgRefresh',this.itemImgListener);//取消监听事件
  }
}
</script>

<style lang="scss" scoped>
  #home {
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    // position: fixed;
    // left: 0;
    // right: 0;
    // top: 0;
    z-index: 100;
  }

  .tab-control {
    position: relative;
    z-index: 100;
  }

  .content {
    position: absolute;
    overflow: hidden;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  .backTop {
    background-color:white;
    position: fixed;
    width: 40px;
    height: 40px;
    right: 10px;
    bottom: 60px;
    z-index: 9;
    border-radius: 10px;
  }
</style>
