<template>

<div class="page dialog">
    <div class="hd">
        <h1 class="page_title">Dialog</h1>
    </div>
    <div class="bd spacing">
        <a href="javascript:;" class="weui_btn weui_btn_primary" v-on:click="showAlert=true;">点击弹出Dialog Alert</a>
        <a href="javascript:;" class="weui_btn weui_btn_primary" v-on:click="showConfirm=true;">点击弹出Dialog Confirm</a>
    </div>

    <Dialog :show.sync="showAlert"></Dialog>

    <Dialog :show.sync="showConfirm" type="confirm" title="弹窗标题">
        自定义弹窗内容
        <br> ...
    </Dialog>

</div>

</template>

<script>

import Dialog from '../components/dialog/Dialog.vue'

export default {
    name: 'DialogView',
    components: {
        Dialog
        // Button
    },
    data() {
        return {
            showAlert: false,
            showConfirm: false
        };
    },
    created() {
        this.$on('on-alert-confirm', function() {
            this.showAlert = false;
        });
        this.$on('on-confirm-cancel', function() {
            alert('你是要取消吗？这不太好吧');
            // this.showConfirm = false;
        });
        this.$on('on-confirm-confirm', function() {
            // this.showAlert = true;
            alert('恩，这才乖嘛！');
            this.showConfirm = false;
        })
    }
}

</script>
