<style lang="less">

@import "./style/widget/weui_grid/weui_grid";

</style>

<template>

<div class="weui_cells weui_cells_access global_navs">
  <a class="weui_cell js_cell" v-for="item in items" v-link="item.link">
    <span class="weui_cell_hd"><img :src="item.img" class="icon_nav" alt=""></span>
    <div class="weui_cell_bd weui_cell_primary">
        <p>{{ item.text }}</p>
    </div>
    <div class="weui_cell_ft">
    </div>
  </a>
</div>

</template>

<script>

export default {
  props: {
    items: {
      type: Array,
      required: true,
      default: []
    },
  },
}

</script>
