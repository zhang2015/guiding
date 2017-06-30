<template>
  <div>
    <div class="company_selet_box">
      <section>
        <p>企业状态</p>
        <span v-for="item in state" @click="toggleTabs_state(item.value)" :class="{active:item.value==statevalue}">{{item.name}}</span>
      </section>
      <section>
        <p>注册资本</p>
        <span v-for="item in capital" @click="toggleTabs_capital(item.value)" :class="{active:item.value==capitalvalue}">{{item.name}}</span>
      </section>
      <section>
        <p>所在地区</p>
        <span v-for="item in address" @click="toggleTabs_address(item.value)" :class="{active:item.value==addressvalue}">{{item.name}}</span>
      </section>
      <section>
        <p>所在城市</p>
        <span v-for="item in city" @click="toggleTabs_city(item.value)" :class="{active:item.value==cityvalue}">{{item.name}}</span>
      </section>
      <section>
        <p>高级筛选</p>
        <span v-for="item in high" @click="toggleTabs_high(item.value)" :class="{active:item.value==highvalue}">{{item.name}}</span>
      </section>
    </div>
    <div class="company_list_box common_type_box">
      <p class="company_list_head common_type_head">
          我们为您找到<span>10</span>家符合条件的企业
      </p>
      <firmList></firmList>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import firmList from '../firmList/firmList'

  export default {
    data(){
      return{
        statevalue:'1',
        capitalvalue:'1',
        addressvalue:'1',
        cityvalue:'1',
        highvalue:'1',
        state:[
          {
            name:'全部',
            value:'1'
          },
          {
            name:'正常',
            value:'2'
          },
          {
            name:'续存',
            value:'3'
          },
          {
            name:'吊销',
            value:'4'
          },
          {
            name:'注销',
            value:'5'
          }
        ],
        capital:[
          {
            name:'全部',
            value:'1'
          },
          {
            name:'500万以下',
            value:'2'
          },
          {
            name:'500~1000万',
            value:'3'
          },
          {
            name:'1000万~5000万',
            value:'4'
          },
          {
            name:'5000万以上',
            value:'5'
          }
        ],
        address:[
          {
            name:'全部',
            value:'1'
          },
          {
            name:'四川',
            value:'2'
          },
          {
            name:'上海',
            value:'3'
          },
          {
            name:'北京',
            value:'4'
          },
          {
            name:'贵州',
            value:'5'
          }
        ],
        city:[
          {
            name:'全部',
            value:'1'
          },
          {
            name:'上海市',
            value:'2'
          }
        ],
        high:[
          {
            name:'全部',
            value:'1'
          },
          {
            name:'有商标',
            value:'2'
          },
          {
            name:'有专利',
            value:'3'
          },
          {
            name:'有版权',
            value:'4'
          }
        ]
      }
    },
    methods:{
        toggleTabs_state:function(value){
            this.statevalue=value;
        },
        toggleTabs_capital:function(value){
            this.capitalvalue=value;
        },
        toggleTabs_address:function(value){
            this.addressvalue=value;
        },
        toggleTabs_city:function(value){
            this.cityvalue=value;
        },
        toggleTabs_high:function(value){
            this.highvalue=value;
        }
    },
    components:{
      firmList
    }
  }
</script>

<style media="screen">

</style>
