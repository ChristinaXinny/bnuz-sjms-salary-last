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
                <template slot-scope="scope">
                    <el-button type="primary" icon="el-icon-edit" circle @click="update"></el-button>
                    <el-button type="danger" icon="el-icon-delete" circle @click="delete(scope.row)"></el-button>
                </template>
            </el-table>
        
        </el-main>
        
        <!--        无法实现居中。。。。-->
        <el-footer style="align-content: center; width: 100%; margin: 20px">
            
            <el-pagination background layout="prev, pager, next" :page-size=pageSize :total="total"
                           @current-change="page"
            >
            </el-pagination>
        
        </el-footer>
        
        <!--        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign" v-model="dialog">-->
        <!--            <el-form-item label="名称">-->
        <!--                <el-input v-model="formLabelAlign.name"></el-input>-->
        <!--            </el-form-item>-->
        <!--            <el-form-item label="活动区域">-->
        <!--                <el-input v-model="formLabelAlign.region"></el-input>-->
        <!--            </el-form-item>-->
        <!--            <el-form-item label="活动形式">-->
        <!--                <el-input v-model="formLabelAlign.type"></el-input>-->
        <!--            </el-form-item>-->
        <!--        </el-form>-->
        <!--    -->
    
    
    </div>
</template>

<script>
    import axios from "axios";
    
    export default {
        name: "Change",
        
        data() {
            return {
                msg: 'hello vue',
                total: null,
                pageSize: 7,
                employees: null,
                dialog: false,
                labelPosition: 'right',
                formLabelAlign: {
                    name: '',
                    region: '',
                    type: ''
                },
                // dialog:
                
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
            },
            
            delete(row) {
            
            },
            update(employees) {
                this.c = true
                this.$prompt('', '修改', {
                    confirmButtonText: '保存',
                    cancelButtonText: '取消',
                    
                    // inputPattern: 'dd',
                    inputPattern: 'dd',
                    
                    
                    // inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
                    inputErrorMessage: '邮箱格式不正确'
                }).then(({value}) => {
                    this.$message({
                        type: 'success',
                        message: '你的邮箱是: ' + value
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消输入'
                    });
                });
                
                const _this = this
                axios.get('http://localhost:8181/employee/findAllFY/' + currentPage + '/7').then(function (resp) {
                    _this.employees = resp.data.content
                    _this.total = resp.data.totalElements
                })
            }
            
        },
        watch: {
            dialog(val) {
                val || this.close()
            },
            // dialogDelete(val) {
            //     val || this.closeDelete()
            // },
        },
        
        
        created() {
            const _this = this
            axios.get('http://localhost:8181/employee/findAllFY/1/7', this.employees).then(function (resp) {
                _this.employees = resp.data.content
                _this.total = resp.data.totalElements
                
            })
        }
    }

</script>

<style scoped>

</style>
