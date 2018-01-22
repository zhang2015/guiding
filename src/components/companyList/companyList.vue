<template>
  <div>
    <ul class="my_company_list">
      <li v-for="item in companyList" :key="item.id">
        <img :src="item.enterprise?item.enterprise.img?path+item.enterprise.img:defaultImage:defaultImage">
        <section>
          <h1>
            <a>
              {{item.enterprise?item.enterprise.title:''}}
            </a>
            <span>
              <span class="auditing">{{item?company_status[item.status]:''}}</span>
            </span>
          </h1>
          <p>
            <span class="icon-tel"></span>
            <span>电话:{{item.enterprise?item.enterprise.phone:''}}</span>
            <span class="icon-message"></span>
            <span>邮箱:{{item.enterprise?item.enterprise.email:''}}</span>
            <span class="icon-globe"></span>
            <span>网址:<a :href="item.enterprise?item.enterprise.web_url:''">{{item.enterprise?item.enterprise.web_url:''}}</a></span>
          </p>
          <p>
            <span class="icon-compass"></span>
            <span>地址:{{item.enterprise?item.enterprise.address:''}}</span>
          </p>
        </section>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">

  

  export default {

    data(){
      return {
        company_status:company_status,
        path:path,
        companyList:[],
        defaultImage:require('../../assets/default/qiye_com.png'),
      }
    },

    props:['list'],

    created(){
      this.companyList = this.list;
    },

    //创建
    created(){

    },
    watch:{
      'list':function(){
        this.companyList = this.list;
      }
    }


  }
</script>

<style media="screen">
  .my_company_list li{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 20px;
    margin-bottom: 20px; 
    border: 1px solid #e5e7ed;
    background: #f9fafc;
  }
  .my_company_list li img{
    width: 110px;
    height: 110px;
    border: 1px solid #e5e7ed;
    margin-right: 20px;
  }
  .my_company_list li section{
    flex-grow: 1;
  }
  .my_company_list li section h1{
    display: flex;
    height: 32px;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
  }
  .my_company_list li section h1 a{
    font-size: 16px;
    color: #616161;
  }
  .my_company_list li section h1 span{
    font-size: 14px;
  }
  .my_company_list li section h1 span span.auditing{
    color: #ff8a6e;
  }
  .my_company_list li section h1 span span.audited a{
    color: #6398ed;
    font-size: 14px;
    padding-right: 10px;
  }
  .my_company_list li section h1 span span.audited span{
    color: #898989;
    font-size: 14px;
    cursor: pointer;
  }
  .my_company_list li section h1 span a.claim{
    padding: 5px 20px;
    color: #87ce76;
    font-size: 14px;
    border: 1px solid #87ce76;
    border-radius: 4px;
  }
  .my_company_list li section p{
    display: flex;
    height: 30px;
    justify-content: flex-start;
    align-items: center;
    font-size: 15px;
    color: #b3b3b3;
  }
  .my_company_list li section p span:nth-child(2n){
    padding: 0 25px 0 10px;
  }
</style>
