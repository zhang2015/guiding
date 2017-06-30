<template>
  <div>
    <ul>
      <li class="order_form">
        <section>
          <span>2017-02-14 12:20:33 订单号:</span>
          <span>12341245624</span>
        </section>
        <section>
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1498237151277&di=0c24d0bb103dfa9cedbf4bfb355ba637&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20150426%2Fmp12430345_1430031865711_1_th.jpeg" class="order_icon">
          <div>
            <a>知识产权评估</a>
            <span>四川贵鼎知识产权评估服务有限公司</span>
          </div>
          <p>
            <span>总额:￥400.00</span>
          </p>
          <p>
            <a>订单详情</a>
          </p>
          <p>
            <span class="nopay">待支付</span>
          </p>
          <p>
            <a class="topay">去支付</a>
          </p>
        </section>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
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
