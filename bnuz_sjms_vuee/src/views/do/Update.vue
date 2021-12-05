<template>
    <div>
        <h1 style="margin: 10px">修改密码？【请问记得旧密码嘛？？】</h1>
        
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="账号" prop="id">
                <el-input v-model.number="ruleForm.id"></el-input>
            </el-form-item>
            <el-form-item label="旧的密码" prop="old">
                <el-input v-model.number="ruleForm.old"></el-input>
            </el-form-item>
            <el-form-item label="新的密码" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="再输一次" prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            
            <el-form-item>
                <el-button type="primary" @click="update('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "Update",
        data() {
            var checkOld = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('密码不能为空'));
                }
                setTimeout(() => {
                    if (!Number.isInteger(value)) {
                        callback(new Error('请输入密码'));
                    } else {
                        if (value < 1) {
                            callback(new Error('长度大于1'));
                        } else {
                            callback();
                        }
                    }
                }, 1000);
            };
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                ruleForm: {
                    id: '',
                    old: '',
                    pass: '',
                    checkPass: '',
                },
                ruleFormThis: {
                    id: '',
                    password: '',
                },
                rules: {
                    pass: [
                        {validator: validatePass, trigger: 'blur'}
                    ],
                    checkPass: [
                        {validator: validatePass2, trigger: 'blur'}
                    ],
                    old: [
                        {validator: checkOld, trigger: 'blur'}
                    ],
                    id: [],
                }
            };
        },
        
        created() {
        
        },
        methods: {
            update(formName) {
                const _this=this
                this.ruleFormThis.id = this.ruleForm.id
                this.ruleFormThis.password = this.ruleForm.pass
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        axios.post('http://localhost:8181/user/update',this.ruleFormThis).then(function (resp){
                        console.log(resp)
                        
                        })
                        console.log(_this.ruleFormThis)
                        this.$message({
                            message: '恭喜你，改密码成功',
                            type: 'success'
                        });
                    } else {
                        this.$message.error('错了哦，没有改到密码');
                        return false;
                    }
                })
                
                // axios.post('http://localhost:8181/user/update', this.ruleFormThis).then(function (resp) {
                //     console.log(resp)
                //     if (resp.data == true) {
                //         this.$message({
                //             message: '恭喜你，创建成功',
                //             type: 'success'
                //         });
                //     } else {
                //         this.$message.error('错了哦，没创建成功');
                //         return false;
                //     }
                //     console.log(resp)
                // })
                // this.$refs[formName].validate((valid) => {
                //     if (valid) {
                //         alert('submit!');
                //     } else {
                //         console.log('error submit!!');
                //         return false;
                //     }
                // });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>

</style>
