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
