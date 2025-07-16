<script lang="ts" setup>
import { startMicroDefaultApp } from '@/micro'
import { onMounted } from 'vue'
import Menu from './components/Menu.vue'
const menus = [
    {
        name: '系统',
        path: '/micro-vue',
        children: [
            {
                name: '菜单配置',
                path: '/micro-vue/home'
            }
        ]
    },
    {
        name: '工具',
        path: '/micro-react/'
    }
]


onMounted(() => {
    startMicroDefaultApp()
})

</script>

<template>
    <div class="layout-box">
        <Menu :menus="menus"></Menu>
        <div class="layout-container">
            <router-view />
        </div>
    </div>
</template>


<style scoped>
html,
body {
    margin: 0;
    height: 100%;
}

.layout-box {
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
}

.layout-container {
    flex: 1;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    overflow-y: auto;
}
</style>