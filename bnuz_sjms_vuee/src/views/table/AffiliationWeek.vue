<template>
    <div>
        
        <h1 style="margin: 10px">本周协会活动</h1>
        <v-card loading="loading" class="mx-auto my-12" max-width="1100">
            <!--            <template slot="progress">-->
            <!--                <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>-->
            <!--            </template>-->
            <!--            <a href="https://sm.ms/image/i7hV9lxdaNf2CeW" target="_blank"><img src="https://i.loli.net/2021/06/03/i7hV9lxdaNf2CeW.jpg" ></a>-->
            <v-img height="550" src="https://i.loli.net/2021/06/03/i7hV9lxdaNf2CeW.jpg"></v-img>
            
            <div style="margin: 10px 20px">
                
                <v-card-title>辩论辩论协协会</v-card-title>
                
                <v-card-text style="margin: 10px 0px">
                    <v-row align="center" class="mx-0">
                        <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>
                        
                        <div class="grey--text ms-4">4.5 (413)</div>
                    </v-row>
                    
                    <div class="my-4 text-subtitle-1">$ • BNUZ, 木铎</div>
                    
                    <div>辩论balabala' 辩论balabala' 辩论balabala' 辩论balabala' 辩论balabala' 辩论balabala' 辩论balabala'
                    </div>
                </v-card-text>
                
                <v-divider class="mx-4"></v-divider>
                
                <v-card-title>活动时间</v-card-title>
                
                <v-card-text>
                    <v-chip-group v-model="selection" active-class="orange accent-4 white--text" column>
                        <v-chip>周二 3:00pm</v-chip>
                        
                        <v-chip>周三 7:30PM</v-chip>
                        
                        <v-chip>周五 8:00PM</v-chip>
                        
                        <v-chip>周六 9:00PM</v-chip>
                    </v-chip-group>
                </v-card-text>
                
                <v-card-actions>
                        <v-btn class="ma-2" :loading="loading" :disabled="loading" color="orange"
                               @click="loader = 'loading'">
                            提交?
                        </v-btn>
                        <v-btn color="deep-purple lighten-2" text @click="reserve">提交!</v-btn>
                </v-card-actions>
            
            </div>
        
        </v-card>
    
    
    </div>

</template>

<script>
    export default {
        name: "AffiliationWeek",
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
