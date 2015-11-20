<template>
  <div class="weui_dialog_confirm" id="dialog1" v-show="isShow">
      <div class="weui_mask"></div>
      <div class="weui_dialog">
          <div class="weui_dialog_hd"><strong class="weui_dialog_title">{{title}}</strong></div>
          <div class="weui_dialog_bd" v-html="content"></div>
          <div class="weui_dialog_ft">
              <a href="javascript:;" class="weui_btn_dialog default" v-on:click="cancel()">取消</a>
              <a href="javascript:;" class="weui_btn_dialog primary" v-on:click="determine()">确定</a>
          </div>
      </div>
  </div>
</template>

<script>
export default{
  name:'Confirm',
  props:{
    isShow:{
      type:Boolean,
      default:false
    },
    //标题
    title:{
      type:String,
      default:'弹窗标题'
    },
    //内容
    content:{
      type:String,
      default:'自定义弹窗内容<br>...'
    }
    //按钮
  },
  methods:{
    close(){
      this.isShow = false;
    },
    cancel(){
      this.isShow = false;
    },
    determine(){
      this.isShow = false;
    }
  }
}
</script>
