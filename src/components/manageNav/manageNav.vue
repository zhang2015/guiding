<template>
  <div class="manage_nav_wrapper">
    <div class="manage_nav">
      
        <router-link to="/main">
          <img src="../../assets/logot.png" class="manage_logo">
        </router-link>
        
      
      <section>
        <!-- <router-link :to="{name:'main'}">首页</router-link> -->
        <router-link to="/main">首页</router-link>
        <router-link :to="{name:'personal'}">个人中心</router-link>
        <router-link v-if="isShowManage" :to="{name:'companyManage'}">服务机构管理</router-link>
      </section>
      <section class="manage_select">
        <select v-model="selected">
          <option value="1">找服务机构</option>
          <option value="2">找企业</option>
        </select>
        <input type="text" name="" value="" :placeholder="placeholder">
        <span class="manage_select_but"><span class="icon-search"></span> 搜索</span>
      </section>
      <section class="manage_login">
        <div class="unlogin" v-show="!loged">
          <a>登录</a>
          <a>注册</a>
        </div>
        <div class="loged" v-show="loged" @click="menuShow = !menuShow">
          <div class="loged_infor">
            <img :src="img?path+img:''" class="user_icon">
            <span class="username">{{nick_name}}</span>
            <span class="icon-angle-down"></span>
          </div>
          <div class="loged_menu" v-show="menuShow">
            <router-link :to="{name:'orderForm'}"><span class="icon-doc"></span>我的订单</router-link>
            <router-link :to="{name:'myMessage'}"><span class="icon-comment"></span>消息中心</router-link>
            <router-link :to="{name:'myCollect'}"><span class="icon-heart"></span>我的收藏</router-link>
            <router-link :to="{name:'myCompany'}"><span class="icon-briefcase"></span>我的公司</router-link>
            <router-link :to="{name:'invoiceManage'}"><span class="icon-box"></span>发票管理</router-link>
            <router-link :to="{name:'consigneeAddress'}"><span class="icon-map-marker"></span>收件地址</router-link>
            <router-link :to="{name:'settings'}"><span class="icon-set"></span>账号设置</router-link>
            <router-link :to="{name:'logout'}"><span class="icon-exit"></span>安全退出</router-link>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        selected: '1',
        placeholder: '请输入服务机构名称',
        loged: true,
        menuShow: false,
        path:path,

        isShowManage:false
      }
    },
    created(){
      loginStatus(this);

      this.checkUserManage();
    },
    methods:{
      //检测这个用户是否有服务机构
      checkUserManage(){

        if(!this.userId){
          return;
        }

        //请求
        var url = path + "/index/user/user-company?user_id="+this.userId;
        this.$http.get(url).then(function(r){
          var td = r.data;

          console.log(td);

          //说明有服务机构
          if(td.is_has == 1){
            this.isShowManage = true;

            localStorage.companyId = td.company.id;
            sessionStorage.companyId = td.company.id;
            
          }

        })
        

      },
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
  }
</script>

<style media="screen">
  .manage_nav_wrapper{
    width: 100%;
    height: 67px;
    background: #0079FF;
  }
  .manage_nav{
    display: flex;
    width: 1210px;
    height: 67px;
    margin: auto;
    justify-content: space-between;
    align-items: center;
  }
  .manage_logo{
    width: 162px;
    height: 45px;
  }
  .manage_nav section:nth-child(2) a{
    display: inline-block;
    height: 67px;
    line-height: 67px;
    padding: 0 20px;
    color: #fff;
    font-size: 16px;
      transition: .3s;
  }
    .manage_nav section:nth-child(2) a:hover{
        background: #3089ff
    }
  .manage_select{
    display: flex;
    width: 385px;
    height: 32px;
    justify-content: space-between;
    align-items: center;
      background: #fff
  }
  .manage_select select{
    width: 110px;
    height: 32px;
    border: none;
    font-size: 13px;
    color: #b3b3b3;
      border-radius: 0;
  }
  .manage_select input{
    flex-grow: 1;
    height: 32px;
    border: none;
    padding: 0;
    padding-left: 15px;
    border-left: 1px solid #f1f1f1;
    font-size: 13px;
  }
  .manage_select_but{
    width: 80px;
    height: 32px;
    text-align: center;
    line-height: 32px;
    background: #2385FF;
    color: #fff;
    font-size: 14px;
      transition: .3s;
      cursor: pointer
  }
    .manage_select_but:hover{
        background: #4296ff
    }
  .manage_login{
    width: 145px;
    text-align: center;
  }
  .manage_login .unlogin{
    display: flex;
    width: 145px;
    height: 67px;
    justify-content: center;
    align-items: center;
  }
  .manage_login .unlogin a{
    font-size: 14px;
    color: #fff;
    padding: 0 10px;
  }
  .loged{
    width: 145px;
    height: 67px;
    position: relative;
    cursor: pointer;
      margin-right: 10px;
  }
  .loged_infor{
    display: flex;
    width: 145px;
    height: 67px;
    justify-content: space-between;
    align-items: center;
      cursor: pointer;
      transition: .3s;
      padding: 0 10px;
      float: right
  }
    .loged_infor:hover{
        background: #2a86ff;
    }
  .loged_infor .user_icon{
    width: 29px;
    height: 29px;
    border-radius: 100%;
  }
  .loged_infor .username{
    font-size: 14px;
    color: #fff;
  }
  .loged_infor .icon-angle-down{
    color: #fff;
    font-size: 12px;
  }
  .loged_menu{
    position: absolute;
    width: 143px;
    height: auto;
    border: 1px solid #e5e7ed;
    border-top: 0;
    top: 67px;
    left: 0;
  }
  .loged_menu a{
    display: block;
    width: 100%;
    height: 48px;
    color: #898989;
    font-size: 16px;
    text-align: center;
    line-height: 48px;
    border-top: 1px solid #e5e7ed;
    background: #fff;
      transition: .3s;
  }
  .loged_menu a.active,.loged_menu a:hover{
    color: #6398ed;
  }
  .loged_menu a span{
    display: inline-block;
    width: 30px;
    font-size: 18px;
      margin-left: -5px;
      vertical-align: middle;
      margin-top: -4px
  }
</style>
