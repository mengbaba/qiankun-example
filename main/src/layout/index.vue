<script lang="ts" setup>
import { start } from 'qiankun'
import { onMounted} from 'vue'
import { actions } from '@/utils'
const menus = [{
    name:'vue3子应用',
    key:'micro-vue'
},{
     name:'react子应用',
    key:'micro-react'
}]

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
        <div class="layout-left">
            <div v-for="item in menus" :key="item.key" @click="$router.push(`/${item.key}`)">{{item.name}}</div>
        </div>
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
        display:flex;
        flex-direction:column;
        border-right:1px solid #f5f5f5;

    }
    .layout-left div {
        text-align:center;
        height:40px;
        line-height:40px;
        cursor:pointer;
        transition: color 0.3s;
        &:hover {
            color:red;
        }
    }
    .layout-container{
        flex:1;
        /* background-color:blue; */
    }
</style>