<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll, { PullDownRefresh } from 'better-scroll'

export default {
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper,{
      click:true,
      // 监听滚动 0,1不监听  2监听手指滚动,手指离开不监听  3只要滚动都监听
      probeType:3,
    });

    //获取滚动位置
    this.scroll.on('scroll',position => {
      // console.log(position.y);
      this.$emit('contentScr', position);
    })

  },
  methods: {
    //防抖事件
    // debounce(func,delay = 100) {
    //   let timer = null
    //   return () => {
    //     if (timer) clearTimeout(timer)
    //     timer = setTimeout(() => {
    //       func.apply(this)
    //     }, delay);
    //   }
    // },
    refresh() {
      this.scroll.refresh()
    },
  },
  created() {
    
  },
}
</script>

<style lang="scss" scoped>

</style>