<script lang="ts" setup>
import { ref, defineProps } from 'vue'

const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
interface Menu {
    path: string  // 将key改为path
    name: string
    disabled?: boolean
    children?: Menu[]
}

interface Props {
    menus: Menu[]
}
defineProps<Props>()
</script>

<template>
    <el-menu default-active="/micro-vue/home" router class="el-menu-vertical-demo" :collapse="isCollapse"
        @open="handleOpen" @close="handleClose">
        <template v-for="item in menus" :key="item.path">
            <template v-if="item.children && item.children.length">
                <el-sub-menu :index="item.path">
                    <template #title>
                        <span>{{ item.name }}</span>
                    </template>
                    <template v-for="subItem in item.children" :key="subItem.path">
                        <template v-if="subItem.children && subItem.children.length">
                            <el-sub-menu :index="subItem.path">
                                <template #title>{{ subItem.name }}</template>
                                <el-menu-item v-for="child in subItem.children" :key="child.path" :index="child.path">
                                    {{ child.name }}
                                </el-menu-item>
                            </el-sub-menu>
                        </template>
                        <template v-else>
                            <el-menu-item :index="subItem.path" :disabled="subItem.disabled">
                                {{ subItem.name }}
                            </el-menu-item>
                        </template>
                    </template>
                </el-sub-menu>
            </template>
            <template v-else>
                <el-menu-item :index="item.path" :disabled="item.disabled">
                    {{ item.name }}
                </el-menu-item>
            </template>
        </template>
    </el-menu>
</template>

<style lang="scss" scoped>
.el-menu-vertical-demo {
    border: none;
    height: 100%;
    box-shadow: 0px 0px 5px 0px rgba($color: #cccccc, $alpha: 1);
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 130px;
}
</style>