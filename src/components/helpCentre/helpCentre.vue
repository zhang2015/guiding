<template>
  <div class="help_content">
    <helpContentHeader :infor="infor"></helpContentHeader>
    <div class="helpCentre">
      <section class="help_select">
        <input type="text" name="" value="" placeholder="请输入想搜索的帮助" v-model="keyword">
        <span class="help_select_btn" v-on:click="dealSearch"><span class="icon-search"></span> 搜索</span>
      </section>
      <ul>
        <li v-for="item in questionlist">
          <router-link :to="{ name: 'helpDetails', params: {id:item.id} }">{{item.title}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import helpContentHeader from '../helpContentHeader/helpContentHeader'

  export default {
    data(){
      return{
        keyword:"",
        infor:{
          title:'帮助中心',
          iconname:'icon-id',
          btntext:'公司认领',
          path: '#/manage/personal/myCompany/myCompanyClaim'
        },
        questionlist:[
          {
            name:'问题问题1',
            id:'1'
          },
          {
            name:'问题问题1',
            id:'1'
          },
          {
            name:'问题问题1',
            id:'1'
          },
          {
            name:'问题问题1',
            id:'1'
          }
        ]
      }
    },
    created(){

      this.keyword = "";
      this.downloadData();

    },
    methods:{
        downloadData:function(){
          //index/cms/help?category_id=1
          var url = path+"/index/cms/help?category_id=1&keyword="+this.keyword;
          this.$http.get(url).then(function(r){

            var td = r.data;
            var list = td.data;
            this.questionlist = list;


          })
        },
        dealSearch:function(){
          this.downloadData();
        }
    },
    components: {
      helpContentHeader
    }
  }
</script>

<style media="screen">
  .help_select{
    display: flex;
    width: 550px;
    height: 32px;
    border: 2px solid #0079FF;
    margin: 30px auto 35px auto;
  }
  .help_select input{
    flex-grow: 1;
    border: 0;
    padding-left: 10px;
  }
  .help_select_btn{
    width: 80px;
    height: 32px;
    background: #0079FF;
    color: #fff;
    font-size: 15px;
    text-align: center;
    line-height: 32px;
      transition: .3s;
      cursor: pointer
  }
    .help_select_btn:hover{
        background: #228bff
    }
  .helpCentre ul{
    width: 925px;
    margin: auto;
  }
  .helpCentre ul li{
    width: 925px;
    height: 48px;
    line-height: 48px;
    border-bottom: 1px dashed #f1f1f1;
  }
  .helpCentre ul li a{
    display: block;
    padding-left: 30px;
    color: #848484;
    font-size: 15px;
      transition: .3s;
  }
    .helpCentre ul li a:hover{
        color: #0079FF
    }
</style>
