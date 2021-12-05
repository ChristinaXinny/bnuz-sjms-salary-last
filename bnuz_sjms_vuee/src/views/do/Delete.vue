<template>
<div>
    <h1 style="margin: 10px">删掉那个员工？</h1>
    <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="员工ID" prop="id" :rules="[
      { required: true, message: 'ID不能为空'},
      { type: 'number', message: 'ID必须为数字值'}
    ]">
            <el-input type="id" v-model.number="numberValidateForm.id" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="deleteById(numberValidateForm.id)">删掉</el-button>
            <el-button @click="resetForm('numberValidateForm')">重置</el-button>
        </el-form-item>
    </el-form>
</div>
</template>

<script>
    export default {
        name: "Delete",
        data() {
            return {
                numberValidateForm: {
                    id: ''
                }
            };
        },
        methods: {
            deleteById(id) {
                // alert(id)
                const _this = this
                axios.delete('http://localhost:8181/employee/delete/'+id).then(function (resp){
                    if (resp.data) {
                        _this.$message({
                            message: '删除成功',
                            type: 'success'
                        })
                    }
                    else {
                       _this.$message({
                            message: '删除失败 不存在id',
                            type: 'error'
                        })
                    }
                    console.log(resp)
                })
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>

</style>
