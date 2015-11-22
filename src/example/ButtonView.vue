<template>
  <div class="page button">
      <div class="hd">
          <h1 class="page_title">Button</h1>
      </div>
      <div class="bd spacing">
          <a href="javascript:;" class="weui_btn weui_btn_primary">按钮</a>
          <a href="javascript:;" class="weui_btn weui_btn_disabled weui_btn_primary">按钮</a>
          <a href="javascript:;" class="weui_btn weui_btn_warn">确认</a>
          <a href="javascript:;" class="weui_btn weui_btn_disabled weui_btn_warn">确认</a>
          <a href="javascript:;" class="weui_btn weui_btn_default">按钮</a>
          <a href="javascript:;" class="weui_btn weui_btn_disabled weui_btn_default">按钮</a>
          <div class="button_sp_area">
              <a href="javascript:;" class="weui_btn weui_btn_plain_default">按钮</a>
              <a href="javascript:;" class="weui_btn weui_btn_plain_primary">按钮</a>

              <a href="javascript:;" class="weui_btn weui_btn_mini weui_btn_primary">按钮</a>
              <a href="javascript:;" class="weui_btn weui_btn_mini weui_btn_default">按钮</a>
          </div>
      </div>
  </div>
</template>

<script>
// import store from '../store'
// import Item from './Item.vue'
// import Comment from './Comment.vue'

export default {

  name: 'ButtonView',

  // components: {
  //   // Item,
  //   // Comment
  // },

  data () {
    return {
      item: {},
      // comments: [],
      // pollOptions: null
    }
  }

  // route: {
  //   data ({ to }) {
  //     return store.fetchItem(to.params.id).then(item => ({
  //       item,
  //       // the final resolved data can further contain Promises
  //       comments: store.fetchItems(item.kids),
  //       pollOptions: item.type === 'poll'
  //         ? store.fetchItems(item.parts)
  //         : null
  //     }))
  //   }
  // }
}
</script>

<style lang="less">

// @import "../style/base/fn";
@import "../style/widget/weui_button/weui_button.less";

// // 存在样式优先级的问题，故这里对其他weui_btn的引用放在底部
// // 主要是button.weui_btn在weui_btn_plain下重写border-width
//
// .weui_btn {
//     &.weui_btn_mini {
//         line-height: @weuiBtnMiniHeight;
//         font-size: @weuiBtnMiniFontSize;
//         padding: 0 .75em;
//         display: inline-block;
//     }
// }
//
// button, input {
//     &.weui_btn {
//         width: 100%;
//         border-width: 0;
//         outline: 0;
//         -webkit-appearance: none;
//         &:focus {
//             outline: 0;
//         }
//     }
//     &.weui_btn_inline,&.weui_btn_mini {
//         width: auto;
//     }
// }
//
// /*gap between btn*/
// .weui_btn + .weui_btn {
//     margin-top: @weuiBtnDefaultGap;
// }
//
// .weui_btn.weui_btn_inline + .weui_btn.weui_btn_inline {
//     margin-top: auto;
//     margin-left: @weuiBtnDefaultGap;
// }
//
// .weui_btn_area {
//     margin: @weuiCellsMarginTop @weuiBtnDefaultGap .3em;
//     &.weui_btn_area_inline {
//         -webkit-display: flex;
//         display: flex;
//         .weui_btn {
//             margin-top: auto;
//             margin-right: @weuiBtnDefaultGap;
//             width: 100%;
//             -webkit-flex: 1;
//             flex: 1;
//             &:last-child {
//                 margin-right: 0;
//             }
//         }
//     }
// }

// @import "weui_btn_global";
// @import "weui_btn_default";
// @import "weui_btn_primary";
// @import "weui_btn_warn";
// @import "weui_btn_disabled";
// @import "weui_btn_plain";

</style>
