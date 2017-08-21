<template>
   <div>
       <div class="cart_head">
            <span class="cart_title">确认订单</span>
            <div class="cart_plan">
                <img src="./images/cart1.png">
                <img src="./images/cart2.png">
                <img src="./images/cart3.png">
                <img src="./images/cart4.png">
            </div>
        </div>
        <p class="carthot">请核对订单信息</p>
        <div class="cartDetail_title">
            <span class="cartDetail_title_name">收件地址</span>
            <span class="cartDetail_title_btn">新增收件地址</span>
        </div>
        <div class="address">
            <p>
                <span class="icon-map-marker"></span>
                <span>陈邓</span>
                <span>收件地址收件地址收件地址收件地址收件地址收件地址</span>
            </p>
        </div>
        <div class="cartDetail_title">
            <span class="cartDetail_title_name">支付方式</span>
        </div>
        <div class="pay_way">
            <img src="./images/alpay.png" />
            <img src="./images/weixinpay.png" />
            <img src="./images/caifu.png" />
        </div>
        <div class="cartDetail_title">
            <span class="cartDetail_title_name">服务清单</span>
            <span class="cartDetail_title_btn">返回修改购物车</span>
        </div>
        <p class="gongsiname">公司名称公司名称公司名称公司名称</p>
        <ul class="cartlists">
            <li>
                <span>服务名称</span>
                <span class="money">￥400.00</span>
                <span class="mun">x2</span>
            </li>
            <li>
                <span>服务名称</span>
                <span class="money">￥400.00</span>
                <span class="mun">x2</span>
            </li>
        </ul>
        <div class="cartList_footer">
            <span class="label">全选</span>
            <div>
                <span>已选中<i>2</i>项服务</span>
                <span>总价：<i>￥400.00*50%</i></span>
                <span>预付：<i>￥200.00</i></span>
                <span class="go_pay">提交订单</span>
            </div>
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
.carthot{
    padding-bottom: 10px;
    border-bottom: 1px solid #eef0f6;
    color: #898989;
}
.cartDetail_title{
    display: flex;
    width: 98%;
    margin: auto;
    height: 60px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eef0f6;
}
.cartDetail_title_name{
    font-size: 13px;
    font-weight: bold;
    color: #616161;
}
.cartDetail_title_btn{
    color:#8aaff1;
}
.address{
    width: 88%;
    height: 100px;
    padding: 0 5%;
    margin: auto;
    font-size: 16px;
    color: #898989;
    line-height: 80px;
    border-bottom: 1px solid #eef0f6;
}
.address span{
    padding: 0 10px;
}
.pay_way{
    width: 88%;
    padding: 2% 5%;
    border-bottom: 1px solid #eef0f6;
}
.pay_way img{
    display: inline-block;
    margin-right: 20px;
    border: 1px solid #eef0f6;
}
.gongsiname{
    width: 98%;
    margin: auto;
    font-size: 16px;
    color: #898989;
    line-height: 40px;
}
.cartlists li{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    width: 92%;
    padding: 0 3%;
    font-size: 16px;
    color: #898989;
    background: #f9fafc;
    margin: auto;
    border: 1px solid #eef0f6;
}
.money{
    color: #ff8a6e;
}
.cartList_footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 40px auto;
    height: 45px;
    width: 96%;
    padding: 0 2%;
    padding-right: 0; 
    background: #f9fafc;
    border: 1px solid #eef0f6;
}
.cartList_footer span{
    font-size: 16px;
    color: #898989;
}
.cartList_footer span i{
    color: #ff8a6e;
}
span.go_pay{
        display: inline-block;
        width: 128px;
        height: 45px;
        text-align: center;
        line-height: 45px;
        background: #6398ed;
        color: #ffffff;
    }
</style>