<template>
    <div>
<!--        <div id="ddd">-->
            <h1 style="margin: 10px">来pink其他协会8</h1>
    
            <v-sheet class="mx-auto" elevation="8" max-width="1100">
                <v-slide-group v-model="model" class="pa-4" active-class="success" show-arrows>
                    <v-slide-item v-for="(item,index) in aff" :key="index" v-slot="{ active, toggle }">
                        <el-card style="margin: 10px; height: 520px;" :body-style="{ margin: '10px', padding: '10px' }">
                            <img class="image" style="height: 300px" v-bind:src="item.image">
                            <div style="padding: 14px;">
                                <span>{{ item.name }}</span>
                                <div class="bottom clearfix">
                                    <time class="time">{{ currentDate }}</time>
                                    <el-button type="text" class="button" @click="open">加入它</el-button>
                                    <div style="margin: 20px"></div>
                                    <div class="block">
                                    <span class="demonstration"
                                          style="width: 100%">{{ item.describee }}～</span>
                                        <el-rate style="margin-top: 10px" v-model:value="item.star"></el-rate>
                                    </div>
                                </div>
                            </div>
                        </el-card>
                    </v-slide-item>
                </v-slide-group>
            </v-sheet>
        </div>
        
        
        
        
<!--    </div>-->
</template>

<script>
    
    
    
    import axios from "axios";
    
    export default {
        name: "CheckAffiliation",
        methods: {
            open() {
                this.$alert('就算满屏幕都是彩蛋！也还是不给你进hhh', '彩蛋2.,0', {
                    confirmButtonText: '确定',
                    callback: action => {
                    }
                });
            }
        },
        
        data() {
            return {
                currentDate: new Date(),
                value1: null,
                colors: ['#99A9BF', '#F7BA2A', '#FF9900'],  // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
                model: null,
                aff: [
                ],
                
            };
        },
    
        created() {
            const _this = this
            axios.get('http://localhost:8181/affiliation/findAll').then(function (resp) {
                _this.aff = resp.data
                // _this.total = resp.data.totalElements
            })
        },
        
    }
    
    
    
    
    
</script>

<style scoped>
    
    .time {
        font-size: 13px;
        color: #999;
    }
    
    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }
    
    .button {
        padding: 0;
        float: right;
    }
    
    .image {
        width: 100%;
        display: block;
    }
    
    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    
    .clearfix:after {
        clear: both
    }
</style>
