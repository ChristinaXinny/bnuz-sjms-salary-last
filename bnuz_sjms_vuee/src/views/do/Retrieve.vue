<template>
    <!--Retrieve:查询-->
    
    <div>
        <h1 style="margin: 10px">Retrieve:查询</h1>
        <template>
            <el-form :model="em" ref="id" label-width="100px" class="demo-ruleForm">
                <el-form-item label="员工id" prop="id" style="width: 400px">
                    <el-input v-model="em.empId"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" plain @click="find(em.empId)">查找</el-button>
                </el-form-item>
            </el-form>
        </template>
        <el-table
            :data="em"
            style="width: 100%">
            <el-table-column prop="empId" label="员工ID" ></el-table-column>
            <el-table-column prop="name" label="姓名" ></el-table-column>
            <el-table-column prop="sex" label="性别"  ></el-table-column>
            <el-table-column prop="age" label="年龄" ></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
            <el-table-column prop="bankCard" label="银行卡"></el-table-column>
            <el-table-column prop="department" label="部门"></el-table-column>
            <el-table-column prop="wageCard" label="工资卡"></el-table-column>
        </el-table>
    
    </div>
</template>

<script>
    import axios from "axios";
    
    export default {
        name: "Retrieve",
        data() {
            return {
                id: '',
                emp:{
                    empId:'',
                    name:'',
                    sex:'',
                    age:'',
                    address:'',
                    bankCard:'',
                    department:'',
                    wageCard:'',
                },
                em:{
                    empId:'',
                    name:'',
                    sex:'',
                    age:'',
                    address:'',
                    bankCard:'',
                    department:'',
                    wageCard:'',
                },
            }
        },
        methods: {
            find(value) {
                // alert(value)
                const _this = this
                axios.get('http://localhost:8181/employee/findById/'+value).then(function (resp) {
                    console.log(resp)
                    _this.em = resp.data
                })
                
            },
        },
        created() {
            const _this = this
            axios.get('http://localhost:8181/employee/findAll').then(function (resp) {
                _this.em = resp.data

            })
        }
    }
</script>

<style scoped>

</style>
