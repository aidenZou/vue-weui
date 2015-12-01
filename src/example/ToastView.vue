<template>
  <div class="page toast">
    <div class="hd">
        <h1 class="page_title">Toast</h1>
    </div>
    <div class="bd spacing">
        <!-- <a href="javascript:;" class="weui_btn weui_btn_primary" id="showToast" v-on:click="show_toast()">点击弹出Toast</a> -->
        <a href="javascript:;" class="weui_btn weui_btn_primary" v-on:click="showToast = true;">点击弹出Toast</a>
        <a href="javascript:;" class="weui_btn weui_btn_primary" v-on:click="showLoadingToast = true;">点击弹出Loading Toast</a>
    </div>

    <Toast :show.sync="showToast"></Toast>

    <Loading v-show="showLoadingToast"></Loading>

  </div>
</template>

<script>

import Toast from '../components/toast/Toast.vue'
import Loading from '../components/toast/Loading.vue'

export default {
  name: 'ToastView',
  components: {
    Toast,
    Loading
  },
  data(){
    return {
      showToast:false,
      showLoadingToast:false
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
