<template>
  <div>
    <div class="tab_type_box">
      <div class="tab_type_head">
        <a class="active">订单详情</a>
      </div>
      <div class="padding20">
          <div class="order_form">
            <section>
              <span>2017-02-14 12:20:33 订单号:</span>
              <span>12341245624</span>
            </section>
            <div class="order_form_div">
              <p>
                服务项目一
              </p>
              <p>
                丁老板 18312341234
              </p>
              <p>
                总额：<span class="money">￥400.00</span>
              </p>
              <p>
                待支付
              </p>
              <p>
                <a class="change_pay">修改价格</a>
              </p>
            </div>
          </div>
          <p class="manageOrderInforTitle">收件地址</p>
          <section class="manageOrderInforBox">
            <span class="payWay payWay_alpay"></span>
          </section>
          <p class="manageOrderInforTitle">服务内容</p>
          <section class="manageOrderInforBox manageOrderInforBox_b">
            <p>服务项目一</p>
            <p>
              总额：
              <span>￥400.00</span>
              预付款：
              <span>￥400.00</span>
            </p>
          </section>
          <p class="manageOrderInforTitle">服务进度</p>
          <section class="manageOrderInforBox">
            <section>
              <span class="Speed icon-doc active"></span>
              <span class="line"></span>
              <span class="Speed icon-handshake"></span>
              <span class="line"></span>
              <span class="Speed icon-checkin"></span>
              <span class="line"></span>
              <span class="Speed icon-rmb"></span>
              <span class="line"></span>
              <span class="Speed icon-plane"></span>
              <span class="line"></span>
              <span class="Speed icon-check"></span>
            </section>
            <section class="top">
              <div>
                <span>生成订单</span>
                <span class="btn">取消订单</span>
              </div>
              <div>
                <span>签合同</span>
                <span class="btn">已邮寄</span>
              </div>
              <div>
                <span>作报告</span>
                <span class="btn">确认报告</span>
              </div>
              <div>
                <span>收尾款</span>
                <span>对方已付尾款</span>
              </div>
              <div>
                <span>邮寄报告</span>
                <span class="btn">邮寄报告</span>
              </div>
              <div>
                <span>服务完成</span>
              </div>
            </section>
          </section>
      </div>
    </div>
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
.order_form .money{
  color:#ff8a6e;
}
.order_form .order_form_div{
  display: flex;
  height: 70px;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
  color: #616161;
}
.order_form .change_pay{
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
}
.manageOrderInforTitle{
  padding: 20px 0;
  font-size: 13px;
  font-weight: 600;
  color: #616161;
}
.manageOrderInforBox{
  padding: 20px 0;
  margin-bottom: 20px;
  border-top: 1px solid #e5e7ed;
  border-bottom: 1px solid #e5e7ed;
  color: #616161;
}
.payWay{
  display: block;
  width: 158px;
  height: 70px;
  border: 1px solid #e5e7ed;
  background-repeat: no-repeat;
  background-position: center;
}
.payWay_alpay{
  background-image: url(image/alpay.png);
}
.manageOrderInforBox section{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.manageOrderInforBox section.top{
  align-items: flex-start;
}
.manageOrderInforBox section div{
  width: 80px;
  text-align: center;
}
.manageOrderInforBox section div span{
  display: block;
}
.manageOrderInforBox section div span:nth-child(1){
  padding: 15px 0;
  color: #616161;
}
.manageOrderInforBox section div span.btn{
  width: 70px;
  height: 25px;
  line-height: 25px;
  border-radius: 4px;
  border: 1px solid #e5e7ed;
  margin: auto;
}
.manageOrderInforBox_b{
  display: flex;
  justify-content: space-between;
}
.Speed{
  width: 78px;
  height: 78px;
  border: 1px dashed #ccc;
  border-radius: 100%;
  background: #f8f8f8;
  font-size: 32px;
  text-align: center;
  line-height: 78px;
  color: #b3b3b3;
}
.Speed.active{
  color: #87ce76;
  border: 1px dashed #87ce76;
}
.line{
  flex-grow: 1;
  height: 0px;
  border-top: 1px dashed #ccc;
}
</style>
