<template>
  <div>
    <ul>
      <li class="order_form" v-for="item in list" :key="item.id">
        <section>
          <span>{{item.created_at}} 订单号:</span>
          <span>{{item.order_no}}</span>
        </section>
        <section>
          <img :src="path+item.sellcompany.cover_img" class="order_icon">
          <div>
            <a>{{item.servar_area}}</a>
            <span>{{item.sellcompany.name}}</span>
          </div>
          <p>
            <span>总额:￥{{item.price}}</span>
          </p>
          <p>
            <router-link :to="{ name: 'orderPersonDetail',params:{ orderId: item.id}}">订单详情</router-link>
          </p>
          <p>
            <span class="nopay">{{order_status[item.order_status]}}</span>
          </p>
          <p>
            <a class="topay" v-show="item.order_status == 0" :href="path + '/index/alipay/index-per?order_code='+item.order_code">去支付</a>
          </p>
        </section>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:['list'],
    data(){
      return {
        path:path,
        order_status:order_status
      }
    },
    created(){
    },
    watch:{
      'list':function(){
      }
    },
    methods:{
      
    }
  }
</script>

<style media="screen">
  .order_form{
    border: 1px solid #e5e7ed;
    margin-bottom: 20px;
  }
  .order_form section:nth-child(1){
    display: flex;
    height: 31px;
    justify-content: flex-start;
    align-items: center;
    padding-left: 20px;
    background: #f9fafc;
    border-bottom: 1px solid #e5e7ed;
    font-size: 10px;
  }
  .order_form section:nth-child(1) span:nth-child(1){
    color: #b3b3b3;
  }
  .order_form section:nth-child(1) span:nth-child(2){
    color: #616161;
  }
  .order_form section:nth-child(2){
    display: flex;
    height: 90px;
    justify-content: space-between;
    align-items: center;
  }
  .order_form section:nth-child(2) img{
    width: 60px;
    height: 60px;
    padding: 0 20px;
  }
  .order_form section:nth-child(2) div{
    flex-grow: 1;
  }
  .order_form section:nth-child(2) div a{
    display: block;
    font-size: 14px;
    color: #616161;
    line-height: 24px;
  }
  .order_form section:nth-child(2) div span{
    display: block;
    font-size: 10px;
    color: #898989;
    line-height: 20px;
  }
  .order_form section:nth-child(2) p:nth-child(3){
    width: 150px;
    color: #898989;
  }
  .order_form section:nth-child(2) p:nth-child(4){
    width: 115px;
  }
  .order_form section:nth-child(2) p:nth-child(4) a{
    color: #6398ed;
  }
  .order_form section:nth-child(2) p:nth-child(5){
    width: 105px;
  }
  .order_form section:nth-child(2) p:nth-child(5) span{
    color: #b3b3b3;
  }
  .order_form section:nth-child(2) p:nth-child(5) span.nopay{
    color: #ff8a6e;
  }
  .order_form section:nth-child(2) p:nth-child(6){
    width: 68px;
    padding-right: 20px;
  }
  .order_form section:nth-child(2) p:nth-child(6) a{
    display: block;
    width: 66px;
    height: 24px;
    text-align: center;
    line-height: 24px;
    border-radius: 4px;
  }
  .order_form section:nth-child(2) p:nth-child(6) a.topay{
    border: 1px solid #ff8a6e;
    color: #ff8a6e;
  }
  .order_form section:nth-child(2) p:nth-child(6) a.getgoods{
    border: 1px solid #87ce76;
    color: #87ce76;
  }
</style>
