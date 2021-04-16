<template>
  <div>
    <swiper>
      <swiper-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imgRefresh">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index'

export default {
  props: {
    banners:{
      type:Array,
      default:()=>[]
    },
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods : {
    imgRefresh() {
      this.$bus.$emit('imgRefresh');
    }
  }
}
</script>

<style lang="scss" scoped>
</style>