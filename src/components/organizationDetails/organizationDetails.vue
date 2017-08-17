<template>
  <div>
    <mainHeader></mainHeader>
    <mainNav></mainNav>
    
    <div class="main_wrapper">
      <div class="firm_details main_content clearfix">
        <div class="main_content_left orgain_content_right">
          <div class="organ_head_infor">
            <div class="organ_head_item">
              <span class="organ_head_name">服务项目：</span>
              <div>
                <span>服务名称一</span>
                <span>服务名称二</span>
                <span>服务名称三</span>
                <span>服务名称四</span>
              </div>
            </div>
            <div class="organ_head_item">
              <span class="organ_head_name"></span>
              <p>选中此项的服务内容</p>
            </div>
            <div class="organ_head_item">
              <span class="organ_head_name">价格：</span>
              <span class="money">￥400.00</span>
            </div>
            <div class="organ_head_item">
              <span class="organ_head_name">数量：</span>
              <input type="number"/>
            </div>
            <div class="organ_head_item">
              <span class="organ_head_name"></span>
              <span class="btn btn_buy">立即购买</span>
              <span class="btn btn_add">加入购物清单</span>
            </div>
          </div>
          <div class="tab_type_box">
            <div class="tab_type_head">
              <router-link :to="{ name: 'organizationIntro' }">公司主页</router-link>
              <router-link :to="{ name: 'organizationEquity' }">成交记录</router-link>
              <router-link :to="{ name: 'organizationBusiness' }">服务范围</router-link>
              <router-link :to="{ name: 'organizationTeam' }">管理团队</router-link>
            </div>
            <router-view></router-view>
          </div>
        </div>
        <div class="main_content_right orgain_content_left">
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
  .organ_head_infor{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 962px;
    height: 300px;
    border: 1px solid #eef0f6;
    margin-bottom: 20px;
  }
  .organ_head_item{
    display: flex;
    width: 90%;
    height: 50px;
    font-size: 14px;
    justify-content: flex-start;
    align-items: center;
    color: #898989;
  }
  .organ_head_name{
    width: 100px;
    font-weight: bold;
    color: #616161;
  }
  .organ_head_item div span{
    padding: 5px 10px;
    border: 1px solid #eef0f6;
    margin-right: 20px;
  }
  .organ_head_item .money{
    font-size: 16px;
    font-weight: bold;
    color: orange;
  }
  .btn{
    height: 30px;
    border: 1px solid #eef0f6;
    border-radius: 5px;
    text-align: center;
    line-height: 30px;
  }
  .btn_buy{
    width: 100px;
    background: #6398ed;
    color: #fff;
  }
  .btn_add{
    width: 150px;
    background: #d6d6d6;
    color: #616161;
    margin-left: 20px;
  }
  .orgain_content_right{
    float: right;
  }
  .orgain_content_left{
    float: left;
  }
</style>
