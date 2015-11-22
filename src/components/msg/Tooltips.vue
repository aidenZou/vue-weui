<template>
  <div class="weui_toptips weui_warn js_tooltips" v-show="isShow">格式不对</div>
</template>

<script>
export default {
  name: 'Tooltips',
  props:{
    isShow:{
      type:Boolean,
      default:true
    }
  },
  created(){
    var self = this;
    self.$watch('isShow', function (newVal, oldVal) {
      //TODO 更新策略
      setTimeout(function () {
          self.isShow = false;
      }, 3000);
    })
  }
}
</script>

<style lang="less">
.weui_toptips{
  display: block;
}
</style>
