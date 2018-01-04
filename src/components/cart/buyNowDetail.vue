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
                <span>{{address.name?address.name:''}}</span>
                <span>{{address.address?('三个id '+address.address):''}}</span>
            </p>
        </div>
        <div class="cartDetail_title">
            <span class="cartDetail_title_name">支付方式</span>
        </div>
        <div class="pay_way">
            
            <img v-for="(item,index) in payTypeList" :class="{active:payType==item.id}" :src="item.src" @click="dealClickPayType(item.id)"/>
            <!-- <img :class="{active:payType==0}" src="./images/alpay.png" />
            <img :class="{active:payType==1}" src="./images/weixinpay.png" />
            <img :class="{active:payType==2}" src="./images/caifu.png" /> -->
        </div>
        <div class="cartDetail_title">
            <span class="cartDetail_title_name">服务清单</span>
            <span class="cartDetail_title_btn"><router-link to="/manage/cart/cartList">返回修改购物车</router-link></span>
        </div>


        <div>

            
            <p class="gongsiname">{{buyNowData.data?buyNowData.data.company.name:''}}</p>
            <ul class="cartlists">
                <li >
                    <span>{{buyNowData.data?buyNowData.data.title:''}}</span>
                    <span class="money">￥{{buyNowData.data?buyNowData.data.price:''}}</span>
                    <span class="mun">x{{num}}</span>
                </li>
                <!-- <li>
                    <span>服务名称</span>
                    <span class="money">￥400.00</span>
                    <span class="mun">x2</span>
                </li> -->
            </ul>
            
            <div class="cartList_footer">
                <span class="label">全选</span>
                <div>
                    <span>已选中 <i>{{num}} </i>项服务</span>
                    <span>总价：<i>￥{{buyNowData.money?buyNowData.money:''}}</i></span>
                    <span>预付：<i>￥{{buyNowData.permoney?buyNowData.permoney:''}}</i></span>
                    <!-- <router-link to="/manage/cart/cartSuccess"> <span class="go_pay" @click="dealGoPay"> 提交订单</span></router-link> -->
                    <span class="go_pay" @click="dealMakeOrder"> 提交订单</span>
                </div>
            </div>
            
        </div>

      

        
        
   </div>
</template>

<script type="text/ecmascript-6">
export default {
    data() {
        return {
            payTypeList:[
                {
                    id:1,
                    src:require("./images/alpay.png")
                },{
                    id:2,
                    src:require("./images/weixinpay.png")
                },{
                    id:3,
                    src:require("./images/caifu.png")
                }
            ],
            payType:1,

            //页面状态: 
            pageType:"",

            cart:{},
            address:{},

            orderResult:{},

            buyNowData:{},

            service_id:0,
            num:0

            
        }
    },
    methods: {

        downloadBuyNowData:function(){

            this.service_id = this.$route.query.service_id;
            this.num = this.$route.query.num;

            var url = path + "/index/cart/buy-now";
            var dict = {
                service_id:this.service_id,
                num:this.num
            }
            this.$http.get(url,{params:dict}).then(function(r){
                var td = r.data;
                console.log(td)

                this.buyNowData = td;

                this.$forceUpdate();
            })

        },
        
        dealMakeOrder:function(){
            console.log("dealMakeOrder")

            // /index/cart/make-order

            
            //发送添加到购物车的请求
            var url = path + "/index/cart/make-order-buy-now";
            var dict = {
              user_id:this.userId,
              address_id:this.address.id,
              pay_type:this.payType,
              service_id:this.service_id,
              num:this.num
            }
            this.$http.post(url,dict,{"emulateJSON":true}).then(function(r){
              var td = r.data;
              if(td.status == 1){
                console.log("创建订单成功, 跳转到订单结果界面");


                this.orderResult = td;

                this.$router.push({path:"/manage/cart/orderResult/",query:{order_code:this.orderResult.order_code}})


              }else{
                this.showBoxStatus = 'orderFail';
              }
            })
            

            

        },

        dealPayPre:function(){
            console.log("dealGoPay")

            // /index/cart/make-order

            
            //发送添加到购物车的请求
            var url = path + "/index/cart/order-per-pay";
            var dict = {
              user_id:this.userId,
              order_code:this.orderResult.order_code
            }
            this.$http.get(url,{params:dict}).then(function(r){
              var td = r.data;
                //alert("成功获取预付款");

                console.log("td V")
                console.log(td);

                

                
  
                /*
                var r = confirm("跳转到支付界面?");
                if(r){
                    console.log("open")

                    //不能直接跳转, 直接跳转有问题
                    //location.href = url;
                }*/

            })
            

            

        },

        //发起支付

        dealClickPayType:function(id){
            this.payType = id;
        },
        downloadDefaultAddress:function(){
            var url = path + "/index/cart/default-address?user_id="+this.userId;
            this.$http.get(url).then(function(r){
                var td = r.data;
                this.address = td.address;
                //console.log("add="+JSON.stringify(this.address))
            })
        },
        downloadCartData:function(){
            //获取选择的商品列表
            var url = path + "/index/cart/buy-this?user_id="+this.userId;
            this.$http.get(url).then(function(r){
                var td = r.data;
                this.cart = td;
            })
        }
    },
    created(){

        loginStatus(this);

        this.downloadDefaultAddress();
        


        if(this.$route.query.type != undefined){
            console.log("buy now--")
            this.pageType = "buyNow"
            this.downloadBuyNowData();
        }else{
            console.log("cart")
            

            this.pageType = "cart"
            this.downloadCartData();
        }
        

    },
    computed:{

        

        getAllCount:function(){

            var count = 0;
            for(var k in this.cart){
                var subject = this.cart[k];
                
                for(var serviceIndex in subject.cart){
                    var service = subject.cart[serviceIndex];

                    count++;

                }
            }
            //this.allCount = count;
            //console.log("cunt = "+count);
            return count;
        },
        getAllPrice:function(){

            var price = 0;
            for(var k in this.cart){
                var subject = this.cart[k];
                
                for(var serviceIndex in subject.cart){
                    var service = subject.cart[serviceIndex];

                    
                    price += service.price*service.num;
                    

                }
            }
            //this.allPrice = price;
            return price;

        }

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
.cartDetail_title_btn a{
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

.pay_way>.active{
    border: 1px solid #559CF1;
}




</style>