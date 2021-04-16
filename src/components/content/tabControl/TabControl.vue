<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" :key="index" class="tab-control-item">
      <span :class='{active: index == stateIndex}' @click="itemClick(index)">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles:{
      type:Array,
      default:()=>[]
    },
  },
  data() {
    return {
      stateIndex:0 
    }
  },
  methods: {
    itemClick(index) {
      this.stateIndex = index
      this.$emit('getImgIndex', index+1);
    }
  }
}
</script>

<style lang="scss" scoped>
  .tab-control {
    display: flex;
    text-align: center;
    background-color: rgb(228, 228, 161);
    height: 40px;
    line-height: 40px;
  }

  .tab-control-item {
    flex: 1;
  }

  .tab-control-item span {
    padding: 5px;
  }

  .active {
    color: rgb(236, 101, 47);
    border-bottom: 2px solid rgb(236, 101, 47);
  }

</style>