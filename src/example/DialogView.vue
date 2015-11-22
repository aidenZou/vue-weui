<template>
  <div class="page dialog">
      <div class="hd">
          <h1 class="page_title">Dialog</h1>
      </div>
      <div class="bd spacing">
          <a href="javascript:;" class="weui_btn weui_btn_primary" v-on:click="isShowConfirm=true;">点击弹出Dialog样式一</a>
          <a href="javascript:;" class="weui_btn weui_btn_primary" id="showDialog2" v-on:click="isShowAlert=true;">点击弹出Dialog样式二</a>
      </div>

      <Alert :is-show.sync="isShowAlert"></Alert>

      <Confirm :is-show.sync="isShowConfirm" title="自定义弹窗标题" content="我也可以自定义哟<br>我还支持HHTML标签呢"></Confirm>

  </div>
</template>

<script>
import Alert from '../components/dialog/Alert.vue'
import Confirm from '../components/dialog/Confirm.vue'

export default {
  name: 'DialogView',
  components:{
    Alert,
    Confirm
  },
  data(){
    return {
      isShowAlert:false,
      isShowConfirm:false
    };
  }
}
</script>
