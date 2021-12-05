<template>
    <div>
        
        
        <h1 style="margin: 10px">销售部门</h1>
        
        
        <v-card loading="loading" class="mx-auto my-12" max-width="1100">
<!--            <a href="https://sm.ms/image/U3K4reqgXQWwoFO" target="_blank"><img src="https://i.loli.net/2021/06/04/U3K4reqgXQWwoFO.jpg" ></a>-->
            <v-img height="550" src="https://i.loli.net/2021/06/04/U3K4reqgXQWwoFO.jpg"></v-img>
            
            <div style="margin: 10px 20px">
                
                <v-card-title>销售部门</v-card-title>
                
                <v-card-text style="margin: 10px 0px">
                    <v-row align="center" class="mx-0">
                        <v-rating :value="4" color="amber" dense half-increments readonly size="14"></v-rating>
                        
                        <div class="grey--text ms-4">4.5 (413)</div>
                    </v-row>
                    
                    <div class="my-4 text-subtitle-1">$ • BNUZ, 丽泽+金声+木铎+弘文+乐育+励耘+...(Hello World)</div>
                    
                    <div>
                        在一个公司中销售部负责总体的营销活动，决定公司的营销策略和措施，并对营销工作进行评估和监控，包括公共关系、销售、客户服务等。
                        如公司有新的产品，销售部就要把新产品推销、宣传到一些消费者手里。还有一点很重要，就是销售一样产品必须根据市场的变化
                        和市场与自己企业公司的关系来合适的推销到需要的消费者手里。但，主要的还是看市场的需求。
                    </div>
                </v-card-text>
                
                <v-divider class="mx-4"></v-divider>
                
                <v-card-title>主要职责</v-card-title>
                
                <v-card-text>
                    <v-chip-group v-model="selection" active-class="orange accent-4 white--text" column>
                        <div>
                            1.正确掌握市场：
                            定期组织市场调研，收集市场信息，分析市场动向
                            负责收集、整理、归纳客户资料，对客户群进行透彻的分析
                            
                        </div>
                        <div>
                            2.确定销售策略：
                            建立销售目标，制定销售计划，以完成公司下达的销售任务为目的，确定销售目标，完成销售计划。
                            
                        </div>
                        <div>
                            3.管理销售活动：
                            通过销售报价、销售订单、销售发货、退货、销售发票处理、客户管理、
                            价格管理等功能，对销售全过程进行有效的控制和跟踪。
                        </div>
<!--                        <v-chip>周二 3:00pm</v-chip>-->
<!--                        -->
<!--                        <v-chip>周三 7:30PM</v-chip>-->
<!--                        -->
<!--                        <v-chip>周五 8:00PM</v-chip>-->
<!--                        -->
<!--                        <v-chip>周六 9:00PM</v-chip>-->
                    </v-chip-group>
                </v-card-text>
                
                <v-card-actions>
                    <v-btn class="ma-2" :loading="loading" :disabled="loading" color="orange"
                           @click="loader = 'loading'">
                        爱了?
                    </v-btn>
                    <v-btn color="deep-purple lighten-2" text @click="reserve">爱了!</v-btn>
                </v-card-actions>
            
            </div>
        
        </v-card>
    </div>

</template>

<script>
    export default {
        name: "SalesDepartment",
        data: () => ({
            loading: false,
            selection: 1,
        }),
        
        methods: {
            reserve() {
                this.loading = true
                
                setTimeout(() => (this.loading = false), 2000)
            },
        },
    }
</script>

<style scoped>

</style>
