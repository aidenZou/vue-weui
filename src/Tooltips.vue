<style lang="less">

.weui_toptips {
  display: block;
}
.weui_toptips.weui_success {
  background-color: #039702;
}
</style>

<template>

<div v-show="text"
  :class="{
    'weui_toptips': true,
    'weui_warn': (type == 'warn'),
    'weui_success': (type == 'success')
  }">{{text}}</div>

</template>

<script>

export default {
    name: 'Tooltips',
    props: {
      text: {
        type: String
      },
      // 类型：warn,success
      type: {
        type: String,
        default: 'warn'

      },
      // 持续时间(毫秒)
      duration: {
        type: Number,
        default: 3000
      }
    },
    watch: {
      text(val) {
        if (this._timeout) clearTimeout(this._timeout)
        if (val && !!this.duration) {
          this._timeout = setTimeout(()=> this.text = '', this.duration)
        }
      }
    }
}

</script>
