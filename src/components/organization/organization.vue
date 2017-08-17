<template>
  <div>
    <div class="company_selet_box">
      <section>
        <p>服务分类</p>
        <span v-for="item in type" @click="toggleTabs_type(item.value)" :class="{active:item.value==typevalue}">{{item.name}}</span>
      </section>
      <section>
        <p>服务内容</p>
        <span v-for="item in content" @click="toggleTabs_content(item.value)" :class="{active:item.value==contentvalue}">{{item.name}}</span>
      </section>
      <section>
        <p>所在地区</p>
        <span v-for="item in address" @click="toggleTabs_address(item.value)" :class="{active:item.value==addressvalue}">{{item.name}}</span>
      </section>
    </div>
    <div class="company_list_box common_type_box">
      <p class="company_list_head common_type_head">
          我们为您找到<span>10</span>家符合条件的企业
      </p>
      <organizationList></organizationList>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import organizationList from '../organizationList/organizationList'

  export default {
    data(){
      return{
        typevalue:'1',
        contentvalue:'1',
        addressvalue:'1',
        type:[
          {
            name:'评估公司',
            value:'1'
          },
          {
            name:'会计师事务所',
            value:'2'
          },
          {
            name:'知识产权所',
            value:'3'
          },
          {
            name:'律师所',
            value:'4'
          },
        ],
        content:[
          {
            name:'知识产权评估',
            value:'1'
          },
          {
            name:'房地产评估',
            value:'2'
          },
          {
            name:'企业价值评估',
            value:'3'
          },
          {
            name:'上市评估',
            value:'4'
          },
          {
            name:'质押贷款评估',
            value:'5'
          },
        ],
        address:[
          {
            name:'北京',
            value:'1'
          },
          {
            name:'上海',
            value:'2'
          },
          {
            name:'广州',
            value:'3'
          },
          {
            name:'成都',
            value:'4'
          },
          {
            name:'昆明',
            value:'5'
          },
          {
            name:'贵阳',
            value:'6'
          },
          {
            name:'长沙',
            value:'7'
          },
          {
            name:'杭州',
            value:'8'
          }
        ]
      }
    },
    methods:{
        toggleTabs_type:function(value){
            this.typevalue=value;
        },
        toggleTabs_content:function(value){
            this.contentvalue=value;
        },
        toggleTabs_address:function(value){
            this.addressvalue=value;
        }
    },
    watch:{
      typevalue:function(){
        console.log(this.typevalue);
      }
    },
    components:{
      organizationList
    }
  }
</script>

<style media="screen">

</style>
