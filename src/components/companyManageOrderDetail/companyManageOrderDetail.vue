<template>
  <div>
    <div class="tab_type_box">
      <div class="tab_type_head">
        <a class="active">订单详情</a>
      </div>
      <div class="padding20">
          <div class="order_form">
            <section>
              <span>{{order.created_at?order.created_at:''}} 订单号:</span>
              <span>{{order.order_no?order.order_no:''}}</span>
            </section>
            <div class="order_form_div">
              <p>
                {{order.servar_area?order.servar_area:''}}
              </p>
              <p>
                {{order.user?order.user.name:''}} {{order.user?order.user.phone:''}}
              </p>
              <p>
                总额：<span class="money">￥{{order.price?order.price:''}}</span>
              </p>
              <p>
                待支付
              </p>
              <p>
                <a class="change_pay" @click="tochangepay = true;price = order.price">修改价格</a>
              </p>
            </div>
          </div>
          <p class="manageOrderInforTitle">收件地址</p>
          <section class="manageOrderInforBox">
            <p>{{address.province?(address.province.name+' '+address.city.name+' '+address.area.name+' '+address.address):''}}</p>
          </section>
          <p class="manageOrderInforTitle">支付方式</p>
          <section class="manageOrderInforBox">
            <span v-if="order.pay_type == 1" class="payWay payWay_alpay"></span>
            <span v-else-if="order.pay_type == 2" class="payWay payWay_weixin"></span>
            <span v-else-if="order.pay_type == 3" class="payWay payWay_caifutong"></span>
            <span v-else class="payWay"></span>
          </section>
          <p class="manageOrderInforTitle">服务内容</p>
          <section class="manageOrderInforBox manageOrderInforBox_b">
            <p>{{order.servar_area?order.servar_area:''}}</p>
            <p>
              总额：
              <span>￥{{order.price?order.price:''}}</span>
              预付款：
              <span>￥{{order.perpay?order.perpay:''}}</span>
            </p>
          </section>
          <p class="manageOrderInforTitle">服务进度</p>
          <section class="manageOrderInforBox">
            <section>
              <span class="Speed icon-doc" v-bind:class="{active:status != 0}"></span>
              <span class="line"></span>
              <span class="Speed icon-handshake" v-bind:class="{active:status >= 2}"></span>
              <span class="line"></span>
              <span class="Speed icon-checkin" v-bind:class="{active:status >= 3}"></span>
              <span class="line"></span>
              <span class="Speed icon-rmb" v-bind:class="{active:status >= 4}"></span>
              <span class="line"></span>
              <span class="Speed icon-plane" v-bind:class="{active:status >= 5}"></span>
              <span class="line"></span>
              <span class="Speed icon-check" v-bind:class="{active:status == 6}"></span>
            </section>
            <section class="top">
              <div>
                <span>生成订单</span>
                <span class="btn" v-show="status == 1" @click="deletorder(id)">取消订单</span>
              </div>
              <div>
                <span>签合同</span>
                <span class="btn" v-show="status >= 2">已邮寄</span>
              </div>
              <div>
                <span>作报告</span>
                <span class="btn" v-show="status >= 3">确认报告</span>
              </div>
              <div>
                <span>收尾款</span>
                <span v-show="status >= 4">对方已付尾款</span>
              </div>
              <div>
                <span>邮寄报告</span>
                <span class="btn" v-show="status >= 5">邮寄报告</span>
              </div>
              <div>
                <span>服务完成</span>
              </div>
            </section>
          </section>
      </div>
    </div>
    <div class="changePayBox" v-show="tochangepay">
      <p>输入金额</p>
      <input type="text" class="changepayinput" v-model="price">
      <section>
        <span @click="tochangepay = false">取消</span>
        <span @click="changeorderpay(id)">确认</span>
      </section>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        order:{},
        address:{},
        status:0,
        id:this.$route.params.orderId,
        price:'',
        tochangepay: false
      }
    },
    created(){
      var id = this.$route.params.orderId;
      var url = path + "/index/company-order/show?id="+id;
      this.$http.get(url).then(function(r){
        var td = r.data;
        this.order = td.order;
        this.address = td.address;
        if (this.order.order_status == 1) {
          this.status = 1;
        } else if (this.order.order_status == 2) {
          this.status = 2;
        } else if (this.order.order_status == 3) {
          this.status = 3;
        } else if (this.order.order_status == 4) {
          this.status = 4;
        } else if (this.order.order_status == 5 ) {
          this.status = 5;
        } else if (this.order.order_status == 100) {
          this.status = 6;
        }
      })
    },
    methods:{
      deletorder:function(id){
        var url = path + '/index/order/del-order';
        var dict={
          order_no: this.order.order_no,
          User_id: localStorage.getItem('userId')
        }
        this.$http.post(url,dict,{"emulateJSON":true}).then(function(r){
          var data = r.data;
          if (data.status == 1) {
            alert('删除成功');
          } else {
            alert(data.info)
          }
        })
      },
      changeorderpay:function(id){
        if (this.status != 0) {
          alert('订单已生成，不能修改');
          return false;
        }
        var url = path + '/index/order/update-order-price';
        var dict={
          order_no: this.order.order_no,
          User_id: localStorage.getItem('userId'),
          Price: this.order.price
        }
        this.$http.post(url,dict,{"emulateJSON":true}).then(function(r){
          this.tochangepay = false;
          var data = r.data;
          if (data.status == 1) {
            this.order.price = this.price;
            alert('修改成功')
          } else {
            alert(data.info)
          }
        })
      }
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
.payWay_weixin{
  background-image: url(image/weixin.png);
}
.payWay_caifutong{
  background-image: url(image/caifutong.png);
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
.changePayBox{
  position: fixed;
  top: 30%;
  left: 50%;
  margin-left: -150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 150px;
  border: 1px solid #cccccc;
  border-radius: 10px;
  background: #ffffff;
}
.changePayBox p{
  padding-top: 30px;
}
.changePayBox section{
  display: flex;
  justify-content: center;
  height: 40px;
  width: 100%;
}
.changePayBox section span{
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #cccccc;
  font-size: 14px;
}
.changePayBox section span:nth-child(1){
  border-right: 1px solid #cccccc;
}
</style>
