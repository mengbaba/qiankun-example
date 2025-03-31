<script lang="ts" setup>
import { actions } from '@/utils'
function notice(){
    actions.setGlobalState({message:'父容器传递的消息'})
}

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