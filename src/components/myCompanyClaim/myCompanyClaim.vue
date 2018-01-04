<template>
  <div class="tab_type_box">
    <div class="tab_type_head">
      <a class="active">公司认领</a>
    </div>
    <div class="padding20">
      <section class="help_select">
        <input type="text" name="" value="" placeholder="请输入您要认领的公司名称" v-model="keyword">
        <span class="help_select_btn" @click="dealSearch"><span class="icon-search"></span> 搜索</span>
      </section>
      
      
      <!--没有查询到结果的展示 begin-->
      <section class="company-search-no" v-show="isShowClainInfo">
          没有查询到
          <span>成都贵鼎科技有限公司</span>
          <a href="#/manage/applicationIn" class="btn-bd-green-s">免费入驻该公司</a>
      </section>
      <!--没有查询到结果的展示 end-->
      
      
      <companySearchList :list="list"></companySearchList>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import companySearchList from '../companySearchList/companySearchList'

  export default {
    data(){
      return{
        keyword:"",
        list:[],
        isShowClainInfo:false
      }
      
    },
    components:{
      companySearchList
    },
    methods:{
      dealSearch:function(){
        console.log("开始搜索")

        var url = path + '/index/enterprise/search?title='+this.keyword;
        this.$http.get(url).then(function(r){
          var td = r.data;
          this.list = td.company;
          if(this.list.length == 0){
            this.isShowClainInfo = true
          }else{
            this.isShowClainInfo = false
          }

        })
      }
    }
  }
</script>

<style media="screen">
  .help_select{
    display: flex;
    width: 550px;
    height: 32px;
    border: 2px solid #0065FF;
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
    background: #0065FF;
    color: #fff;
    font-size: 15px;
    text-align: center;
    line-height: 32px;
      transition: .3s;
      cursor: pointer
  }
    .help_select_btn:hover{
        background: #3b8aff
    }
    .company-search-no{
        text-align: center;
        font-size: 14px;
        padding: 30px 0
    }
    .company-search-no>span{
        color: #AAAAAA;
    }
</style>
