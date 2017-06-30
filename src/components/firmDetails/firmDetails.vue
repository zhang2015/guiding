<template>
  <div>
    <mainHeader></mainHeader>
    <mainNav></mainNav>
    <div class="firm_detail_head_wrapper">
      <div class="firm_detail_head">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1498037453275&di=f5e0bb90fe595fae597d70d7631eb504&imgtype=0&src=http%3A%2F%2Fwww.riogrande.co.jp%2Fpinarello_opera%2Flogo_pinarello_sq01.jpg">
        <section>
          <h1>四川贵鼎知识产权评估服务有限公司<a><span class="icon-id"></span>认领公司</a></h1>
          <p>
            <span class="icon-tel"></span><span>电话:{{firmInfor.tel}}</span>
            <span class="icon-message"></span><span>邮箱:{{firmInfor.email}}</span>
            <span class="icon-globe"></span><span>网址:<a :href="'http://'+firmInfor.link" target="_blank">{{firmInfor.link}}</a></span>
          </p>
          <p>
            <span class="icon-compass"></span><span>地址:{{firmInfor.address}}</span>
          </p>
          <div>
            分享到:
            <span>
              <img src="./images/1.png" alt="">
            </span>
            <span>
              <img src="./images/2.png" alt="">
            </span>
            <span>
              <img src="./images/3.png" alt="">
            </span>
            <span>
              <img src="./images/4.png" alt="">
            </span>
          </div>
        </section>
      </div>
    </div>
    <div class="main_wrapper">
      <div class="firm_details main_content clearfix">
        <div class="main_content_left">
          <div class="tab_type_box">
            <div class="tab_type_head">
              <router-link :to="{ name: 'firmEquity' }">知识产权</router-link>
              <router-link :to="{ name: 'firmIntro' }">公司简介</router-link>
              <router-link :to="{ name: 'firmBusiness' }">工商信息</router-link>
            </div>
            <router-view></router-view>
          </div>
        </div>
        <div class="main_content_right">
          <recommend></recommend>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import mainHeader from '../mainHeader/mainHeader'
  import mainNav from '../mainNav/mainNav'
  import recommend from '../recommend/recommend'

  export default {
    data(){
      return{
        firmInfor:{
          name: '四川贵鼎知识产权评估服务有限公司',
          tel: '021-1231111',
          email: 'asdicahodh@qq.com',
          link: 'www.baidu.com',
          address: '四川省成都市高新区天府三街新希望国际B座1201'
        },
      }
    },
    components:{
      mainHeader,
      mainNav,
      recommend
    }
  }
</script>

<style media="screen">
  .firm_detail_head_wrapper{
    width: 100%;
    height: 198px;
    padding: 20px 0;
    background: #f5f5f5;
  }
  .firm_detail_head{
    width: 1208px;
    height: 194px;
    margin: auto;
    border: 1px solid #e5e7ed;
    background: #fff;
  }
  .firm_detail_head{
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .firm_detail_head img{
    width: 132px;
    height: 132px;
    border: 1px solid #e5e7ed;
    margin: 0 20px;
  }
  .firm_detail_head section h1{
    display: flex;
    height: 40px;
    justify-content: flex-start;
    align-items: center;
    font-size: 20px;
    color: #616161;
    font-weight: 600;
  }
  .firm_detail_head section h1 a{
    font-size: 13px;
    color: #6398ed;
    font-weight: normal;
    padding-left: 20px;
  }
  .firm_detail_head section h1 a span{
    font-size: 16px;
    padding-right: 5px;
  }
  .firm_detail_head section p{
    display: flex;
    height: 30px;
    justify-content: flex-start;
    align-items: center;
    font-size: 15px;
    color: #b3b3b3;
  }
  .firm_detail_head section p span:nth-child(2n){
    padding: 0 25px 0 10px;
  }
  .firm_detail_head section p span a{
    color: #6398ed;
  }
  .firm_detail_head section div{
    display: flex;
    height: 40px;
    justify-content: flex-start;
    align-items: center;
  }
  .firm_detail_head section div span{
    width: 22px;
    height: 22px;
    padding-left: 10px;
  }
  .firm_detail_head section div span img{
    width: 22px;
    height: 22px;
    border: 0;
    margin: 0;
  }
  .firm_detail_content{
    padding: 30px 20px;
  }
</style>
