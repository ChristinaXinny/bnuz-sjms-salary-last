<template>
    <div id="app">
        <div id="out">
            <el-page-header @back="goBack" content="详情页面" >
            </el-page-header>
            <div style="text-align: center; margin: 25px; margin-right: 10px">
                
                <span >Java_mini_bean</span>
            </div>
            <el-avatar id="touxiang" style="margin: 10px; width: 50px; height: 50px; float:right"
                       src="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1186278880,818285783&fm=15&gp=0.jpg"></el-avatar>
        
        </div>
        
        <!--直接加载null的界面内容 表明显示路由的view-->
        <router-view></router-view>
    
    </div>
</template>

<script>
    export default {
        name: "Homee",
        created() {
            let _this = this
            axios.get('http://localhost:8181/employee/findAll').then(function (resp) {
                _this = resp.data
            })
        },
        methods: {
            goBack() {
                console.log('go back');
            }
        }
    }
</script>

<style scoped>
    #out {
        display: grid;
        grid-template-columns:10fr 1fr 1fr;
        /*column-gap: 500px;*/
    }
    
    .el-page-header__title{
        margin-top: 23px;
    }
    .el-page-header__content{
        margin-top: 23px;
    }
</style>
