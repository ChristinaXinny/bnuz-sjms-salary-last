<template>
    <div>
        <el-main style="height: 450px">
            <el-table
                :data="employees"
                style="width: 100%">
                <el-table-column prop="empId" label="员工ID" width="80"></el-table-column>
                <el-table-column prop="name" label="姓名" width="80"></el-table-column>
                <el-table-column prop="sex" label="性别"></el-table-column>
                <el-table-column prop="age" label="年龄" width="50"></el-table-column>
                <el-table-column prop="address" label="地址"></el-table-column>
                <el-table-column prop="bankCard" label="银行卡"></el-table-column>
                <el-table-column prop="department" label="部门"></el-table-column>
                <el-table-column prop="wageCard" label="工资卡"></el-table-column>
            </el-table>
        </el-main>
        
<!--        无法实现居中。。。。-->
        <el-footer style="align-content: center; width: 100%">
            <el-pagination
                background
                layout="prev, pager, next"
                :page-size=pageSize
                :total="total"
                @current-change="page"
            >
            </el-pagination>
        </el-footer>
    
    
    </div>


</template>


<script>
    import axios from 'axios';
    
    export default {
        name: "Employee",
        
        data() {
            return {
                msg: 'hello vue',
                total: null,
                pageSize: 7,
                employees: null,
                
            }
        },
        methods: {
            //和分页里面的@cuechange="page"绑定
            //测试currPage是否成功绑定
            page(currentPage) {
                // alert(currPage);
                const _this = this
                axios.get('http://localhost:8181/employee/findAllFY/' + currentPage + '/7').then(function (resp) {
                    _this.employees = resp.data.content
                    _this.total = resp.data.totalElements
                })
            }
        },
        
        
        created() {
            const _this = this
            axios.get('http://localhost:8181/employee/findAllFY/1/7').then(function (resp) {
                _this.employees = resp.data.content
                _this.total = resp.data.totalElements
            })
            
        }
    }
</script>

<style scoped>

</style>
