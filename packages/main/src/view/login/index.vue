<script lang="ts" setup>
import type { LoginDto } from '@/api';
import { useUserStore } from '@/stores/index'
import { reactive, ref } from 'vue';
import type { FormInstance, FormRules } from 'element-plus'
import { useMagicKeys } from '@vueuse/core'
import { useAsyncLoading } from '@/hooks'
const { enter } = useMagicKeys()
const userStore = useUserStore()
const { loading, sendRequest } = useAsyncLoading(userStore.login)
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<LoginDto>({
    username: '',
    password: ''
})
const rules = reactive<FormRules<LoginDto>>({
    username: [
        { required: true, message: 'Please input username', trigger: 'blur' },
        { min: 2, max: 20, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],
    password: [
        {
            required: true,
            message: 'Please input password',
        },
    ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate(async (valid, fields) => {
        if (valid) {
            console.log('submit!')
            try {
                await sendRequest(ruleForm)
                router.push('/')
            } catch (error) {
                resetForm(ruleFormRef.value)
            }
        } else {
            console.log('error submit!', fields)
        }
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}


watchEffect(() => {
    if (enter.value && !loading.value) {
        submitForm(ruleFormRef.value)
    }
})




</script>
<template>
    <section class="login">
        <el-card class="login-card">
            <el-form class="login-card--form" ref="ruleFormRef" :model="ruleForm" :rules="rules">
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" placeholder="请输入用户名" />
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="ruleForm.password" type="password" placeholder="请输入密码" />
                </el-form-item>
                <el-form-item>
                    <el-button :loading="loading" class="login-card--form_btn" @click="submitForm(ruleFormRef)"
                        @enter="submitForm(ruleFormRef)">
                        登陆
                    </el-button>
                </el-form-item>
                <el-form-item>
                    <el-button class="login-card--form_btn" @click="userStore.getMenuTree">
                        获取权限
                    </el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </section>
</template>

<style lang="scss" scoped>
.login {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    &-card {
        flex: 1;
        max-width: 400px;
        height: 250px;
        display: flex;
        justify-content: center;

        :deep(.el-card__body) {
            flex: 1;
            display: flex;
            align-items: center;
        }

        &--form {
            flex: 1;
            display: flex;
            flex-direction: column;

            &_btn {
                width: 300px;
                height: 50px;
                margin: 0 auto;
            }
        }
    }
}
</style>