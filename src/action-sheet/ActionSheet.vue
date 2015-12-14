<template>
  <div id="actionSheet_wrap">
      <!-- weui_fade_toggle -->
      <!-- style="display:block" -->
      <!-- <div class="weui_mask_transition" :class="{weui_fade_toggle:isShow}" id="mask" v-show="isShow" v-on:click="close()"></div> -->
      <Mask :is-show.sync="isShow"></Mask>
      <!-- weui_actionsheet_toggle -->
      <div class="weui_actionsheet" :class="{weui_actionsheet_toggle:isShow}" id="weui_actionsheet">
          <div class="weui_actionsheet_menu">
              <div class="weui_actionsheet_cell" v-on:click="close()">示例菜单</div>
              <div class="weui_actionsheet_cell" v-on:click="close()">示例菜单</div>
              <div class="weui_actionsheet_cell" v-on:click="close()">示例菜单</div>
              <div class="weui_actionsheet_cell">示例菜单(我没有关闭功能)</div>
          </div>
          <div class="weui_actionsheet_action">
              <div class="weui_actionsheet_cell" id="actionsheet_cancel" v-on:click="close()">取消</div>
          </div>
      </div>
  </div>
</template>

<script>
import Mask from '../Mask.vue'

export default {
  name:'ActionSheet',
  components: {
    Mask
  },
  props:{
    isShow:{
      type:Boolean,
      default:false
    }
  },
  // data(){
  //   return {
  //     isShow:false
  //   };
  // },
  created(){
    // this.open();
  },
  methods:{
    open(){
      this.isShow = true;
      //TODO 事件操作欠缺
    },
    close(){
      this.isShow = false;
    }
  }

  // function hideActionSheet(weuiActionsheet, mask) {
  //       weuiActionsheet.removeClass('weui_actionsheet_toggle');
  //       mask.removeClass('weui_fade_toggle');
  //       weuiActionsheet.on('transitionend', function () {
  //           mask.hide();
  //       }).on('webkitTransitionEnd', function () {
  //           mask.hide();
  //       })
  //   }
  //   $container.on('click','#showActionSheet', function () {
  //       var mask = $('#mask');
  //       var weuiActionsheet = $('#weui_actionsheet');
  //       weuiActionsheet.addClass('weui_actionsheet_toggle');
  //       mask.show().addClass('weui_fade_toggle').click(function () {
  //           hideActionSheet(weuiActionsheet, mask);
  //       });
  //       $('#actionsheet_cancel').click(function () {
  //           hideActionSheet(weuiActionsheet, mask);
  //       });
  //       weuiActionsheet.unbind('transitionend').unbind('webkitTransitionEnd');
  //   });
}
</script>

<style lang="less">
@import "../../style/base/fn";

@bgColor:#ECECEC;
.weui_actionsheet {
    position: fixed;
    left: 0;
    bottom: 0;
    transform: translate(0, 100%);
    backface-visibility: hidden;
    z-index: 2;
    width: 100%;
    background-color: @pageDefaultBackgroundColor;
    //slide up animation
    transition: transform .3s;
}
.weui_actionsheet_menu{
    background-color: #FFFFFF;
}
.weui_actionsheet_action {
    margin-top: 6px;
    background-color: #FFFFFF;
}
.weui_actionsheet_cell {
    position: relative;
    padding: 10px 0;
    text-align: center;
    font-size: 18px;
    &:before {
        .setTopLine(@weuiCellBorderColor);
    }
    &:active{
        background-color: @bgColor;
    }
    &:first-child{
        &:before{
            display: none;
        }
    }
}

//actionSheet aniamtion
.weui_actionsheet_toggle{
    transform: translate(0, 0);
}
</style>
