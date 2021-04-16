import {debounce} from './utils'

export const itemImgListenerMixin = {
  data() {
    return{
      itemImgListener:null,
      nueRefresh:null
    }
  },

  mounted() {
    console.log('我是混入内容');
    //图片加载完刷新滚动高度
    this.nueRefresh = debounce(this.$refs.scroll.refresh)
    this.itemImgListener = () => {
      this.nueRefresh()  
    }
    this.$bus.$on('imgRefresh', this.itemImgListener);//监听事件
  }
}