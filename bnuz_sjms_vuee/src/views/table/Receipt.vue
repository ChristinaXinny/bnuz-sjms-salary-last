<template>
    
    <div>
        <h1> Receipt </h1>
        <el-table
            :data="receipt"
            style="width: 100%">
<!--            <el-table-column-->
<!--                type="index"-->
<!--                :index="indexMethod">-->
<!--            </el-table-column>-->
            <el-table-column
                prop="receiptId"
                label="编号"
                width="80">
            </el-table-column>
            <el-table-column
                prop="date"
                label="日期"
                width="180">
            </el-table-column>
            <el-table-column
                prop="abstracts"
                label="所属类型">
            </el-table-column>
            <el-table-column
                prop="subjects"
                label="所属账款">
            </el-table-column>
            <el-table-column
                prop="project"
                label="工程">
            </el-table-column>
            <el-table-column
                prop="money"
                label="金额">
            </el-table-column>
            <el-table-column
                prop="director"
                label="申报人">
            </el-table-column>
        </el-table>
        
    
    </div>
</template>

<script>
    export default {
        name: "Receipt",
        created() {
            // this.initialize()
            const _this = this
            axios.get('http://localhost:8181/receipt/findAll').then(function (resp) {
                _this.receipt = resp.data
                // _this.total = resp.data.totalElements
            })
        },
        
        data() {
            return {
                receipt: null,
                //     [
                //     {
                //         receiptId: '2016-05-02',
                //         date: '王小虎',
                //         abstracts: '上海',
                //         subjects: '普陀区',
                //         project: '上海市普陀区金沙江路 1518 弄',
                //         money: 200333,
                //         director: '家'
                // }, {
                //     date: '2016-05-04',
                //     name: '王小虎',
                //     province: '上海',
                //     city: '普陀区',
                //     address: '上海市普陀区金沙江路 1517 弄',
                //     zip: 200333,
                //     tag: '公司'
                // }, {
                //     date: '2016-05-01',
                //     name: '王小虎',
                //     province: '上海',
                //     city: '普陀区',
                //     address: '上海市普陀区金沙江路 1519 弄',
                //     zip: 200333,
                //     tag: '家'
                // }, {
                //     date: '2016-05-03',
                //     name: '王小虎',
                //     province: '上海',
                //     city: '普陀区',
                //     address: '上海市普陀区金沙江路 1516 弄',
                //     zip: 200333,
                //     tag: '公司'
                // }],
            }
        },
        methods: {
            indexMethod(index) {
                return index * 2;
            }
        },
        
    }
</script>

<style scoped>

</style>
