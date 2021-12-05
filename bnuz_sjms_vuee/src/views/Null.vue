<template>
    
    <v-app>
        <v-app-bar app color="#409EFF" light>
            <div class="d-flex align-center" style="color: #FFFFFF">
                <el-page-header @back="goBack" content="Xinny的薪资系统" onclick="go()">
                
                </el-page-header>
            </div>
            <v-spacer></v-spacer>
            <v-img alt="Vuetify Logo" class="shrink mr-2" contain
                   src="https://i.loli.net/2021/06/03/TbpsBzKIoiWG2AD.png"
                   transition="scale-transition"
                   width="120"
            />
            <v-spacer></v-spacer>
            <v-btn style="color: #FFFFFF"
                   href="https://github.com/ChristinaXinny"
                   target="_blank"
                   text
            >
                <span class="mr-2">Xinny's GitHub</span>
                <v-icon>mdi-open-in-new</v-icon>
            </v-btn>
        
        
        </v-app-bar>
            <el-container style="height:900px; border: 1px solid #eee">
                <div style="display: grid; grid-template-rows: 1fr 9fr;">
    
                    <div class="pa-4 v-sheet theme--light grey lighten-4" style="background-color: #D5E8FF">
                        <div class="v-avatar mb-4 grey darken-1"
                             style="height: 64px; min-width: 64px; width: 64px;background-color: #D5E8FF" >
                            <img style="background-color: #D5E8FF"
                                src="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1186278880,818285783&fm=15&gp=0.jpg"
                                alt="John"
                            >
                        </div>
                        <div>Xinny@github.com</div>
                    </div>
<!--                                 :default-openeds="defaultOpen"-->
                    
                    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                        <el-menu :default-active=$route.path :router=true :unique-opened=true
                        >
                            <el-submenu v-for="(item,index) in $router.options.routes" v-if="index<5" :index="index + ''">
                                <template slot="title" style="background-color: antiquewhite">
                                    <!-- 循环icon -->
                                    <i :class="[iconClass[index]]"/>
                                    {{ item.name }}
                                </template>
                                <el-menu-item v-for="(item2,index2) in item.children" :index="item2.path"
                                              :class="$route.path===item2.path ? 'is-active':''"
                                >{{ item2.name }}
                                </el-menu-item>
                                <!-- 把index = "index+'-'+index2"换成是遍历出来的item的path就行 这里的index 表示的是跳转到某个页面-->
                            </el-submenu>
                        </el-menu>
                    </el-aside>
                </div>
                
                <!--左边显示的窗口 菜单栏-->
                    <el-main>
                        <router-view></router-view>
                    </el-main>
            
            
            </el-container>
    </v-app>
</template>

<script>
    
    export default {
        name: "Null",
        data() {
            return {
                //循环icon
                iconClass: ["el-icon-user","el-icon-office-building", "el-icon-s-comment", "el-icon-circle-check", "el-icon-paperclip"],
            }
        },
        mounted() {
            let path = this.$route.path;
            this.navConfig = [
                {index: '1', path: ['/system/aa', '/system/bb', '/system/cc']},
            ];
            let thisNav = this.navConfig.find(item => {
                return item.path.includes(path);
            });
            
            // this.defaultOpen = [thisNav.index];

        },
        methods:{
            goBack(){
                this.$router.push({path:'/'})

            }
        },
    }
</script>

<style scoped>
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }
    
    .el-aside {
        color: #333;
    }
</style>
