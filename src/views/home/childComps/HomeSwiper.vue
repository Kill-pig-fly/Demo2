<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banners" :key="item">
        <a :href="item.link">
          <img :src="item.image" alt="">
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
      default() {
        return []
      }
    },
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods : {
    
  }
}
</script>

<style lang="scss" scoped>
</style>