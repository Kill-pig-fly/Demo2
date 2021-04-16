<template>
  <div class="goods-item" @click="itemClick">
    <img v-if="imgIndex == 1" src="~assets/img/tabbar/1.png" alt="" @load="imgRefresh">
    <img v-else-if="imgIndex == 2" src="~assets/img/tabbar/2.png" alt="" @load="imgRefresh">
    <img v-else src="~assets/img/tabbar/3.png" alt="" @load="imgRefresh">
    <div class="content">
      <p>我是内容很长显示不了就隐藏了去哦,不要超出显示呢</p>
      <span>59.00</span>
      <span>49</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgIndex:{
      type:Number,
      default:0
    }
  },
  methods: {
    imgRefresh() {
      this.$bus.$emit('imgRefresh');
    },
    itemClick() {
      this.$router.push('/detail')
    },
  },
}
</script>

<style lang="scss" scoped>
  .goods-item {
    margin-top: 8px;
    width: 46%;
  }

  .goods-item img {
    width: 100%;
    height: calc(46vw*1.15);  
    border-radius: 5px;
  }

  .content {
    font-size: 12px;
    overflow: hidden;
  }

  .content p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

</style>