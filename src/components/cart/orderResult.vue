<template>
   <div class="cartSuccess">
       <div class="success">
           <span class="icon-ok"></span>
           <div class="infor">
               <span class="font1">订单创建完成</span>
               <span class="font2">等待支付</span>
           </div>
       </div>
       <div class="btns">
           <a href="#/manage/personal/orderForm/orderFormAll">返回个人中心</a>
           <a href="#/">返回首页</a>
       </div>

       <!--支付提示 begin-->
        <div class="windows_wrapper"  v-show="showBoxStatus == 'payResult'">
          <div class="windows_box">
            <div class="windows_head">
              <span>支付结果</span>
              <!--span class="icon-close"></span-->
            </div>
            <div class="windows_content ">
              <div class="pay-dialog-cont-btn">
                  <div class="btn-red"  @click="dealUserClickPayFail">支付失败，继续支付</div>
                  <div class="btn-green"  @click="dealUserClickPaySuccess">支付成功</div>
              </div>
              <div class="pay-dialog-cont">
                  <b><i class="icon-question"></i>问题解答</b>
                  <p>1.支付宝支付页面打不开，或者打开无法支付，怎么办？<a href="#" target="_blank">查看>></a></p>
                  <p>2.总是支付失败，提示支付宝限额不足怎么办？<a href="#" target="_blank">查看>></a></p>
                  <p>3.我在支付宝重复支付多次怎么办？<a href="#" target="_blank">查看>></a></p>
              </div>
            </div>
          </div>
        </div>
        <!--支付提示 begin-->

        
        <!--订单支付失败 begin-->
        <div class="windows_wrapper" v-show="showBoxStatus == 'paySuccess'">
          <div class="windows_box">
            <div class="windows_head">
              <span>提示</span>
              <span class="icon-close" @click="dealCancelPay"></span>
            </div>
            <div class="windows_content order-dialog">
                  <i class="icon-ok"></i>支付完成, 点击完成跳转到我的订单
            </div>
            <div class="windows_btn">
              <span class="windows_btn_cancel" @click="dealJumpToOrderList">确定</span>
            </div>
          </div>
        </div>
        <!--订单支付失败 begin-->

        <!--订单支付失败 begin-->
        <div class="windows_wrapper" v-show="showBoxStatus == 'payFail'">
          <div class="windows_box">
            <div class="windows_head">
              <span>提示</span>
              <span class="icon-close" @click="dealCancelPay"></span>
            </div>
            <div class="windows_content order-dialog">
                  <i class="icon-close" @click="showBoxStatus = 'orderSuccess'"></i>支付失败, 点击继续支付
            </div>
            <div class="windows_btn">
              <span class="windows_btn_cancel" @click="showBoxStatus = 'orderSuccess'">确定</span>
            </div>
          </div>
        </div>
        <!--订单支付失败 begin-->

        
        <!--订单创建失败 begin-->
        <div class="windows_wrapper" v-show="showBoxStatus == 'orderFail'">
          <div class="windows_box">
            <div class="windows_head">
              <span>提示</span>
              <span class="icon-close" @click="showBoxStatus = ''"></span>
            </div>
            <div class="windows_content order-dialog">
                  <i class="icon-close"></i>订单提交失败,请重新提交
            </div>
            <div class="windows_btn">
              <span class="windows_btn_cancel">确定</span>
            </div>
          </div>
        </div>
        <!--订单创建失败 begin-->
        
        <!--订单创建成功 begin-->
        <div class="windows_wrapper" v-show="showBoxStatus == 'orderSuccess'">
          <div class="windows_box">
            <div class="windows_head">
              <span>提示</span>
              <span class="icon-close" @click="dealCancelPay"></span>
            </div>
            <div class="windows_content order-dialog">
                  <i class="icon-ok"></i>订单提交成功,请支付
            </div>
            <div class="windows_btn">
              <span class="windows_btn_cancel" @click="dealCancelPay">稍后支付</span>
              <a @click="clickPay" :href="payUrl" target="_blank" class="windows_btn_green">去支付</a>
            </div>
          </div>
        </div>
        <!--订单创建成功 begin-->
   </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {

        // payResult
        // paySuccess
        // orderFail
        // orderSuccess
        showBoxStatus:"orderSuccess",

        payUrl:""
          
      }
    },
    created(){

      var order_code = this.$route.query.order_code;
      this.order_code = order_code;

      var url = path + "/index/alipay/index-per?order_code="+this.order_code;
      this.payUrl = url

    },
    methods: {

      dealCancelPay:function(){
          this.showBoxStatus = ''
          this.$router.push("/manage/personal/orderForm/orderFormAll");
      },
      dealJumpToOrderList:function(){

          this.$router.push("/manage/personal/orderForm/orderFormAll");
      },
      dealUserClickPaySuccess:function(){

          console.log("验证")

          var url = path + "/index/order/order-status-from-code?order_code="+this.order_code;
          this.$http.get(url).then(function(r){
              var td = r.data;
              console.log(td)
              if(td.status == 1){
                
                this.showBoxStatus = 'paySuccess';

              }else{
                this.showBoxStatus = 'payFail';
              }
          })

      },

      dealUserClickPayFail:function(){

          //console.log("验证")
          this.showBoxStatus = 'orderSuccess';
      },

      clickPay:function(){
          //console.log("pay")
          this.showBoxStatus = 'payResult';
      }
        
    }
}
</script>

<style media="screen">
.cartSuccess{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 500px;
    margin: 30px 0;
    border: 1px solid #eef0f6;
}
.success{
    display: flex;
    justify-content: center;
    align-items: flex-start;
}
.cartSuccess .icon-ok{
    font-size: 65px;
    color: #87ce76;
}
.infor{
    display: flex;
    flex-direction: column;
}
.font1{
    font-size: 22px;
    color:#616161;
    padding-top: 10px;
}
.font2{
    font-size: 15px;
    color: #898989;
    padding: 10px 0;
}
.font3{
    font-size: 15px;
    color: #b3b3b3;
}
.btns{
    display: flex;
    justify-content: center;
    align-items: center;
}
.btns a{
    font-size: 16px;
    padding: 50px 20px;
    color: #6398ed;
}


  .pay-dialog-cont-btn{
      text-align: center
  }
  .pay-dialog-cont-btn>*{
      width: 210px;
      margin: 0 5px
  }
  .pay-dialog-cont{
      margin-top: 30px;
      border-top: 1px solid #ECEDF0;
      padding-top: 30px
  }
  .pay-dialog-cont>b{
      font-size: 16px;
      color: #616161;
      display: block;
      padding-bottom: 10px
  }
  .pay-dialog-cont>b>i{
      color: #0079FF;
      margin-right: 5px
  }
  .pay-dialog-cont>p{
      line-height: 22px;
      font-size: 14px;
      color: #898989;
      padding: 3px 0
  }
  .pay-dialog-cont>p>a{
      color: #0079FF;
      transition: .3s;
  }
  .pay-dialog-cont>p>a:hover{
      color: #3193ff
  }
  .order-dialog{
      font-size: 26px;
      text-align: center;
      color: #898989;
  }
  .order-dialog>.icon-close{
      color: #FF8A6E;
      margin-right: 10px;
      vertical-align: middle
  }
  .order-dialog>.icon-ok{
      color: #86CD76;
      margin-right: 10px;
      vertical-align: middle
  }
</style>