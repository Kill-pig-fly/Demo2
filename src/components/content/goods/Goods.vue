<template>
  <div class="goods">
    <goods-item v-for="(item,index) in list" :key="index" :imgIndex='imgIndex' ></goods-item>
  </div>
</template>

<script>
import GoodsItem from './GoodsItem';

export default {
  props: {
    imgIndex: {
      type:Number,
      default:0
    }
  },
  components: {
    GoodsItem
  },
  data() {
    return {
      list:["1","2","3","4","5","6","7","1","2","3","4","5","6","7","1","2","3","4","5","6","7","1","2","3","4","5","6","7"]
    }
  },
  methods: {
    
  },
}
</script>

<style lang="scss" scoped>

  .goods {
    display: flex;
    
    // float: left;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 5px;
  }

</style>