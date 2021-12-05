<template>
    <div>
        <h1 style="margin: 10px">申请协会？？</h1>
        <div style="margin: 10px"></div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="协会名称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="协会会费" prop="expenses">
                <el-input type="expenses" v-model.number="ruleForm.expenses" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="在哪活动" prop="wheree">
                <el-select v-model="ruleForm.wheree" placeholder="请选择活动区域">
                    <el-option label="总裁办公室" value="总裁办公室"></el-option>
                    <el-option label="董事长办公室" value="董事长办公室"></el-option>
                </el-select>
            </el-form-item>
            
            <el-form-item label="马上开始" prop="delivery">
                <el-switch></el-switch>
            </el-form-item>
            <el-form-item label="协会干啥" prop="how">
                <el-checkbox-group v-model="ruleForm.how">
                    <el-checkbox label="美食线上活动" name="how" value="美食线上活动"></el-checkbox>
                    <el-checkbox label="建林造屋埋地雷活动" name="how" value="建林造屋埋地雷活动"></el-checkbox>
                    <el-checkbox label="线下王者活动" name="how" value="线下王者活动"></el-checkbox>
                    <el-checkbox label="单纯拆电脑活动" name="how" value="单纯拆电脑活动"></el-checkbox>
                    <el-checkbox label="非常砸代码活动" name="how" value="非常砸代码活动"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="特殊资源" prop="resource">
                <el-radio-group v-model="ruleForm.resource">
                    <el-radio label="线上品牌特别赞助【胡萝北有限公司倾情相助】" value="线上品牌特别赞助【胡萝北有限公司倾情相助】"></el-radio>
                    <el-radio label="线下场地免费使用【大佬的办公室随便用】" value="线下场地免费使用【大佬的办公室随便用】"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="协会简介" prop="describee">
                <el-input type="describee" v-model="ruleForm.describee"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" :plain="true" @click="submitForm('ruleForm')">立即创建
                </el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    
    </div>
</template>

<script>``
    export default {
        name: "Creat",
        data() {
            return {
                ruleFormThis:{
                    name: '',
                    wheree: '',
                    expenses: '',
                    how: '',
                    resource: '',
                    describee: ''
                },
                ruleForm: {
                    name: '',
                    wheree: '',
                    expenses: '',
                    delivery: false,
                    how: [],
                    resource: '',
                    describee: ''
                },
                rules: {
                    name: [
                        {required: true, message: '请输入协会名称', trigger: 'blur'},
                        {min: 1, max: 20, message: '名字在1～20个字', trigger: 'blur'}
                    ],
                    expenses: [
                        { required: true, message: '请输入会费'},
                        { type: 'number', message: '请输入合法的整数金额'},
                    ],
                    wheree: [
                        {required: true, message: '请选择在哪里举行协会活动', trigger: 'change'}
                    ],
    
                    how: [
                        {type: 'array', required: true, message: '请至少选择一个性质', trigger: 'change'}
                    ],
                    resource: [
                        {required: true, message: '请选择协会有哪些资源', trigger: 'change'}
                    ],
                    describee: [
                        {required: true, message: '请填写协会的介绍', trigger: 'blur'}
                    ]
                }
            };
        },
        methods: {
    
            submitForm(formName) {
                const _this = this
                this.ruleFormThis.how = this.ruleForm.how.toString()
                this.ruleFormThis.describee = this.ruleForm.describee
                this.ruleFormThis.expenses = this.ruleForm.expenses
                this.ruleFormThis.name = this.ruleForm.name
                this.ruleFormThis.resource=this.ruleForm.resource
                this.ruleFormThis.wheree = this.ruleForm.wheree
                console.log(this.ruleFormThis.how)
                console.log(this.ruleForm.how)
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        axios.post('http://localhost:8181/affiliation/save',this.ruleFormThis).then(function (resp){
                            console.log(resp)
                        })
                        console.log(_this.ruleFormThis)
                        this.$message({
                            message: '恭喜你，创建成功',
                            type: 'success'
                        });
                    } else {
                        this.$message.error('错了哦，没创建成功');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
        }
    }
</script>

<style scoped>

</style>
