<template>
    
    
    
    <div>
        <h1>All Affiliation</h1>
        <el-table
            :data="affiliations"
            style="width: 100%">
            <el-table-column
                fixed
                prop="affId"
                label="id"
                width="70">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="90">
            </el-table-column>
            <el-table-column
                prop="star"
                label="星级"
                width="60">
            </el-table-column>
            
            <el-table-column
                prop="wheree"
                label="活动地点"
                width="120">
            </el-table-column>
            <el-table-column
                prop="describee"
                label="描述"
                width="250">
            </el-table-column>
            
            
            <el-table-column
                prop="how"
                label="活动内容"
                width="180">
            </el-table-column>
            <el-table-column
                prop="resource"
                label="资源"
                width="240">
            </el-table-column>
            <el-table-column
                prop="expenses"
                label="费用"
                width="70">
            </el-table-column>
            
            
            <el-table-column
                fixed="right"
                label="操作"
                style="text-align: right"
            >
                <template slot-scope="scope" >
                    <el-tooltip class="item" effect="dark" content="...以后会有(bushi)" placement="top">
                        <el-button type="text" size="small">查看详情</el-button>
                    </el-tooltip>
                    <el-button  @click="open2" type="text" size="small">缴费</el-button>
                </template>
            </el-table-column>
        </el-table>
    
    </div>
    
    
    
</template>

<script>
    
    import axios from "axios";
    
    export default {
        name: "AllAffiliation",
        methods: {
            handleClick(row) {
                console.log(row);
            },
            open1() {
                this.$message('这是一又一个彩蛋提示');
            },
            open2() {
                this.$message({
                    message: '居然有uu想交钱？？？？？',
                    
                    type: 'success'
                });
            },
        },
        created() {
            const _this = this
            axios.get('http://localhost:8181/affiliation/findAll').then(function (resp) {
                _this.affiliations = resp.data
                // _this.total = resp.data.totalElements
            })
        },
        
        data() {
            return {
                affiliations: null,
                
            }
        }
    }
    
    
    
    
    
</script>

<style scoped>
</style>
