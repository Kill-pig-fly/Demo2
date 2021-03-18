<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home">
        <img src="@/assets/img/tabbar/1.png" alt="" slot="item-icon">
        <img src="@/assets/img/tabbar/4.png" alt="" slot="item-icon-light">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img src="@/assets/img/tabbar/2.png" alt="" slot="item-icon">
        <img src="@/assets/img/tabbar/4.png" alt="" slot="item-icon-light">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img src="@/assets/img/tabbar/3.png" alt="" slot="item-icon">
        <img src="@/assets/img/tabbar/4.png" alt="" slot="item-icon-light">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img src="@/assets/img/tabbar/0.png" alt="" slot="item-icon">
        <img src="@/assets/img/tabbar/4.png" alt="" slot="item-icon-light">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>

</template>
 


<script>
import TabBar from '@/components/common/tabbar/TabBar'
import TabBarItem from '@/components/common/tabbar/TabBarItem';

export default {
  components : {
    TabBar,
    TabBarItem
  }
}
</script>

<style lang="scss" scoped>

</style>