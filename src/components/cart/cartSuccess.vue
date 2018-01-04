<template>
   <div class="cartSuccess">
       <div class="success">
           <span class="icon-ok"></span>
           <div class="infor">
               <span class="font1">订单支付成功</span>
               <span class="font2">请等待对你进行服务</span>
               <!-- <span class="font3">页面跳转中（6s）</span> -->
           </div>
       </div>
       <div class="btns">
           <a href="#/manage/personal/orderForm/orderFormAll">返回个人中心</a>
           <a href="#/">返回首页</a>
       </div>
   </div>
</template>

<script type="text/ecmascript-6">
export default {
    data() {
        return {
            
        }
    },
    methods: {
        
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
.icon-ok{
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
</style>