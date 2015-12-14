<style lang="less">

</style>

<template>

<div class="weui_toptips weui_warn" :style="{display: 'block'}"><slot></slot></div>

</template>

<script>

export default {
    name: 'Tooltips',
    props: {
        // show: {
        //     type: Boolean,
        //     required: false,
        //     default: false
        // }
    },
    created() {
        // this.$watch('show', function(newVal, oldVal) {
        //     if (newVal) {
        //         let _t = setTimeout(() => {
        //             this.show = false;
        //             clearTimeout(_t);
        //         }, 3000);
        //     }
        // })
    }
}

</script>
