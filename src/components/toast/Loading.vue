<!-- loading toast -->
<template>
  <div id="loadingToast" class="weui_loading_toast" v-show="isShow">
      <div class="weui_mask_transparent"></div>
      <div class="weui_toast">
          <div class="weui_loading">
              <div class="weui_loading_leaf weui_loading_leaf_0"></div>
              <div class="weui_loading_leaf weui_loading_leaf_1"></div>
              <div class="weui_loading_leaf weui_loading_leaf_2"></div>
              <div class="weui_loading_leaf weui_loading_leaf_3"></div>
              <div class="weui_loading_leaf weui_loading_leaf_4"></div>
              <div class="weui_loading_leaf weui_loading_leaf_5"></div>
              <div class="weui_loading_leaf weui_loading_leaf_6"></div>
              <div class="weui_loading_leaf weui_loading_leaf_7"></div>
              <div class="weui_loading_leaf weui_loading_leaf_8"></div>
              <div class="weui_loading_leaf weui_loading_leaf_9"></div>
              <div class="weui_loading_leaf weui_loading_leaf_10"></div>
              <div class="weui_loading_leaf weui_loading_leaf_11"></div>
          </div>
          <p class="weui_toast_content">数据加载中</p>
      </div>
  </div>
</template>

<script>
export default {

  name: 'Loading',

  props:{
    isShow:false
    // showToast:{
    //   type:Boolean,
    //   default:false
    // }
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
@import "../../style/base/fn";

</style>
