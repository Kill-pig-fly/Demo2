<template>
  <div class="tab-bar-item" @click="btn">
    <div v-if="!isLight"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-light"></slot></div>
    <div :style="lightColor"><slot name="item-text"></slot></div>
    
    

    <!-- <img src="../../assets/img/tabbar/1.png" alt="">
    <div>首页</div> -->
  </div>
</template>


<script>
export default {
  props: {
    path:String,
    lcolor: {
      type:String,
      default:"red"
    }
  },
  data() {
    return {
      
    }
  },
  computed: {
    isLight() {
      return this.$route.path.includes(this.path)
    },
    lightColor() {
      return this.isLight ? {color:this.lcolor} : {}
    }
  }
  ,
  methods: {
    btn() {
      // console.log('我被点击了');
      this.$router.replace(this.path)
    }
  },
}
</script>


<style lang="scss" scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;

    font-size: 14px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }

</style>