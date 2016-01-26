<template>
  <div v-show="show">
      <div class="weui_mask_transparent"></div>
      <div class="weui_toast">
          <i class="weui_icon_toast"></i>
          <p class="weui_toast_content"><slot>已完成</slot></p>
      </div>
  </div>
</template>

<script>
import Icon from './Icon.vue'

/**
 * 组件内部自动关闭
 */
export default {

  name: 'Toast',
  props: {
    show: {
      type: Boolean,
      required: true,
      default: false,
      twoWay: true
    },
    // 类型：暂不提供
    type: {
      type: String
      // default:

    },
    // 持续时间(毫秒)
    duration: {
      type: Number,
      default: 3000
    }
  },
  watch: {
    show(val) {
      if (this._timeout) clearTimeout(this._timeout)
      if (val && !!this.duration) {
        this._timeout = setTimeout(()=> this.show = false, this.duration)
      }
    }
  }
}
</script>

<style lang="less">

@import "./style/widget/weui_tips/weui_toast";

</style>
