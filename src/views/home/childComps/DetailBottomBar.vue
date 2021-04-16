<template>
  <div class="bottom-bar">
    <img src="@/assets/img/tabbar/0.png" alt="">
    <!-- <span>按钮</span> -->
    <div>购物车</div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  .bottom-bar {
    height: 49px;
    background-color: red;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .bottom-bar img {
    width: 30px;
    height: 30px;
  }
</style>