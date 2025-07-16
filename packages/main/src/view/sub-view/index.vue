<script lang="ts" setup>
import { start } from 'qiankun'
import { onMounted } from 'vue';
onMounted(() => {
    start({
        sandbox: {
            strictStyleIsolation: false
        },
        prefetch: true,
    })
})

</script>


<template>
    <div id="sub-view"></div>
</template>

<style lang="scss" scoped>
#sub-view {
    height: 100%;
}
</style>