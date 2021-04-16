<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '默认文字',
      isShow:false
    };
  },
  methods: {
    show(content="提示框文本内容",time=1500) {
      this.isShow = true
      this.message = content

      setTimeout(() => {
        this.isShow = false
        this.message = ''
      }, time);
    },
  },
}
</script>

<style lang="scss" scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 8px 10px;

    color: white;
    background-color: gray;

    z-index: 999;
  }
</style>