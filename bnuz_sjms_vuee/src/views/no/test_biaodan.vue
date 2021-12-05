<template>
    
    <div>
        <div style="margin: 10px"></div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="协会名称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="协会会费" prop="password">
                <el-input type="password" v-model.number="ruleForm.password" autocomplete="off"></el-input>
            </el-form-item>
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
        name: "test",
        data() {
            return {
                ruleForm: {
                    name: 'ddd',
                    password: 111,
                },
                rules: {
                    name: [
                        {required: true, message: '请输入协会名称', trigger: 'blur'},
                        {min: 3, max: 5, message: '名字在3～5个字', trigger: 'blur'}
                    ],
                    password: [
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
                        // alert('submit!'); // 表示中国按钮可以用
                        // console.log(_this.ruleForm) //检验拿到数据
                        // http://localhost:8181/user/save
                        axios.post('http://localhost:8181/user/save',this.ruleForm).then(function (resp){
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
