<template>
    <v-data-table :headers="headers" :items="desserts" sort-by="calories" class="elevation-1">
        
        
        <template v-slot:top>
            <v-toolbar flat>
                
                <v-toolbar-title>㊙密密密密密㊙</v-toolbar-title>
                
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-spacer></v-spacer>
                
                <v-dialog v-model="dialog" max-width="500px">
                    <template v-slot:activator="{ on, attrs }" >
                        <v-btn color="amber darken-1" dark class="mb-2" v-bind="attrs" v-on="on">new一个</v-btn>
                        <div style="width: 10px"></div>
                        <v-btn color="green lighten-1" dark class="mb-2"  @click="put">保存</v-btn>
                    </template>
                    <v-card>
                        <v-card-title>
                            <span class="text-h5">{{ formTitle }}</span>
                        </v-card-title>
                        
                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col cols="12" sm="3" md="3">
                                        <v-text-field v-model="editedItem.empId" label="员工ID"></v-text-field>
                                    </v-col>
                                    <v-col cols="1" sm="3" md="3">
                                        <v-text-field v-model="editedItem.name" label="姓名"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="2">
                                        <v-text-field v-model="editedItem.sex" label="性别"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="2">
                                        <v-text-field v-model="editedItem.age" label="年龄"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="5">
                                        <v-text-field v-model="editedItem.address" label="地址"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.bankCard" label="银行卡"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-select
                                            v-model="editedItem.department"
                                            :items="selectDepartment"
                                            :rules="[v => !!v || 'Item is required']"
                                            label="部门"
                                            required
                                        ></v-select>
                                        <!--<v-text-field v-model="editedItem.department" label="部门">-->
                                        <!--</v-text-field>-->
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.wageCard" label="工资卡"></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>
                        
                        <!--修改-->
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="close">不保存</v-btn>
                            <v-btn color="blue darken-1" text @click="save">保存</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                <!--删除-->
                <v-dialog v-model="dialogDelete" max-width="500px">
                    <v-card>
                        <v-card-title class="text-h5">确定删除这一条嘛～</v-card-title>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="closeDelete">不了</v-btn>
                            <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                            <v-spacer></v-spacer>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            
            </v-toolbar>
        </template>
        
        <template v-slot:item.actions="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
            <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
        </template>
        <template v-slot:no-data>
            <v-btn color="primary" @click="initialize">Reset</v-btn>
        </template>
    </v-data-table>
</template>

<script>
    import axios from "axios";
    
    export default {
        data: () => ({
            selectDepartment: [
                '设计部',
                '开发部',
                '销售部',
                '创新部',
                '技术部',
                '行政部',
                '人力部',
            ],
            dialog: false,
            dialogDelete: false,
            headers: [
                {
                    text: 'Id',
                    align: 'start',
                    value: 'empId',
                },
                {text: 'name', value: 'name', sortable: false,},
                {text: 'sex', value: 'sex', sortable: false,},
                {text: 'age', value: 'age'},
                {text: 'address', value: 'address', sortable: false,},
                {text: 'bankCard', value: 'bankCard'},
                {text: 'department', value: 'department', sortable: false,},
                {text: 'wageCard', value: 'wageCard', sortable: false},
                {text: 'actions', value: 'actions', sortable: false},
            ],
            desserts: [],
            editedIndex: -1,
            editedItem: {
                empId: '109999',
                name: '萝小卜',
                sex: '无',
                age: '',
                address: '',
                department: '',
                bankCard: '',
                wageCard: '',
            },
            defaultItem: {
                empId: '',
                name: '萝小卜',
                sex: '无',
                age: 0,
                address: '',
                bankCard: '',
                department: '',
                wageCard: '',
            },
        }),
        computed: {
            formTitle() {
                return this.editedIndex === -1 ? '新的' : '改啥'
            },
        },
        watch: {
            dialog(val) {
                val || this.close()
            },
            dialogDelete(val) {
                val || this.closeDelete()
            },
        },
        
        
        created() {
            this.initialize()
            const _this = this
            axios.get('http://localhost:8181/employee/findAll').then(function (resp) {
                _this.desserts = resp.data
            })
        },
        
        
        methods: {
            initialize() {
                this.desserts = [
                    {
                        empId: 'Frozen Yogurt',
                        name: 159,
                        sex: 6.0,
                        age: 24,
                        address: 4.0,
                        bankCard: 4.0,
                        department: 4.0,
                        wageCard: 4.0,
                    },
                    {
                        name: 'Ice cream sandwich',
                        calories: 237,
                        fat: 9.0,
                        carbs: 37,
                        protein: 4.3,
                    },
                    {
                        name: 'Eclair',
                        calories: 262,
                        fat: 16.0,
                        carbs: 23,
                        protein: 6.0,
                    },
                    {
                        name: 'Cupcake',
                        calories: 305,
                        fat: 3.7,
                        carbs: 67,
                        protein: 4.3,
                    },
                    {
                        name: 'Gingerbread',
                        calories: 356,
                        fat: 16.0,
                        carbs: 49,
                        protein: 3.9,
                    },
                    {
                        name: 'Jelly bean',
                        calories: 375,
                        fat: 0.0,
                        carbs: 94,
                        protein: 0.0,
                    },
                    {
                        name: 'Lollipop',
                        calories: 392,
                        fat: 0.2,
                        carbs: 98,
                        protein: 0,
                    },
                    {
                        name: 'Honeycomb',
                        calories: 408,
                        fat: 3.2,
                        carbs: 87,
                        protein: 6.5,
                    },
                    {
                        name: 'Donut',
                        calories: 452,
                        fat: 25.0,
                        carbs: 51,
                        protein: 4.9,
                    },
                    {
                        name: 'KitKat',
                        calories: 518,
                        fat: 26.0,
                        carbs: 65,
                        protein: 7,
                    },
                    {
                        name: 'Frozen Yogurt',
                        calories: 159,
                        fat: 6.0,
                        carbs: 24,
                        protein: 4.0,
                    },
                    {
                        name: 'Ice cream sandwich',
                        calories: 237,
                        fat: 9.0,
                        carbs: 37,
                        protein: 4.3,
                    },
                    {
                        name: 'Eclair',
                        calories: 262,
                        fat: 16.0,
                        carbs: 23,
                        protein: 6.0,
                    },
                    {
                        name: 'Cupcake',
                        calories: 305,
                        fat: 3.7,
                        carbs: 67,
                        protein: 4.3,
                    },
                    {
                        name: 'Gingerbread',
                        calories: 356,
                        fat: 16.0,
                        carbs: 49,
                        protein: 3.9,
                    },
                    {
                        name: 'Jelly bean',
                        calories: 375,
                        fat: 0.0,
                        carbs: 94,
                        protein: 0.0,
                    },
                    {
                        name: 'Lollipop',
                        calories: 392,
                        fat: 0.2,
                        carbs: 98,
                        protein: 0,
                    },
                    {
                        name: 'Honeycomb',
                        calories: 408,
                        fat: 3.2,
                        carbs: 87,
                        protein: 6.5,
                    },
                    {
                        name: 'Donut',
                        calories: 452,
                        fat: 25.0,
                        carbs: 51,
                        protein: 4.9,
                    },
                    {
                        name: 'KitKat',
                        calories: 518,
                        fat: 26.0,
                        carbs: 65,
                        protein: 7,
                    },
                ]
            },
            editItem(item) {
                this.editedIndex = this.desserts.indexOf(item)
                this.editedItem = Object.assign({}, item)
                this.dialog = true
                
            },
            deleteItem(item) {
                this.editedIndex = this.desserts.indexOf(item)
                this.editedItem = Object.assign({}, item)
                this.dialogDelete = true
            },
            deleteItemConfirm() {
                this.desserts.splice(this.editedIndex, 1)
                this.closeDelete()
            },
            close() {
                this.dialog = false
                this.$nextTick(() => {
                    this.editedItem = Object.assign({}, this.defaultItem)
                    this.editedIndex = -1
                })
            },
            closeDelete() {
                this.dialogDelete = false
                this.$nextTick(() => {
                    this.editedItem = Object.assign({}, this.defaultItem)
                    this.editedIndex = -1
                })
            },
            save() {
                if (this.editedIndex > -1) {
                    Object.assign(this.desserts[this.editedIndex], this.editedItem)
                } else {
                    this.desserts.push(this.editedItem)
                }
                this.close()
            },
            put(){
                // const _this = this
                // console.log(this.)
                // axios.get('http://localhost:8181/employee/findAll').then(function (resp) {
                //     _this.desserts = resp.data
                // })
                
            }
            
        },
    }
</script>
