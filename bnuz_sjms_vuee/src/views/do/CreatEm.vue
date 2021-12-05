<template>
    <div>
        <div style="margin: 10px"></div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="协会名称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
<!--            <el-form-item label="协会会费" prop="age">-->
<!--                <el-input type="age" v-model.number="ruleForm.age" autocomplete="off"></el-input>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="sex" >-->
<!--                <el-input v-model="ruleForm.sex"></el-input>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="address" >-->
<!--                <el-input v-model="ruleForm.address"></el-input>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="bankCard" >-->
<!--                <el-input v-model="ruleForm.bankCard"></el-input>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="department" >-->
<!--                <el-input v-model="ruleForm.department"></el-input>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="wageCard" >-->
<!--                <el-input v-model="ruleForm.wageCard"></el-input>-->
<!--            </el-form-item>-->
            
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
                <el-button @click="test">test</el-button>
            </el-form-item>
        
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "CreatEm",
        data() {
            return {
                ruleForm: {
                    name: 'ww',
                    // age: 8,
                    // sex:'ww',
                    // address:'ww',
                    // bankCard:'ww',
                    // department:'ww',
                    // wageCard:'ww',
                },
                rules: {
                    name: [
                        {required: true, message: '请输入协会名称', trigger: 'blur'},
                        {min: 0, max: 20, message: '名字在0～20个字', trigger: 'blur'}
                    ],
                    age: [
                        { required: true, message: '请输入会费'},
                        { type: 'number', message: '请输入合法的整数金额'},
                    ],
                
                }
            };
        },
        methods: {
            test(){
                console.log(this.ruleForm)
            },
            
        
            submitForm(formName) {
                const _this = this
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        axios.post('http://localhost:8181/employee/update',this.ruleForm).then(function (resp){
                            console.log(resp)
                        })
                        console.log(_this.ruleForm)
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>

</style>
