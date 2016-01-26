<style lang="less">

@import "./style/widget/weui_grid/weui_grid";

</style>

<template>

<div class="weui_grids">
  <a class="weui_grid js_grid" v-for="item in items" v-link="item.link">
    <div class="weui_grid_icon">
      <img :src="item.img" alt="">
    </div>
    <p class="weui_grid_label">{{ item.text }}</p>
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
