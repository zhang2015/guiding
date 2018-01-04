<template>
<div class="main_wrapper_wrapper">
  <div class="main_header main_wrapper">
    <p>
      <router-link to='/'>
        <img src="../../assets/logo@2x.png" alt="" width="177">
      </router-link>
    </p>
    <p class="head_select main_select">
      <select class="head_select_type" v-model="selected">
        <option value="1">找服务机构</option>
        <option value="2">找企业</option>
      </select>
      <input v-model="keyword" type="text" name="" value="" :placeholder="placeholder">
      <span v-on:click="dealSearch" class="head_select_but"><span class="icon-search"></span> 搜索</span>
    </p>
    <p class="main_unlogin" v-if="!userId">
      <span class="icon-user"></span>
      <router-link to='/login'>登录</router-link>
      <router-link to='/login/register'>注册</router-link>
    </p>
    <p class="main_unlogin" v-else>
      <span class="icon-user"></span>
      <router-link to='/manage/personal/orderForm/orderFormAll'>{{nick_name}}</router-link>
      <router-link to='/manage/personal'>个人中心</router-link>
      <router-link to='/manage/personal/logout'>退出</router-link>
    </p>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        selected: '1',
        placeholder: '请输入服务机构名称',
        keyword: ""
      }
    },
    created:function(){
       loginStatus(this)
    },
    watch:{
      selected:function(){
        if(this.selected == '1'){
          this.placeholder = '请输入服务机构名称'
        }else{
          this.placeholder = '请输入服企业名称'
        }
      }
    },
    methods:{
      dealSearch:function(){
        var selected = this.selected;
        var keyword = this.keyword;
        //console.log("selected = "+selected+" keyword="+keyword)

        if(keyword == ""){
          alert("请输入搜索关键字!");
          return;
        }

        console.log("c path = "+this.$route.path);

        //选择1表示搜索服务机构
        if(selected == 1){
          //直接跳转到列表页

          if(this.$route.path != "/main/company/organization"){
            this.$router.replace({path:'/main/company/organization',query:{keyword:keyword}})
             
          }else{
              eventBus.$emit("changeOrganizationSearchKeyword",keyword);
          }

        }
        //选择2表示搜索企业
        if(selected == 2){
          //直接跳转到列表页

          


          if(this.$route.path != "/main/company/firm"){
            this.$router.replace({path:'/main/company/firm',query:{keyword:keyword}})
             
          }else{
              eventBus.$emit("changeCompanySearchKeyword",keyword);
          }
        
        }

        
      }
    }
  }
</script>

<style media="screen">
  .main_wrapper_wrapper{
    background:#fff;
  }
  .main_header{
    display: flex;
    width: 1210px;
    height: 82px;
    justify-content: space-between;
    align-items: center;
  }
  .head_select{
    display: flex;
    width: 542px;
    height: 32px;
    justify-content: space-between;
    align-items: center;
    border: 2px solid #0484FF;
  }
  .head_select select{
    width: 112px;
    height: 32px;
    border: none;
    font-size: 13px;
    color: #b3b3b3;
  }
  .head_select input{
    flex-grow: 1;
    height: 32px;
    border: none;
    padding: 0;
    padding-left: 15px;
    border-left: 1px solid #f1f1f1;
    font-size: 13px;
  }
  .head_select_but{
    width: 84px;
    height: 32px;
    text-align: center;
    line-height: 32px;
    background: #0484FF;
    color: #fff;
    font-size: 14px;
      cursor: pointer;
      transition: .3s;
  }
    .head_select_but:hover{
        background: #429BFF
    }
  .main_unlogin .icon-user{
    color: #d6d6d6;
    padding: 5px;
    margin-right: 5px;
    border: 1px solid #d6d6d6;
    border-radius: 100%;
  }
  .main_unlogin a{
    color: #616161;
  }
  .main_unlogin a:nth-child(2){
    padding-right: 10px;
    margin-right: 5px;
    border-right: 1px solid #d6d6d6;
  }
  .main_unlogin a:nth-child(3){
    padding-right: 10px;
    margin-right: 5px;
    border-right: 1px solid #d6d6d6;
  }
</style>
