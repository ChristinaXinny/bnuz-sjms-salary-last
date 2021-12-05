import Vue from 'vue'
import VueRouter from 'vue-router'

// import


import Null from "@/views/Null";

import Login from "@/views/Login";


//test


//页面1 My
import MyWageCard from "@/views/table/MyWageCard";
import Example from "@/views/table/Example";
import ThisTimeWage from "@/views/table/ThisTimeWage";
import Update from "@/views/do/Update";

//
//页面2 Department
import SalesDepartment from "@/views/table/SalesDepartment";
import Receipt from "@/views/table/Receipt";

//页面3 Affiliation
import AffiliationActivity from "@/views/table/AffiliationActivity";
import AffiliationWeek from "@/views/table/AffiliationWeek";
import AllAffiliation from "@/views/table/OtherAffiliation";

//页面4 Check
import CheckAffiliation from "@/views/table/CheckAffiliation";
import CheckDepartment from "@/views/table/CheckDepartment";
import Employee from "@/views/table/Employee";

//页面5 do
import Creat from "@/views/do/Creat";
import Delete from "@/views/do/Delete";
import Retrieve from "@/views/do/Retrieve";

Vue.use(VueRouter)


const routes = [
    // {
    //   path: '/test',
    //   name:'test',
    //   component: Null,
    //   children: [
    //     {
    //       path: '/ddd',
    //       name: 'ddd',
    //       component: ddd,
    //     },
    //     {
    //       path: '/creatEm',
    //       name: 'creatEm',
    //       component: CreatEm,
    //     },
    //     {
    //       path: '/test',
    //       name:'test',
    //       component: test,
    //     },
    // {
    //   path: '/change',
    //   name: '改改改',
    //   component:Change,
    // },
    //   ]
    // },

    {
        path: '/person',
        name: '个人信息',
        component: Null,
        redirect: '/myWageCard', // 什么都不写的时候 默认显示页面为/myWageCard  输入http://localhost:8080/ 直接跳到myWageCard页面
        children: [

            {
                path: '/myWageCard',
                name: '我的工资卡',
                component: MyWageCard,
            },

            {
                path: '/example',
                name: '特权(bushi)',
                component: Example,
            },


        ]
    },
    {
        path: '/second',
        name: '销售部门',
        component: Null,
        children: [
            {
                path: '/salesDepartment',
                name: '部门信息',
                component: SalesDepartment,
            },
            {
                path: '/receipt',
                name: '销售凭条',
                component: Receipt,
            },
            {
                path: '/thisTimeWage',
                name: '近期工资',
                component: ThisTimeWage,
            },
        ]

    },
    {
        path: '/third',
        name: '辩论协会',
        component: Null,
        children: [
            {
                path: '/AffiliationWeek',
                name: '本周报名',
                component: AffiliationWeek,
            },
            {
                path: '/affiliationActivity',
                name: '历史活动',
                component: AffiliationActivity,
            },

            {
                path: '/allAffiliation',
                name: '其他协会',
                component: AllAffiliation,
            },
        ],
    },
    {
        path: '/fourth',
        name: 'Check',
        component: Null,
        children: [
            {
                path: '/employee',
                name: 'Check员工',
                component: Employee
            },
            {
                path: '/checkDepartment',
                name: 'Check部门',
                component: CheckDepartment,
            },
            {
                path: '/checkAffiliation',
                name: 'Check协会',
                component: CheckAffiliation,
            }
        ]
    },
    {
        path: '/fifth',
        name: 'Do SomeThing',
        component: Null,
        children: [
            {
                path: '/creat',
                name: '增增增',
                component: Creat,
            },
            {
                path: '/delete',
                name: '删删删',
                component: Delete,
            },
            {
                path: '/update',
                name: '改改改',
                component: Update,
            },

            {
                path: '/retrieve',
                name: '查查查',
                component: Retrieve,
            },
        ]
    },
    {
        path: '/',
        name: 'Login',
        component: Login,
    },
    // {
    //   path: '/mainView',
    //   name: 'MainView',
    //   component: MainView,
    // },
    // {
    //   path: '/mainApp',
    //   name: 'mainApp',
    //   component: MainApp,
    // },
    {
        path: '/null',
        name: 'Null',
        component: Null,
        redirect: '/myWageCard'
    }


]

// const routess=[
//   {
//     path: '/',
//     name: '',
//     component: Login,
//   },
// ]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
// export default routess



