import { defineStore } from "pinia";
import { AuthService, PermissionService, type LoginDto, type LoginVO } from '@/api'
import { computed, ref, watch } from "vue";
import { storageLocal } from "@dreamer-utils/core";
import { useRouter } from 'vue-router'
export const useUserStore = defineStore('user', () => {
    const router = useRouter()
    const info = ref<LoginVO | null>(null)
    const isLogin = ref(false)
    const token = computed(() => info.value?.token || '')
    const roles = computed(() => info.value?.roles || [])
    const login = async (data: LoginDto) => sendLogin(data)

    const logout = () => reset()

    const sendLogin = async (data: LoginDto) => {
        const res = await AuthService.authControllerLogin(data)
        info.value = res.data
        storageLocal.set('token', res.data.token)
        isLogin.value = true
    }

    const generateRouter = async () => {
        const res = await PermissionService.permissionControllerListTree()
        console.log(res)
    }

    const reset = () => {
        isLogin.value = false
        info.value = null
        storageLocal.remove('token')
    }

    watch(() => isLogin.value, (val) => {
        if (!val) {
            router.push('/')
        }
    })

    return {
        info,
        isLogin,
        token,
        roles,
        login,
        logout,
        generateRouter,
        reset,

    }
}, {
    persist: true
})