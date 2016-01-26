<style lang="less">

@import "./style/widget/weui_tips/weui_dialog";

</style>

<template>

<div :class="'weui_dialog_' + type" v-show="show">
    <div class="weui_mask"></div>
    <div class="weui_dialog">
        <div class="weui_dialog_hd">
            <strong class="weui_dialog_title">{{title}}</strong>
        </div>
        <div class="weui_dialog_bd">
            <slot>请注意，这里可以自定义(支持html)</slot>
        </div>
        <div class="weui_dialog_ft">
            <a href="javascript:;" class="weui_btn_dialog default" v-if="type === 'confirm'" @click="dispatch($event,  'on-' + type + '-cancel')">{{cancelBtn}}</a>
            <a href="javascript:;" class="weui_btn_dialog primary" @click="dispatch($event, 'on-' + type + '-confirm')">{{confirmBtn}}</a>
        </div>
    </div>
</div>

</template>

<script>

export default {
    name: 'Dialog',
    props: {
        //类型：alert,confirm
        type: {
            type: String,
            required: false,
            default: 'alert'
        },
        //标题
        title: {
            type: String,
            required: false,
            default: '温馨提示'
        },
        show: {
            type: Boolean,
            required: true,
            default: true
        },
        cancelBtn: {
            type: String,
            required: false,
            default: '取消'
        },
        confirmBtn: {
            type: String,
            required: false,
            default: '确定'
        }
    },
    methods: {
        // cancel() {
        //     this.show = false;
        // },
        // confirm() {
        //     this.show = false;
        // }，
        dispatch(event, eventStr) {
            this.$dispatch(eventStr);
            // this.show = false;
        }
    }
}

</script>
