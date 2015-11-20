<template>
  <div class="weui_dialog_alert" id="dialog2" v-show="isShow">
      <div class="weui_mask"></div>
      <div class="weui_dialog">
          <div class="weui_dialog_hd"><strong class="weui_dialog_title">弹窗标题</strong></div>
          <div class="weui_dialog_bd">弹窗内容，告知当前页面信息等</div>
          <div class="weui_dialog_ft">
              <a href="javascript:;" class="weui_btn_dialog primary" v-on:click="close()">确定</a>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name:'Alert',
  props:{
    isShow:{
      type:Boolean,
      default:false
    }
  },
  methods:{
    close(){
      this.isShow = false;
    }
  }
}
</script>
