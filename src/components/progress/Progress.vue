<template>
  <div class="weui_progress" v-if="isShow">
      <div class="weui_progress_bar">
          <div class="weui_progress_inner_bar" v-bind:style="{ width: size + '%' }"></div>
      </div>
      <a href="javascript:;" class="weui_progress_opr" v-on:click="isShow=false">
          <i class="weui_icon_cancel"></i>
      </a>
  </div>
</template>

<script>
export default {
  name: 'Progress',
  props: {
    //进度条长度:[1~100]
    size: {
      // type:Number,
      default:0,
      //TODO size=0 bug
      // validator: function (value) {
      //   // console.log(value)
      //   if(value < 0){
      //     return false;
      //   }
      //   if(value > 100){
      //     return false;
      //   }
      //   return value;
      // }
    }
  },
  data(){
    return {
      isShow:true
    };
  }
}
</script>
