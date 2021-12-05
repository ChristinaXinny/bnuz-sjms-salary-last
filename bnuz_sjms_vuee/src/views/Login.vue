<template>
    <div id="scene">
        <img id="wifi" src="../img/wifi.png" alt="">
        <div class="circular" id="circular1_div">
            <img id="circular1" src="../img/灰色圆圈.png" alt="">
        </div>
        <div class="circular" id="circular2_div">
            <img id="circular2" src="../img/灰色圆圈.png" alt="">
        </div>
        <div id="center">
            <div id="center_left">
                <img id="white" src="../img/白色圈.png" alt="">
                <div id="center_left_text">
                    薪资系统<br>
                    <h1>LXY HAOSHUAI</h1><br>
                    <span id="la">BNUZ-sjms<br> bigbigbigbigbigbigbig-workkkkkkk<br>bigbigbigbigbigbigbig-workkkkkkk
                        <br>bigbigbigbigbigbigbig-workkkkkkk<br> 赞助：wyf的牛腩粉</span>
                </div>
            </div>
            <div id="center_right">
                <div style="width:200px; display: grid; grid-template-columns: 1fr 1fr">
                    <v-img alt="Vuetify Logo" class="shrink mr-2" contain
                           src="https://i.loli.net/2021/06/02/xvQi6rJcheDISj7.png" transition="scale-transition"
                           width="100"/>
                    <v-img alt="Vuetify Name" class="shrink mt-1 hidden-sm-and-down" contain min-width="120"
                           src="https://i.loli.net/2021/06/02/kmha5TdrZ2fLINP.png" width="100"/>
                </div>
                
                <h1 id="title">登陆</h1>
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm">
                    <div id="username">
                        <div class="username_title">
                            <div class="username_title_text">userID</div>
                        </div>
                        <input class="kuang" type="text" v-model.number="ruleForm.id">
                    </div>
                    <div id="password">
                        <div class="username_title">
                            <div class="username_title_text">password</div>
                        </div>
                        <input class="kuang" type="password" v-model.number="ruleForm.password">
                    </div>
                    <input type="checkbox" checked name="" id="checkbox">记住密码(jiade)
                    <div id="bottom" @click="log">
                        <a href="#" id="landing">LANDING</a>
                    </div>
                </el-form>
            
            
            </div>
        </div>
    </div>
</template>

<script>
    
    export default {
        
        name: "Login",
        data() {
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            return {
                ruleForm: {
                    id: '',
                    password: '',
                },
                rules: {
                    password: [
                        {validator: validatePass, trigger: 'blur'}
                    ],
                    id: [],
                }
                
            }
        },
        methods: {
            log() {
                axios.get('')
                
                this.$router.push({path: '/null'})
            },
            
            
        }
        
        
    }
</script>

<style scoped>
    html {
        font-family: "Microsoft YaHei", serif;
        font-size: 14px;
    }
    
    body {
        -webkit-font-smoothing: antialiased;
    }
    
    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    hr,
    p,
    blockquote,
    dl,
    dt,
    dd,
    ul,
    ol,
    li,
    pre,
    fieldset,
    button,
    input,
    textarea,
    th,
    td {
        margin: 0;
        padding: 0;
    }
    
    ul,
    ol {
        list-style: none;
    }
    
    
    /* 閲嶇疆鏂囨湰鏍煎紡鍏冪礌 */
    
    a {
        text-decoration: none;
    }
    
    
    /* 閲嶇疆琛ㄦ牸鍏冪礌 */
    
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    
    
    /*鍥剧墖鍧楀寲涓庡幓鎺塱e杈规*/
    
    img {
        border: 0;
    }
    
    @font-face {
        font-family: "special";
        /*src: url("../font/YuGothB.ttc");*/
    }
    
    #scene {
        width: 100%;
        height: 100vh;
        background-color: #F3F5F5;
        display: flex;
        align-items: center;
        justify-content: center;
        /* overflow: hidden; */
    }
    
    .circular {
        position: absolute;
    }
    
    #circular1_div {
        width: 400px;
        height: 500px;
        top: -100px;
        right: 0px;
        overflow: hidden;
    }
    
    #circular1 {
        width: 500px;
        height: auto;
        user-select: none;
    }
    
    #circular2_div {
        width: 300px;
        height: 300px;
        bottom: 0;
        left: 0;
        overflow: hidden;
    }
    
    #circular2 {
        width: 300px;
        height: auto;
        position: relative;
        right: 100px;
        bottom: -100px;
        user-select: none;
    }
    
    
    /* 这里调整中间div的大小 */
    
    #center {
        width: 900px;
        height: 590px;
        background-color: #fff;
        box-shadow: 0 0 25px 7px #cecece;
        display: flex;
        justify-content: space-around;
        overflow: hidden;
        border-radius: 15px;
        -webkit-border-radius: 15px;
        -moz-border-radius: 15px;
        -ms-border-radius: 15px;
        -o-border-radius: 15px;
        z-index: 10;
    }
    
    #center > div {
        width: 50%;
        height: 100%;
    }
    
    #center_left {
        position: relative;
        background: linear-gradient(135deg, #f7eebd, #ffa564, #ff8127, #ffa564, #f7eebd);
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    
    /* 左边字的总汇 */
    
    #center_left_text {
        /* font-family: "special"; */
        color: white;
        box-sizing: border-box;
        padding-top: 40px;
        /* background-color: #fff; */
        width: 300px;
        height: 300px;
    }
    
    
    /* 啦啦啦的行高 */
    
    #la {
        line-height: 30px;
    }
    
    #center_right {
        box-sizing: border-box;
        padding: 50px 50px;
        position: relative;
        text-align: center;
    }
    
    #wifi {
        /* background-color: rgb(0, 0, 0); */
        position: absolute;
        top: 75px;
        left: 40%;
        opacity: 0.7;
        width: 80px;
        z-index: 15;
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -o-transform: rotate(45deg);
    }
    
    #white {
        width: 150px;
        position: absolute;
        bottom: 15px;
        right: -75px;
    }
    
    #title {
        margin-bottom: 20px;
    }
    
    .kuang {
        color: #314CF7;
        text-align: center;
        font-size: 20px;
        padding: 0px 9px;
        border: 2px solid #bbbbbb;
        outline: none;
        box-sizing: border-box;
        width: 100%;
        height: 45px;
        border-radius: 8px;
        -webkit-border-radius: 8px;
        -moz-border-radius: 8px;
        -ms-border-radius: 8px;
        -o-border-radius: 8px;
        transition: 0.4s;
        -webkit-transition: 0.4s;
        -moz-transition: 0.4s;
        -ms-transition: 0.4s;
        -o-transition: 0.4s;
    }
    
    .username_title {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .username_title_text {
        color: #bbbbbb;
        width: 35%;
        font-size: 18px;
        background-color: #fff;
        position: relative;
        bottom: -10px;
        transition: 0.4s;
        -webkit-transition: 0.4s;
        -moz-transition: 0.4s;
        -ms-transition: 0.4s;
        -o-transition: 0.4s;
    }
    
    #username {
        margin-bottom: 20px;
    }
    
    #password {
        margin-bottom: 20px;
    }
    
    #checkbox {
        position: relative;
        top: 2px;
        margin-bottom: 40px;
    }
    
    #bottom {
        width: 100%;
        height: 45px;
    }
    
    #landing {
        position: relative;
        line-height: 45px;
        display: inline-block;
        cursor: pointer;
        color: white;
        font-size: 20px;
        outline: none;
        box-sizing: border-box;
        width: 100%;
        height: 45px;
        overflow: hidden;
        /*height: 45px;
        */
        border: 0;
        /* background: #8543F6; */
        background: linear-gradient(215deg, #f7eebd, #ffa564, #ff8127, #ffa564, #f7eebd);
        border-radius: 8px;
        -webkit-border-radius: 8px;
        -moz-border-radius: 8px;
        -ms-border-radius: 8px;
        -o-border-radius: 8px;
        /* transition: 2s;
        -webkit-transition: 2s;
        -moz-transition: 2s;
        -ms-transition: 2s;
        -o-transition: 2s; */
    }
</style>
