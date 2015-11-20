<template>
  <div class="page">
    <div class="hd">
        <h1 class="page_title">Toast</h1>
    </div>
    <div class="bd spacing">
        <!-- <a href="javascript:;" class="weui_btn weui_btn_primary" id="showToast" v-on:click="show_toast()">点击弹出Toast</a> -->
        <a href="javascript:;" class="weui_btn weui_btn_primary" v-on:click="showToast = true;">点击弹出Toast</a>
        <a href="javascript:;" class="weui_btn weui_btn_primary" v-on:click="showLoadingToast = true;">点击弹出Loading Toast</a>
    </div>

    <Toast :is-show.sync="showToast"></Toast>

    <Loading :is-show.sync="showLoadingToast"></Loading>

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
  methods: {
  }
}
</script>
