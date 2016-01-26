<style lang="less">

@import "./style/widget/weui_progress/weui_progress";

</style>

<template>

<div v-if="show" class="weui_progress">
    <div class="weui_progress_bar">
        <div class="weui_progress_inner_bar" :style="{ width: size + '%' }"></div>
    </div>
    <a v-if="showCloseBtn" href="javascript:;" class="weui_progress_opr" @click="dispatch('on-progress-cancel')">
        <i class="weui_icon_cancel"></i>
    </a>
</div>

</template>

<script>

import Icon from './Icon.vue'

export default {
    name: 'Progress',
    props: {
        //进度条长度:[1~100]
        size: {
            // type:Number,
            default: 0,
            //TODO size=0 bug
            // validator: function (value) {
            //   // console.log(value)
            //   if(value < 0){
            //     return false;
            //   }
            //   if(value > 100){
            //     return false;
            //   }
            //   return value;
            // }
        },
        showCloseBtn: {
            type: Boolean,
            required: false,
            default: true
        }
    },
    data() {
        return {
            show: true
        };
    },
    methods: {
        dispatch(event, eventStr) {
            this.$dispatch(eventStr);
            this.show = false;
        }
    }
}

</script>
