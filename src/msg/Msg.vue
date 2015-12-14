<template>
  <div class="weui_msg">
      <div class="weui_icon_area"><i class="weui_icon_success weui_icon_msg"></i></div>
      <div class="weui_text_area">
          <h2 class="weui_msg_title">操作成功</h2>
          <p class="weui_msg_desc">内容详情，可根据实际需要安排</p>
      </div>
      <div class="weui_opr_area">
          <p class="weui_btn_area">
              <a href="javascript:;" class="weui_btn weui_btn_primary">确定</a>
              <a href="javascript:;" class="weui_btn weui_btn_default">取消</a>
          </p>
      </div>
      <div class="weui_extra_area">
          <a href="">查看详情</a>
      </div>
  </div>
</template>

<script>
// Button

export default {
  name: 'Msg',
  props: {

  }
}
</script>

<style lang="less">
@import "../../style/base/fn";
// @import "../weui_button";

.weui_msg {
    padding-top: @weuiMsgPaddingTop;
    text-align: center;

    .weui_icon_area {
        margin-bottom: @weuiMsgIconGap;
    }

    .weui_text_area {
        margin-bottom: @weuiMsgTextGap;
        padding:0 20px;
    }
    .weui_msg_title {
        margin-bottom: @weuiMsgTitleGap;
        font-weight: 400;
        font-size: 20px;
    }
    .weui_msg_desc {
        font-size: 14px;
        color: @globalTextColor;
    }

    .weui_opr_area {
        margin-bottom: @weuiMsgOprGap;
    }

    .weui_extra_area {
        margin-bottom: @weuiMsgExtraAreaGap;
        font-size: 14px;
        color: @globalTextColor;
        a{color: @globalLinkColor;}
    }
}

@media screen and (min-height: @weuiMsgExtraAreaOfMinHeight) {
    .weui_extra_area {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        text-align: center;
    }
}
</style>
