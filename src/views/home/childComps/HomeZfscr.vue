<template>
  <div class="scr">
    <div v-for="(item,index) in recommends" :key="index" class="scr-item">
      <a :href="item.link" >
        <!-- <img :src="item.image" alt="" @load="imgRefresh"> 修改图片显示未懒加载,直接将':scr'改为‘v-lazy’-->
        <img v-lazy="item.image" alt="" @load="imgRefresh"> 
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>


<script>

export default {
  props: {
    recommends:{
        type:Array,
        default() {
          return []
        }
      }
  },
  methods: {
    imgRefresh() {
      this.$bus.$emit('imgRefresh');
    },
  },
}
</script>


<style lang="scss" scoped>
  .scr {
    display: flex;
    text-align: center;
    font-size: 12px;

    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
  }
  .scr-item {
    flex: 1;
  }

  .scr-item img {
    width: 65px;
    height: 65px;

    margin-bottom: 10px;
  }
</style>


