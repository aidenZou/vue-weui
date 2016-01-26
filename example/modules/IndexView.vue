<template>
  <div class="page" transition="app">
    <div class="hd">
        <h1 class="page_title">WeUI</h1>
        <p class="page_desc">为微信Web服务量身设计</p>
    </div>
    <div class="bd">
      <Grid :items="items"></Grid>
    </div>
    <div class="bd">
      <List :items="items"></List>
    </div>
</div>
</template>

<script>

import icon_nav_button from '../images/icon_nav_button.png';
import icon_nav_cell from '../images/icon_nav_cell.png';
import icon_nav_toast from '../images/icon_nav_toast.png';
import icon_nav_dialog from '../images/icon_nav_dialog.png';
import icon_nav_msg from '../images/icon_nav_msg.png';
import icon_nav_article from '../images/icon_nav_article.png';
import icon_nav_actionSheet from '../images/icon_nav_actionSheet.png';
import icon_nav_icons from '../images/icon_nav_icons.png';

import Grid from './../../src/Grid.vue'
import List from './../../src/List.vue'

export default {

  name: 'IndexView',

  components: {
    Grid,
    List
  },

  data () {
    return {
      items: [{
        link: 'button',
        img: icon_nav_button,
        text: 'Button'
      }, {
        link: 'cell',
        img: icon_nav_cell,
        text: 'Cell'
      }, {
        link: 'toast',
        img: icon_nav_toast,
        text: 'Toast'
      }, {
        link: 'dialog',
        img: icon_nav_dialog,
        text: 'Dialog'
      }, {
        link: 'progress',
        img: icon_nav_button,
        text: 'Progress'
      }, {
        link: 'msg',
        img: icon_nav_msg,
        text: 'Msg'
      }, {
        link: 'article',
        img: icon_nav_article,
        text: 'Article'
      }, {
        link: 'actionsheet',
        img: icon_nav_actionSheet,
        text: 'ActionSheet'
      }, {
        link: 'icons',
        img: icon_nav_icons,
        text: 'Icons'
      }]
    }
  },

  route: {
    data ({ to }) {
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
  }
}
</script>

<style lang="stylus">

</style>
