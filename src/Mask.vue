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
@import "../style/base/fn";

.weui_mask {
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, .6);
}

.weui_mask_transparent {
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

.weui_mask_transition{
    display: none;
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0);
    transition:background .3s;
}
.weui_fade_toggle{
    background: rgba(0,0,0,.6);
}

//TODO my add
.weui_mask_transition{
  display: block;
}
</style>
