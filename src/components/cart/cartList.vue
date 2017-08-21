<template>
    <div>
        <div class="cart_head">
            <span class="cart_title">购物车</span>
            <div class="cart_plan">
                <img src="./images/cart1.png">
                <img src="./images/cart2.png">
                <img src="./images/cart3.png">
                <img src="./images/cart4.png">
            </div>
        </div>
        <div class="cartList_title">
            <div class="title_head">
                <span class="ring"></span>
                <span class="label">全选</span>
                <span class="cartList_title_name">服务项目</span>
            </div>
            <span class="cartList_title_cion">价格</span>
            <span class="cartList_title_num">数量</span>
            <span class="cartList_title_do">操作</span>
        </div>
        <div class="cartList_order_title">
            <span class="ring"></span>
            <span class="gongsi">公司名称公司名称公司名称</span>
        </div>
        <ul class="cartList_orders">
            <li>
                <div class="title_head">
                    <span class="ring"></span>
                    <span class="order_name">订单名称</span>
                </div>
                <span class="pay_money">￥200.00</span>
                <input type="number" />
                <span class="handle">删除</span>
            </li>
            <li>
                <div class="title_head">
                    <span class="ring"></span>
                    <span class="order_name">订单名称</span>
                </div>
                <span class="pay_money">￥200.00</span>
                <input type="number" />
                <span class="handle">删除</span>
            </li>
            <li>
                <div class="title_head">
                    <span class="ring"></span>
                    <span class="order_name">订单名称</span>
                </div>
                <span class="pay_money">￥200.00</span>
                <input type="number" />
                <span class="handle">删除</span>
            </li>
        </ul>
        <div class="cartList_title cartList_footer">
            <div class="title_head">
                <span class="ring"></span>
                <span class="label">全选</span>
                <span class="cartList_title_name">删除选中服务</span>
            </div>
            <div>
                <span>已选中<i>2</i>项服务</span>
                <span>总价：<i>￥400.00</i></span>
                <span class="go_pay">去结算</span>
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
    .cartList_title{
        display: flex;
        width: 96%;
        height: 45px;
        padding: 0 2%;
        justify-content: space-between;
        align-items: center;
        background: #f9fafc;
        border: 1px solid #eef0f6;
    }
    .title_head{
        width: 200px;
    }
    .cartList_title span,.order_name{
        color: #898989;
        font-size: 16px;
    }
    .ring{
        display: inline-block;
        width: 16px;
        height: 16px;
        border: 1px solid #eef0f6;
        border-radius: 100%;
        background: #ffffff;
    }
    .cartList_title .label,.order_name{
        padding: 0 20px;
    }
    .cartList_title .cartList_title_do{
        padding-right: 50px;
    }
    .cartList_order_title{
        display: flex;
        height: 40px;
        padding-top: 10px;
        justify-content: flex-start;
        align-items: center;
        font-size: 16px;
        color: #898989;
    }
    .cartList_orders li{
        display: flex;
        height: 60px;
        width: 96%;
        padding: 0 2%;
        justify-content: space-between;
        align-items: center;
        font-size: 16px;
        color: #898989;
        border: 1px solid #eef0f6;
        background: #f9fafc;
    }
    .pay_money{
        color: #ff8a6e;
    }
    .handle{
        padding-right: 50px;
    }
    /*.cartList_orders li:last-child{
        border-top: 0;
    }*/
    .gongsi{
        padding-left: 10px;
    }
    .cartList_footer{
        width: 98%;
        padding-right: 0;
        justify-content: space-between;
        font-size: 16px;
        color: #898989;
        margin-top: 20px;
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