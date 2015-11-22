<template>
  <div class="page icons">
      <div class="hd">
          <h1 class="page_title">Icons</h1>
      </div>
      <div class="bd spacing">
          <i class="weui_icon_msg weui_icon_success"></i>
          <i class="weui_icon_msg weui_icon_info"></i>
          <i class="weui_icon_msg weui_icon_warn"></i>
          <i class="weui_icon_msg weui_icon_waiting"></i>
          <i class="weui_icon_safe weui_icon_safe_success"></i>
          <i class="weui_icon_safe weui_icon_safe_warn"></i>
          <div class="icon_sp_area">
              <i class="weui_icon_success"></i>
              <i class="weui_icon_success_circle"></i>
              <i class="weui_icon_success_no_circle"></i>
              <i class="weui_icon_info"></i>
              <i class="weui_icon_waiting"></i>
              <i class="weui_icon_waiting_circle"></i>
              <i class="weui_icon_circle"></i>
              <i class="weui_icon_warn"></i>
              <i class="weui_icon_download"></i>
              <i class="weui_icon_info_circle"></i>
              <i class="weui_icon_cancel"></i>
          </div>
      </div>
  </div>
</template>

<script>
import Icon from '../components/icon/Icon.vue'

export default {
  name: 'IconsView',
  components:{
    // Icon
  }
}
</script>
