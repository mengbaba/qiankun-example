<script lang="ts" setup>
import { start } from 'qiankun'
import { onMounted} from 'vue'
import { actions } from '@/utils'
function notice(){
    actions.setGlobalState({message:'父容器传递的消息'})
}
onMounted(()=>{
    start({
        prefetch: false, // 是否预先加载
    sandbox: {
        experimentalStyleIsolation: true // 样式隔离
    }
    })
})
</script>

<template>
    <div class="layout-box">
        <div class="layout-left"></div>
        <div class="layout-container">
            <div @click="notice">通知子应用消息</div>
            <router-view />
        </div>
    </div>
</template>


<style scoped>
    .layout-box{
        width:100vw;
        height:100vh;
        display:flex;
    }

    .layout-left{
        width:200px;
        height:100%;
        background-color:red;
    }
    .layout-container{
        flex:1;
        background-color:blue;
    }
</style>