<template>
  <div class="weui_loading_toast">
      <div class="weui_mask_transparent"></div>
      <div class="weui_toast">
          <div class="weui_loading">
              <div v-for="n in 12" class="weui_loading_leaf" :class="'weui_loading_leaf_' + n"></div>
          </div>
          <p class="weui_toast_content">数据加载中</p>
      </div>
  </div>
</template>

<script>
/**
 * 组件外部手动关闭
 */
export default {

  name: 'Loading'
}
</script>

<style lang="less">
@import "../../style/base/fn";

</style>
