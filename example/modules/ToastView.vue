<template>
  <div class="page toast">
    <div class="hd">
        <h1 class="page_title">Toast</h1>
    </div>
    <div class="bd spacing">
        <!-- <a href="javascript:;" class="weui_btn weui_btn_primary" id="showToast" v-on:click="show_toast()">点击弹出Toast</a> -->
        <a href="javascript:;" class="weui_btn weui_btn_primary" v-on:click="showToast = true;">点击弹出Toast(手动关闭)</a>
        <a href="javascript:;" class="weui_btn weui_btn_primary" v-on:click="showToast3000 = true;">点击弹出Toast(持续300毫秒)</a>
        <a href="javascript:;" class="weui_btn weui_btn_primary" v-on:click="showLoadingToast = true;">点击弹出Loading Toast</a>
    </div>

    <Toast :show.sync="showToast" :duration="0"></Toast>
    <Toast :show.sync="showToast3000" :duration="3000">我只持续3秒哦</Toast>

    <Loading v-show="showLoadingToast"></Loading>

  </div>
</template>

<script>

import Toast from './../../src/Toast.vue'
import Loading from './../../src/Loading.vue'

export default {
  name: 'ToastView',
  components: {
    Toast,
    Loading
  },
  data(){
    return {
      showToast: false,
      showToast3000: false,
      showLoadingToast: false
    }
  },
  created(){
    //模拟关闭
    this.$watch('showLoadingToast', function (newVal, oldVal) {
      var _t = setTimeout(() => {
        this.showLoadingToast = false;
        clearTimeout(_t);
      }, 3000);
    })
  },
  methods: {
  }
}
</script>
