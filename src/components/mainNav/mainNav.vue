<template>
  <div class="main_nav_wrapper">
    <div class="main_nav">
      <div @click="dropDownShow = !dropDownShow">
        <span>找机构</span>
        <span class="icon-angle-down"></span>
        <transition name="slide-fade">
          <div class="main_drop_down" v-show="dropDownShow">
            <section class="clearfix">
              <p>
                <img src="./images/icon_1.png">
                <span>评估公司</span>
              </p>
              <router-link :to="{name:'organization'}">知识产权评估</router-link>
              <a>房地产评估</a>
              <a>企业价值评估</a>
              <a>上市评估</a>
              <a>质押贷款评估</a>            
            </section>
            <section class="clearfix">
              <p>
                <img src="./images/icon_2.png">
                <span>会计师事务所</span>
              </p>
              <a>报表审计</a>
              <a>财务审计</a>       
            </section>
            <section class="clearfix">
              <p>
                <img src="./images/icon_3.png">
                <span>知识产权所</span>
              </p>
              <a>商标代理</a>
              <a>专利代理</a>
              <a>版权代理</a>         
            </section>
            <section class="clearfix">
              <p>
                <img src="./images/icon_4.png">
                <span>律师所</span>
              </p>
              <a>知权律师</a>
              <a>婚姻</a>   
            </section>
          </div>
        </transition>
      </div>
      <p>
        <router-link to="/main">首页</router-link>
        <i></i>
        <router-link to="/manage">机构入驻</router-link>
        <i></i>
        <router-link to="/main/news">新闻中心</router-link>
        <i></i>
        <router-link to="/main/about">关于我们</router-link>
      </p>
      <p>
        <span class="icon-shopping-cart"></span>
        <span>我的购物车</span>
        <span class="items_num">0</span>
      </p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        dropDownShow:false,
      }
    },
    methods:{
      
    },
  }
</script>

<style media="screen">
  .main_nav_wrapper{
    width: 100%;
    height: 40px;
    border-bottom: 2px solid #5385d5;
  }
  .main_nav{
    display: flex;
    width: 1210px;
    height: 42px;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    background: #5385d5;
    color: #fff;
    font-size: 15px;
  }
  .main_nav p{
    height: 42px;
  }
  .main_nav div:nth-child(1){
    width: 226px;
    height: 42px;
    line-height: 42px;
    cursor: pointer;
    background: #6398ed;
    position: relative;
  }
  .main_nav div:nth-child(1) span:nth-child(1){
    float: left;
    padding-left: 20px;
  }
  .main_nav div:nth-child(1) span.icon-angle-down{
    height: 42px;
    line-height: 42px;
    font-size: 12px;
    float: right;
    padding-right: 20px;
  }
  .main_nav p:nth-child(2){
    flex-grow: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .main_nav p:nth-child(2) a{
    width: 112px;
    height: 42px;
    line-height: 42px;
    text-align: center;
    cursor: pointer;
    color: #fff;
  }
  .main_nav p:nth-child(2) i{
    height: 16px;
    width: 1px;
    background: #7099da;
  }
  .main_nav p:nth-child(3){
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .main_nav p:nth-child(3) span:nth-child(1){
    padding-right: 10px;
  }
  .items_num{
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background: #ff8a6e;
    margin-left: 5px;
    text-align: center;
    line-height: 15px;
    font-size: 14px;
  }
  .main_drop_down{
    position: absolute;
    width: 226px;
    height: auto;
    left: 0;
    top: 42px;
  }
  .main_drop_down section{
    padding: 10px 20px 20px 20px;
    background: #5385d5;
    border-bottom: 1px solid #6696e4;
  }
  .main_drop_down section:last-child{
    border: 0;
  }
  .main_drop_down section p{
    display: flex;
    height: 30px;
    justify-content: flex-start;
    align-items: center;
    font-size: 14px;
  }
  .main_drop_down section p span:nth-child(2){
    padding-left: 10px;
  }
  .main_drop_down section a{
    float: left;
    line-height: 20px;
    font-size: 12px;
    padding-right: 14px;
    color: #fff;
  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s;
    opacity: 0;
  }
  .slide-fade-enter{
    transform: translateY(-10px);
    opacity: 0;
  }
</style>
