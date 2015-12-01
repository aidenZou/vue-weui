<template>
  <div class="page">
    <div class="hd">
        <h1 class="page_title">WeUI</h1>
        <p class="page_desc">为微信Web服务量身设计</p>
    </div>
    <div class="bd">
        <div class="weui_cells weui_cells_access global_navs">
            <!-- <a v-link="{ name: 'user', params: { userId: 123 }}">User</a> -->
            <a class="weui_cell js_cell" v-link="'button'" data-id="cell">
                <span class="weui_cell_hd"><img src="../../images/icon_nav_button.png" class="icon_nav" alt=""></span>
                <div class="weui_cell_bd weui_cell_primary">
                    <p>Button</p>
                </div>
                <div class="weui_cell_ft">
                </div>
            </a>
            <a class="weui_cell js_cell" v-link="'cell'" data-id="cell">
                <span class="weui_cell_hd"><img src="../../images/icon_nav_cell.png" class="icon_nav" alt=""></span>
                <div class="weui_cell_bd weui_cell_primary">
                    <p>Cell</p>
                </div>
                <div class="weui_cell_ft">
                </div>
            </a>
            <a class="weui_cell js_cell" v-link="'toast'" data-id="toast">
                <span class="weui_cell_hd"><img src="../../images/icon_nav_toast.png" class="icon_nav" alt=""></span>
                <div class="weui_cell_bd weui_cell_primary">
                    <p>Toast</p>
                </div>
                <div class="weui_cell_ft">
                </div>
            </a>
            <a class="weui_cell js_cell" v-link="'dialog'" href="javascript:;" data-id="dialog">
                <span class="weui_cell_hd"><img src="../../images/icon_nav_dialog.png" class="icon_nav" alt=""></span>
                <div class="weui_cell_bd weui_cell_primary">
                    <p>Dialog</p>
                </div>
                <div class="weui_cell_ft">
                </div>
            </a>
            <a class="weui_cell js_cell" v-link="'progress'" data-id="progress">
                <span class="weui_cell_hd"><img src="../../images/icon_nav_button.png" class="icon_nav" alt=""></span>
                <div class="weui_cell_bd weui_cell_primary">
                    <p>Progress</p>
                </div>
                <div class="weui_cell_ft">
                </div>
            </a>
            <a class="weui_cell js_cell" v-link="'msg'" data-id="msg">
                <span class="weui_cell_hd"><img src="../../images/icon_nav_msg.png" class="icon_nav" alt=""></span>
                <div class="weui_cell_bd weui_cell_primary">
                    <p>Msg Page</p>
                </div>
                <div class="weui_cell_ft">
                </div>
            </a>
            <a class="weui_cell js_cell" v-link="'article'" data-id="article">
                <span class="weui_cell_hd"><img src="../../images/icon_nav_article.png" class="icon_nav" alt=""></span>
                <div class="weui_cell_bd weui_cell_primary">
                    <p>Article Page</p>
                </div>
                <div class="weui_cell_ft">
                </div>
            </a>
            <a class="weui_cell js_cell" v-link="'actionsheet'" data-id="actionSheet">
                <span class="weui_cell_hd"><img src="../../images/icon_nav_actionSheet.png" class="icon_nav" alt=""></span>
                <div class="weui_cell_bd weui_cell_primary">
                    <p>ActionSheet</p>
                </div>
                <div class="weui_cell_ft">
                </div>
            </a>
            <a class="weui_cell js_cell" v-link="'icons'" data-id="icons">
                <span class="weui_cell_hd"><img src="../../images/icon_nav_icons.png" class="icon_nav" alt=""></span>
                <div class="weui_cell_bd weui_cell_primary">
                    <p>Icons</p>
                </div>
                <div class="weui_cell_ft">
                </div>
            </a>
        </div>
    </div>
</div>
</template>

<script>
// import store from '../store'
// import Item from './Item.vue'

export default {

  name: 'IndexView',

  components: {
    // Item
  },

  data () {
    return {
      // page: 1,
      // items: []
    }
  },

  route: {
    data ({ to }) {
      // This is the route data hook. It gets called every time the route
      // changes while this component is active.
      //
      // What we are doing:
      //
      // 1. Get the `to` route using ES2015 argument destructuring;
      // 2. Get the `page` param and cast it to a Number;
      // 3. Fetch the items from the store, which returns a Promise containing
      //    the fetched items;
      // 4. Chain the Promise and return the final data for the component.
      //    Note we are waiting until the items are resolved before resolving
      //    the entire object, because we don't want to update the page before
      //    the items are fetched.
      const page = +to.params.page
      // return store.fetchItemsByPage(page).then(items => ({
      //   page,
      //   items
      // }))
    }
  },

  created () {
    // store.on('topstories-updated', this.update)
  },

  destroyed () {
    // store.removeListener('topstories-updated', this.update)
  },

  methods: {
    update () {
      // store.fetchItemsByPage(this.page).then(items => {
      //   this.items = items
      // })
    }
  },

  filters: {
    formatItemIndex (index) {
      return (this.page - 1) * store.storiesPerPage + index + 1
    }
  }
}
</script>

<style lang="stylus">

</style>
