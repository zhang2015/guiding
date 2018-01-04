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
                <span class="ring" :class="{active:isSelectAll}"  @click="dealSelectAll()"></span>
                <span class="label" @click="dealSelectAll()">全选</span>
                <span class="cartList_title_name">服务项目</span>
            </div>
            <span class="cartList_title_cion">价格</span>
            <span class="cartList_title_num">数量</span>
            <span class="cartList_title_do">操作</span>
        </div>

        <div v-for="item in list">
            <div class="cartList_order_title">
                <span class="ring" :class="{active:item.is_select}"  @click="dealSelectCompany(item)"></span>
                <span class="gongsi">{{item.company_name}}</span>
            </div>

            <ul class="cartList_orders">
                <li v-for="service in item.cart">
                    <div class="title_head">
                        <span class="ring" :class="{active:service.is_select}" @click="dealSelectService(service,item)"></span>
                        <span class="order_name">{{service.service_name}}</span>
                    </div>
                    <span class="pay_money">￥{{service.price}}</span>
                    <input type="number" v-model="service.edit_num" @change="dealChangeNum(service,service.edit_num)"/>
                    <span class="handle" @click="dealDelCartItem(service.cart_id)">删除</span>
                </li>
            </ul>
        </div>

        <!-- 
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
        </ul> -->

        <div class="cartList_title cartList_footer">
            <div class="title_head">
                <span class="ring" :class="{active:isSelectAll}"  @click="dealSelectAll()"></span>
                <span class="label" @click="dealSelectAll()">全选</span>
                <span class="cartList_title_name">删除选中服务</span>
            </div>
            <div>
                <span>已选中<i>{{getSelectAllCount}}</i>项服务</span>
                <span>总价：<i>￥{{getSelectAllPrice}}</i></span>
                <!-- <router-link to="/manage/cart/cartDetail"><span class="go_pay"> 去结算</span></router-link> -->
                <a><span class="go_pay" @click="dealGoPay">去结算</span></a>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    data() {
        return {
            list:{},
            isSelectAll:false,
            allCount:0,
            allPrice:0
        }
    },
    watch:{
        'list':function(){

        }
    },
    computed:{

        getSelectAllCount:function(){

            var count = 0;
            for(var k in this.list){
                var subject = this.list[k];
                
                for(var serviceIndex in subject.cart){
                    var service = subject.cart[serviceIndex];

                    if(service.is_select){
                        count++;
                    }

                }
            }
            //this.allCount = count;
            //console.log("cunt = "+count);
            return count;
        },
        getSelectAllPrice:function(){

            var price = 0;
            for(var k in this.list){
                var subject = this.list[k];
                
                for(var serviceIndex in subject.cart){
                    var service = subject.cart[serviceIndex];

                    if(service.is_select){
                        price += service.price*service.num;
                    }

                }
            }
            //this.allPrice = price;
            return price;

        }

    },
    methods: {
        dealGoPay:function(){

            var service_list = []
            for(var k in this.list){
                var subject = this.list[k];

                console.log("-> "+subject.is_select)
                for(var serviceIndex in subject.cart){
                    var service = subject.cart[serviceIndex];
                    if(service.is_select){
                        service_list.push(service.cart_id)
                    }
                }
            }
            //console.log(service_list)

            if(service_list.length == 0){
                alert("请至少选择1项商品, 再点击结算");
                return;
            }

            //发送设置选择商品的请求
            var url = path + "/index/cart/buy-this-change";
            var dict = {
              user_id:this.userId,
              cart_id:service_list
            }
            this.$http.post(url,dict,{"emulateJSON":true}).then(function(r){
              var td = r.data;
              if(td.status == 1){
                //console.log("商品个数修改成功")
                this.$router.push("/manage/cart/cartDetail")

              }else{
                alert("设置当前选择商品失败")
              }
            })

        },
        dealSelectAll:function(){

            this.isSelectAll = !this.isSelectAll;


            for(var k in this.list){
                var subject = this.list[k];
                subject.is_select = this.isSelectAll;
                console.log("-> "+subject.is_select)
                for(var serviceIndex in subject.cart){
                    var service = subject.cart[serviceIndex];
                    service.edit_num = service.num;
                    service.is_select = this.isSelectAll;
                }
            }

        },
        dealSelectCompany:function(company){
            company.is_select = !company.is_select;

            for(var k in company.cart){
                var service = company.cart[k];
                service.is_select = company.is_select;
            }
            
        },
        dealSelectService:function(service,company){
            service.is_select = !service.is_select;

            var b = true;
            for(var k in company.cart){
                var service = company.cart[k];
                if(!service.is_select){
                    b = false;
                }
            }
            company.is_select = b;
        },
        dealChangeNum:function(service,edit_num){

            var r = confirm("确认修改商品个数?");
            if(!r){
                service.edit_num = service.num;
                return;
            }

            //console.log(" num = "+service.num);
            //console.log(" edit_num = "+edit_num);

            if(edit_num<1){
                alert("请输入正确的个数");
                return;
            }
            if(service.num == edit_num){
                return;
            }

            //发送添加到购物车的请求
            var url = path + "/index/cart/update-cart";
            var dict = {
              user_id:this.userId,
              cart_id:service.cart_id,
              num:edit_num
            }
            this.$http.post(url,dict,{"emulateJSON":true}).then(function(r){
              var td = r.data;
              if(td.status == 1){
                console.log("商品个数修改成功")

                service.num = edit_num;

              }else{
                alert("商品个数修改失败")
              }
            })


        },
        showList:function(){
            //下载订单列表
            var url = path + "/index/cart?user_id="+this.userId;
            this.$http.get(url).then(function(r){
                var td = r.data;
                

                //添加一个新的字段, 用于保存新的数量
                for(var k in td){
                    var subject = td[k];
                    subject.is_select = false;
                    for(var serviceIndex in subject.cart){
                        var service = subject.cart[serviceIndex];
                        service.edit_num = service.num;
                        service.is_select = false;
                    }
                }

                this.list = td;
            })
        },
        dealDelCartItem:function(cart_id){

            var r = confirm("确认删除?");
            if(!r){
                return;
            }

             //发送添加到购物车的请求
            var url = path + "/index/cart/delete-cart";
            var dict = {
              user_id:this.userId,
              cart_id:cart_id
            }
            this.$http.post(url,dict,{"emulateJSON":true}).then(function(r){
              var td = r.data;
              if(td.status == 1){
                alert("删除成功")

                this.isSelectAll = false;
                this.showList();

              }else{
                alert("删除失败")
              }
            })
        }
    },
    created(){
        loginStatus(this);

        this.showList();
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
    .ring.active{
        background: #72CF6F;
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