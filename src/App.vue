<template>
  <div id="app">
    
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    

    <main-tab-bar></main-tab-bar>


    
    
  </div>
</template>

<script>
import MainTabBar from 'components/common/tabbar/MianTabBar'

export default {
  components : {
    MainTabBar
  }
}
</script>

<style lang="scss">
  @import './assets/css/base.css';

  

</style>
