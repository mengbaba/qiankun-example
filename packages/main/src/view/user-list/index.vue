<script lang="ts" setup>
import { UserService } from '@/api'
import { onMounted } from 'vue';
const tableData = ref([])
const getList = async () => {
    const res = await UserService.userControllerFindAll({})
    res

}
onMounted(() => {

})

</script>


<template>
    <el-card style="min-width: 480px">
        <el-table :data="tableData" style="width: 100%" height="250">
            <el-table-column fixed prop="date" label="Date" width="150" />
            <el-table-column prop="name" label="Name" width="120" />
            <el-table-column prop="state" label="State" width="120" />
            <el-table-column prop="city" label="City" width="320" />
            <el-table-column prop="address" label="Address" width="600" />
            <el-table-column prop="zip" label="Zip" />
            <el-table-column fixed="right" label="Operations" min-width="120">
                <template #default="scope">
                    <el-button link type="primary" size="small">

                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-card>
</template>