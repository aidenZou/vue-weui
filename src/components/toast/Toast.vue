<!--toast-->
<template>
  <div id="toast" v-show="isShow">
      <div class="weui_mask_transparent"></div>
      <div class="weui_toast">
          <i class="weui_icon_toast"></i>
          <p class="weui_toast_content">已完成</p>
      </div>
  </div>
</template>

<script>
export default {

  name: 'Toast',

  props:{
    // showToast:false,
    isShow:{
      type:Boolean,
      default:false,
      // update: function (value) {
      //   console.log(1111)
      //   // return value;
      // }
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
  },
  methods: {
    // showToast(){
    //   var self = this;
    //   self.show_toast = true;
    //   setTimeout(function () {
    //       self.show_toast = false;
    //   }, 3000);
    // },

    // loading_toast(){
    //   var self = this;
    //   self.loadingToast = true;
    //   setTimeout(function () {
    //       self.loadingToast = false;
    //   }, 3000);
    // }
  }
}
</script>
