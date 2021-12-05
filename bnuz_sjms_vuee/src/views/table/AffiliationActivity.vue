<template>
    
    <div>
        <h1>协会活动 Activity</h1>
    
        <el-table
            :data="aff"
            style="width: 100%">
            <el-table-column
                type="index"
                :index="indexMethod">
            </el-table-column>
            <el-table-column
                prop="emAffId"
                label="活动条ID"
                width="180">
            </el-table-column>
            <el-table-column
                prop="emId"
                label="员工ID"
                width="180">
            </el-table-column>
            <el-table-column
                prop="emName"
                label="员工姓名">
            </el-table-column>
            <el-table-column
                prop="affId"
                label="协会ID">
            </el-table-column>
            <el-table-column
                prop="affName"
                label="协会姓名">
            </el-table-column>
            <el-table-column
                prop="time"
                label="时间">
            </el-table-column>
            <el-table-column
                prop="count"
                label="消费">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import axios from "axios";
    
    export default {
        name: "AffiliationActivity",
        created() {
            const _this = this
            axios.get('http://localhost:8181/affiliationCard/findAll').then(function (resp) {
                _this.aff = resp.data
                // _this.total = resp.data.totalElements
            })
        },
        data() {
            return {
                aff: [
                    {
                    emAffId: '2016-05-02',
                    emId: '王小虎',
                    emName: '上海',
                    affId: '普陀区',
                    affName: '上海市普陀区金沙江路 1518 弄',
                    time: 200333,
                    count: '家'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1517 弄',
                    zip: 200333,
                    tag: '公司'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1519 弄',
                    zip: 200333,
                    tag: '家'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1516 弄',
                    zip: 200333,
                    tag: '公司'
                }],
            }
        },
        methods: {
            indexMethod(index) {
                return (index * 1)+1;
            }
        }
    }
</script>

<style scoped>


</style>
