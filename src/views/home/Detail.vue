<template>
  <div class="detail">
    <p class="text" @click="pageClick">点击页面返回</p>

    <detail-bottom-bar @click.native="clickBtn"></detail-bottom-bar>
  </div>
</template>

<script>
import DetailBottomBar from './childComps/DetailBottomBar'

export default {
  components: {
    DetailBottomBar,
  }
  , 
  methods: {
    pageClick() {
      this.$router.back()
      // this.$router.go(-1)
    },
    clickBtn() {
      this.$toast.show('弹框文字内容')
    }
  },
}
</script> 

<style lang="scss" scoped>
  .detail {
    height: 200vh;
    background-color: white;
    position: relative;
    z-index: 9;
    // text-align: center;
  }
  .text {
    display: flex;
    width: 100vw;
    height: 100vh;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
</style>