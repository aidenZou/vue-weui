<template>
  <div class="weui_mask_transition" :class="{weui_fade_toggle:isShow}" id="mask" v-show="isShow" v-on:click="close()"></div>
</template>

<script>
export default {
  name:'Mask',
  props:{
    isShow:{
      type:Boolean,
      default:false
    }
  },
  methods:{
    close(){
      //TODO 广播
      this.isShow = false;
    }
  }
}
</script>

<style lang="less">

@import "./style/widget/weui_tips/weui_mask";

</style>
