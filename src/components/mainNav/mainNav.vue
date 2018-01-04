<template>
  <div class="main_nav_wrapper">
    <div class="main_nav">
      <div @click="dropDownShow = !dropDownShow">
        <span>找机构</span>
        <span class="icon-angle-down"></span>
        <transition name="slide-fade">
          <div class="main_drop_down" v-show="dropDownShow">

            <!-- <section class="clearfix">
              <p>
                <img src="./images/icon_1.png">
                <span>
                  <router-link :to="{name:'organization',query:{ type:  1}}">评估公司</router-link>
                </span>
              </p>

              <router-link :to="{name:'organization',query:{ type:  1,content:1}}">知识产权评估</router-link>
              <router-link :to="{name:'organization',query:{ type:  1,content:2}}">房地产评估</router-link>
              <a>企业价值评估</a>
              <a>质押贷款评估</a>
              <a>整体评估</a>
              <a>林权评估</a>
              <a>矿权评估</a>
              <a>设备评估</a>
              <a>项目评估</a>           
            </section> -->

            
            <section v-for="fatherItem in qualificationList" class="clearfix" >
              <p>
                <img src="./images/icon_1.png">
                <span>
                  <router-link :to="{name:'organization',query:{ type:  fatherItem.id}}">{{fatherItem.name}}</router-link>
                </span>
              </p>

              <router-link v-for="item in fatherItem.child" :to="{name:'organization',query:{ type:  item.pid,content:item.id}}">{{item.name}}</router-link>
                        
            </section>


            <!--
            <section class="clearfix">
              <p>
                <img src="./images/icon_1.png">
                <span>
                  <router-link :to="{name:'organization',query:{ type:  1}}">评估公司</router-link>
                </span>
              </p>

              <router-link :to="{name:'organization',query:{ type:  1,content:1}}">知识产权评估</router-link>
              <router-link :to="{name:'organization',query:{ type:  1,content:2}}">房地产评估</router-link>
              <a>企业价值评估</a>
              <a>质押贷款评估</a>
              <a>整体评估</a>
              <a>林权评估</a>
              <a>矿权评估</a>
              <a>设备评估</a>
              <a>项目评估</a>           
            </section>
            <section class="clearfix">
              <p>
                <img src="./images/icon_2.png">
                <span><router-link :to="{name:'organization',query: { type:2}}">会计师事务所</router-link></span>
              </p>

              <a>财务审计</a>
              <a>税务审计</a>
              <a>验资服务</a>
              <a>咨询服务</a>
              <a>高新认定</a>
              <a>代理记账</a>    
            </section>
            <section class="clearfix">
              <p>
                <img src="./images/icon_3.png">
                <span><router-link :to="{name:'organization',query: { type:3}}">知识产权所</router-link></span>
              </p>
              <a>商标代理</a>
              <a>专利代理</a>
              <a>版权代理</a>
              <a>综合代理</a>
              <a>项目申报</a>        
            </section>
            <section class="clearfix">
              <p>
                <img src="./images/icon_4.png">
                <span><router-link :to="{name:'organization',query: { type:4}}">律师所</router-link></span>
              </p>
              <a>知识产权</a> 
              <a>婚姻家庭</a> 
              <a>交通事故</a> 
              <a>征地拆迁</a> 
              <a>土地房产</a> 
              <a>刑事辩护</a>   
            </section>
            -->
          </div>
        </transition>
      </div>
      <p>
        <router-link to="/main">首页</router-link>
        <i></i>
        <router-link to="/manage/applicationIn">免费入驻</router-link>
        <i></i>
        <router-link to="/main/company/firm">进入企业列表</router-link>
        <i></i>
        <router-link to="/main/news">新闻中心</router-link>
        <i></i>
        <router-link to="/main/help/helpAbout">关于我们</router-link>
      </p>
      <p>
        <span class="icon-shopping-cart"></span>
        <router-link to="/manage/cart"><span>   我的购物车</span></router-link>
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
        qualificationList:[]
      }
    },
    props:['show'],
    created(){
      
      var url = path + "/index/index/qualification"
      this.$http.get(url).then(function(r){
        var td = r.data;
        this.qualificationList = td;
      })


    },

    watch: {
      '$route' (to, from) {
        //console.log("to="+to.path+" from"+from.path)
        if(to.path != '/main'){
            this.dropDownShow = false
        }
        
        if(to.path == '/main'){
          this.dropDownShow = true
        }
      }
    },
    methods:{
      
    }

  }
</script>

<style media="screen">
  .main_nav_wrapper{
    width: 100%;
    height: 40px;
    border-bottom: 2px solid #0584FF;
    background: #ffffff;
  }
  .main_nav{
    display: flex;
    width: 1210px;
    height: 42px;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    background: #0584FF;
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
    background: #2990FF;
    position: relative;
    transition: .3s;
  }
    .main_nav div:nth-child(1):hover{
        background: #419cff
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
      opacity: .5
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
    transition: .3s;
  }
    .main_nav p:nth-child(2) a:hover{
        background: rgba(255,255,255,.08)
    }
  .main_nav p:nth-child(2) i{
    height: 16px;
    width: 1px;
    background: #4598FC;
  }
  .main_nav p:nth-child(3){
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
      transition: .3s
  }
    .main_nav p:nth-child(3):hover{
        background: #2890FF
    }
  .main_nav p:nth-child(3)>span:nth-child(1){
    padding-right: 7px;
    color:#fff
  }
    .main_nav p:nth-child(3)>a{
        color: #fff
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
    height: 406px;
    left: 0;
    top: 42px;
    z-index: 9;
      background: rgba(0,0,0,.7)
  }
  .main_drop_down section{
    padding: 10px 20px 10px 20px;
/*    background: #5385d5;*/
    border-bottom: 1px solid rgba(255,255,255,.1);
      transition: .3s;
  }
    .main_drop_down section:hover{
        background: rgba(0,0,0,.4)
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
      font-size: 14px
  }
    .main_drop_down section p span:nth-child(2)>a{
        font-size: 14px;
        font-weight: bold
    }
  .main_drop_down section a{
    float: left;
    line-height: 20px;
    font-size: 12px;
    padding-right: 14px;
    color: #fff;
      transition: .3s;
  }
    .main_drop_down section a:hover{
        color: #FFFF63
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
