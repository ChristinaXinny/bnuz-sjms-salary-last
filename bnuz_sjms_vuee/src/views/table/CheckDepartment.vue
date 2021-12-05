<template>
    <div>
        
        <h1>Check Department</h1>
        <template>
            <el-table
                :data="department"
                style="width: 100%">
                <el-table-column
                    type="index"
                    :index="indexMethod">
                </el-table-column>
                <el-table-column
                    prop="depId"
                    label="部门ID"
                    width="120">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="部门名"
                    width="140">
                </el-table-column>
                <el-table-column
                    prop="population"
                    label="部门人数">
                </el-table-column>
                <el-table-column
                    prop="classification"
                    label="工资类型">
                </el-table-column>
                <el-table-column
                    prop="schedule"
                    label="工资计算时间"
                    width="160">
                </el-table-column>
                
                <el-table-column
                    prop="area"
                    label="地区">
                </el-table-column>
                <el-table-column
                    prop="national"
                    label="国家">
                </el-table-column>
                <el-table-column
                    prop="city"
                    label="城市">
                </el-table-column>
            </el-table>
        </template>
    </div>
</template>

<script>
    import axios from "axios";
    
    export default {
        name: "CheckDepartment",
        data() {
            return {
                department: null
                    // [
                    // {
                    //     depId: '2016-05-02',
                    //     name: '王小虎',
                    //     population: '上海',
                    //     classification: '普陀区',
                    //     schedule: '上海市普陀区金沙江路 1518 弄',
                    //     national: 200333,
                    //     area: '家',
                    //     city: '家'
                    // }, {
                    //     depId: '2016-05-04',
                    //     name: '王小虎',
                    //     population: '上海',
                    //     classification: '普陀区',
                    //     schedule: '上海市普陀区金沙江路 1517 弄',
                    //     national: 200333,
                    //     area: '公司',
                    //     city: 200333,
                    // }, {
                    //     depId: '2016-05-01',
                    //     name: '王小虎',
                    //     population: '上海',
                    //     classification: '普陀区',
                    //     schedule: '上海市普陀区金沙江路 1519 弄',
                    //     national: 200333,
                    //     area: '家',
                    //     city: '家'
                    // }, {
                    //     depId: '2016-05-03',
                    //     name: '王小虎',
                    //     population: '上海',
                    //     classification: '普陀区',
                    //     schedule: '上海市普陀区金沙江路 1516 弄',
                    //     national: 200333,
                    //     area: '公司',
                    //     city: '公司'
                    // }],
            }
        },
        methods: {
            indexMethod(index) {
                return (index * 1) + 1;
            }
        },
        
        
        created() {
            const _this = this
            axios.get('http://localhost:8181/department/findAll').then(function (resp) {
                _this.department = resp.data
            })
            
        }
        
    }
</script>

<style scoped>

</style>
