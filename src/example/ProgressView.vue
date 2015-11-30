<template>

<div class="page progress">
    <div class="hd">
        <h1 class="page_title">Progress</h1>
    </div>
    <div class="bd spacing">
        <h3>静态</h3>
        <Progress :size="0"></Progress>
        </br>
        <Progress :size="50"></Progress>
        </br>
        <Progress :size="100"></Progress>
        </br>
        <Progress :size="50" :show-close-btn="false"></Progress>
        </br>
        <h3>自动变更</h3>
        <Progress :size="size1"></Progress>
        </br>
        <Progress :size="size2"></Progress>
        <h3>手动变更</h3>
        <Progress :size="size"></Progress>
        <a href="javascript:;" class="weui_btn weui_btn_mini weui_btn_primary" v-on:click="size=0">0%</a>
        <a href="javascript:;" class="weui_btn weui_btn_mini weui_btn_primary" v-on:click="size=50">50%</a>
        <a href="javascript:;" class="weui_btn weui_btn_mini weui_btn_primary" v-on:click="size=100">100%</a>
    </div>
</div>

</template>

<script>

import Progress from '../components/progress/Progress.vue'

export default {
    name: 'ProgressView',
    components: {
        Progress
    },
    data() {
        return {
            size: 50,
            size1: 1,
            size2: 100
        };
    },
    created() {
        //模拟
        setInterval(() => {
            this.size1 += 1;
        }, 1000);

        setInterval(() => {
            this.size2 -= 1;
        }, 500);
    }
}

</script>
