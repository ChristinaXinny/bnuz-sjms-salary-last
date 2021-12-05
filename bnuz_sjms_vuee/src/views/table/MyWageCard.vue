<template>
    <div>
        <h1 style="float: left; margin-left: 0px">我的工资卡</h1>
        <div class="block" style=" float: right">
            <el-date-picker
                v-model="value1"
                type="date"
                placeholder="选择日期">
            </el-date-picker>
        </div>
        
        
        <el-table
            :data="wageCards"
            stripe
            style="width: 100%">
            <!-- prop的字段是和springboot的bean中的字段匹配 不是和sql的-->
            <el-table-column
            prop="slipId"
            label="工资条id"
            >
            </el-table-column>
            <el-table-column
                prop="cardId"
                label="工资卡id"
               >
            </el-table-column>
            <el-table-column
                prop="grossPay"
                label="赚了的钱"
                >
            </el-table-column>
            <el-table-column
                prop="cutPay"
                label="扣除的钱">
            </el-table-column>
            <el-table-column
                prop="realPay"
                label="实际的工资">
            </el-table-column>
            <el-table-column
                prop="periodStart"
                label="开始计算时间">
            </el-table-column>
            <el-table-column
                prop="periodEnd"
                label="结束计算时间">
            </el-table-column>
        
        </el-table>
    </div>
</template>


<script>
    import axios from "axios";
    
    export default {
        name: "MyWageCard",
        data() {
            return {
                wageCards: [
                
                ],
                value1: '',
            }
        },
        
        created() {
            // alert(1233);
            const _this = this
            axios.get('http://localhost:8181/wageCard/findAll').then(function (resp) {
                // if( resp.data.emp_id = _this.emp_id) {
                //
                // }
                _this.wageCards = resp.data
            })
        },
        methods: {
            //和分页里面的@cuechange="page"绑定
            //测试currPage是否成功绑定
            page(currPage) {
                // alert(currPage);
                
            }
        }
        
    }
</script>

<style scoped>
    .el-table .warning-row {
        background: oldlace;
    }
    
    .el-table .success-row {
        background: #f0f9eb;
    }
</style>

