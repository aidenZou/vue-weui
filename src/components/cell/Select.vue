<template>

<select class="weui_select" v-model="selected">
    <option v-for="(index, option) in options" :value="index + 1">{{option}}</option>
</select>

</template>

<script>

export default {
    props: {
        selected: {
            type: null,
            required: true,
            //指定这个 prop 为双向绑定
            //如果绑定类型不对将抛出一条警告
            twoWay: true
        },
        options: {
            type: Array,
            required: true
        }
    }
}

</script>
