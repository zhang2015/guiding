<template>
  <div class="page-content">

    
    apiTest

    

    <div>
      <h1>GET</h1>
      <div>
        <input class="get-url-box" type="text" v-model="url" />
        <button @click="dealGet">发起GET请求</button>
      </div>
      
    </div>

    <div v-for="page in pages">
      <h1>{{page.name}} 接口数:{{page.list.length}}</h1>
      <div class="request-item" v-for="item in page.list">
        <div>
          <span>{{item.name}} {{item.type}}</span>
        </div>
        <input class="get-url-box" type="text" v-model="item.url" />
        <button @click="dealRequest(item.url,item.type,item.params)">请求</button> <span>{{item.info?item.info:''}}</span>
        <div v-show="item.type=='post'||item.type=='POST'">
          <input class="post-params-box" type="text" v-model="item.params" />
        </div>
      </div>
      <br/>
    </div>
    
    <div class="show-area">
      <pre v-html="response"></pre>
    </div>
   

    

  </div>
</template>

<script type="text/ecmascript-6">

  import request from '../../ajax/request.js'

  import Vue from 'vue'

  export default {

    data:function(){

      return {
        response:"",
        url:"",
        type:"",
        path:"http://119.23.229.133",

        pages:[
          {
            "name":"底部",
            list:[
              {
                "type":"GET",
                "name":"友情链接",
                "url":"/index/index/friendly",
                "params":{}
              },{
                "type":"GET",
                "name":"系统信息",
                "url":"/index/index/sys-seting",
                "params":{}
              },

            ]
          },{
            "name":"首页",
            list:[
              {
                "type":"GET",
                "name":"入驻平台个数",
                "url":"/index/index",
                "params":{}
              },

              {
                "type":"GET",
                "name":"轮播图",
                "url":"/index/index/adv",
                "params":{}
              },{
                "type":"GET",
                "name":"热门推荐机构",
                "url":"/index/index/hot-company?qualification_id=1",
                "params":{}
              },{
                "type":"GET",
                "name":"首页推荐服务机构",
                "url":"/index/index/index-company?qualification_id=1",
                "params":{}
              },{
                "type":"GET",
                "name":"行业新闻",
                "url":"/index/index/news",
                "params":{}
              },{
                "type":"GET",
                "name":"最新入驻服务机构",
                "url":"/index/index/new-company",
                "params":{}
              },{
                "type":"GET",
                "name":"最新认领企业",
                "url":"/index/index/new-claim-enterprise",
                "params":{}
              },{
                "type":"GET",
                "name":"最新成交记录",
                "url":"",
                "params":{}
              },{
                "type":"GET",
                "name":"[NO]服务机构搜索",
                "url":"",
                "params":{}
              },{
                "type":"GET",
                "name":"公司搜索",
                "url":"/index/enterprise/search?title=小桔",
                "params":{}
              },
            ]
          },{
            "name":"帮助",
            list:[
              {
                "type":"GET",
                "name":"帮助分类",
                "url":"/index/index/help-category",
                "params":{}
              },{
                "type":"GET",
                "name":"帮助列表",
                "url":"/index/cms/help?category_id=1",
                "params":{}
              },{
                "type":"GET",
                "name":"帮助详情",
                "url":"/index/cms/help-info?help_id=11",
                "params":{}
              },

            ]
          },{
            "name":"新闻",
            list:[
              {
                "type":"GET",
                "name":"新闻分类",
                "url":"/index/cms/news-category",
                "params":{}
              },{
                "type":"GET",
                "name":"新闻列表",
                "url":"/index/cms?category_id=332",
                "params":{}
              },{
                "type":"GET",
                "name":"新闻详情",
                "url":"/index/cms/news-info?news_id=245",
                "params":{}
              },

            ]
          },{
            "name":"服务机构模块",
            list:[
              {
                "type":"GET",
                "name":"服务机构类型",
                "url":"/index/company/company-type",
                "params":{}
              },{
                "type":"GET",
                "name":"服务机构列表",
                "url":"/index/company",
                "params":{}
              },{
                "type":"GET",
                "name":"服务机构 - ^带参数",
                "url":"/index/company?area_id=2&qualification_pid=1&qualification_id=5",
                "params":{}
              },{
                "type":"GET",
                "name":"服务机构-详情",
                "url":"/index/company/show?company_id=34&user_id=2",
                "params":{},
                info:"OK"
              },{
                "type":"GET",
                "name":"附加 - 全国地址",
                "url":"/index/address",
                "params":{}
              },{
                "type":"GET",
                "name":"附加 - 子级地址",
                "url":"/index/address/child-address?address_id=1",
                "params":{}
              },{
                "type":"POST",
                "name":"服务机构详情: 添加关注",
                "url":"/index/company/add-company-attention",
                "params":'{"user_id":2,"company_id":34}'
              },{
                "type":"POST",
                "name":"服务机构详情: 删除关注",
                "url":"/index/company/del-company-attention",
                "params":'{"user_id":2,"company_id":34}'
              },{
                "type":"GET",
                "name":"服务机构详情: 获取关注列表",
                "url":"/index/company/company-attention?user_id=2",
                "params":''
              }

            ]
          },{
            "name":"公司模块",
            list:[
              {
                "type":"GET",
                "name":"公司列表",
                "url":"/index/enterprise",
                "params":{}
              },{
                "type":"GET",
                "name":"公司列表 - ^带参数",
                "url":"/index/enterprise?manage_status=1&register_money_type=1&province_id=2&city_id=52&property_type=1",
                "params":{}
              },{
                "type":"GET",
                "name":"[FAIL]企业详情",
                "url":"/index/enterprise/show?enterprise_id=21",
                "params":{}
              },{
                "type":"GET",
                "name":"企业详情-类型",
                "url":"/index/enterprise/enterprise-conf",
                "params":{}
              },{
                "type":"GET",
                "name":"附加 - 子级地址 - 省",
                "url":"/index/address/child-address?address_id=1",
                "params":{}
              },{
                "type":"GET",
                "name":"附加 - 子级地址 - 城市",
                "url":"/index/address/child-address?address_id=26",
                "params":{}
              },{
                "type":"GET",
                "name":"添加收藏",
                "url":"/index/enterprise/add-enterprise-attention?user_id=2&enterprise_id=2689",
                "params":{}
              },{
                "type":"GET",
                "name":"取消收藏",
                "url":"/index/enterprise/del-enterprise-attention?user_id=2&enterprise_id=2689",
                "params":{}
              },{
                "type":"GET",
                "name":"收藏列表",
                "url":"/index/enterprise/enterprise-attention?user_id=2",
                "params":{}
              },


            ]
          },{
            "name":"用户模块",
            list:[
              {
                "type":"GET",
                "name":"登录 - 用户名+密码登录",
                "url":"/index/login?phone=13699190120&password=123456",
                "params":{}
              },{
                "type":"GET",
                "name":"注册 - 发送验证码",
                "url":"/index/login/send-mobile-code?phone=13699190120",
                "params":{}
              },{
                "type":"GET",
                "name":"注册(需要先发注册验证码)",
                "url":"/index/login/register?phone=13699190120&password=123456&code=9999",
                "params":{}
              },{
                "type":"GET",
                "name":"登录时 - 发送短信",
                "url":"/index/login/mobile-login-code?phone=13699190120",
                "params":{}
              },{
                "type":"GET",
                "name":"登录 - 手机号 + 验证码(需要先发登录验证码)",
                "url":"/index/login/login-by-phone?phone=13699190120&code=9999",
                "params":{}
              }


            ]
          },

          {
            "name":"购物车模块",
            list:[
              {
                "type":"GET",
                "name":"购物车页面 - 获取购物车列表",
                "url":"/index/cart?user_id=2",
                "params":"{}",
                info:"[OK,测试通过]"
              },{
                "type":"post",
                "name":"服务商详情 - 加入购物车",
                "url":"/index/cart/add-cart",
                "params":'{"user_id":2,"service_id":2,"num":1}',
                info:"[OK,测试通过]"
              },{
                "type":"post",
                "name":"购物车界面 - 修改购物车上平数量",
                "url":"/index/cart/update-cart",
                "params":'{"user_id":2,"cart_id":1,"num":10}',
                info:"[OK,测试通过]"
              },{
                "type":"post",
                "name":"购物车界面 - 删除购物车-某项",
                "url":"/index/cart/delete-cart",
                "params":'{"user_id":2,"cart_id":2}',
                info:"[OK,测试通过]"
              },{
                "type":"post",
                "name":"购物车界面 - 设置选择的商品]",
                "url":"/index/cart/buy-this-change",
                "params":'{"user_id":2,"cart_id":[1]}',
                info:"[OK,测试通过]"
              },{
                "type":"get",
                "name":"订单界面 - 获取本次购买服务[]",
                "url":"/index/cart/buy-this?user_id=2",
                "params":'{"user_id":2}',
                info:"[OK,测试通过]"
              },{
                "type":"get",
                "name":"地址管理 - 获取默认地址[]",
                "url":"/index/cart/default-address?user_id=2",
                "params":'',
                info:"[OK,测试通过]"
              },


              {
                "type":"post",
                "name":"确认订单界面 - 发起订单[地址没有id,支付类型文档中没有, 500错误]",
                "url":"/index/cart/make-order",
                "params":'{"user_id":2,"address_id":2,"pay_type":2}'
              },{
                "type":"get",
                "name":"支付页 - 获取预付款 [暂时没有订单]",
                "url":"/index/cart/order-per-pay?user_id=2&order_code=",
                "params":{}
              },{
                "type":"get",
                "name":"地址管理 - 获取地址列表[500错误]",
                "url":"/index/address/user-address?user_id=2",
                "params":{}
              },{
                "type":"get",
                "name":"地址管理 - 地址信息[暂无测试]",
                "url":"/index/address/user-address?user_id=2&address_id=",
                "params":{}
              },{
                "type":"post",
                "name":"地址管理 - 添加地址[500错误]",
                "url":"/index/address/add-user-address",
                "params":'{"user_id":2,"phone":136,"province_id":26,"city_id":322,"area_id":2722,"address":"test","name":"test","is_default":0}'
              },{
                "type":"post",
                "name":"地址管理 - 添加地址[等待, 需要地址id]",
                "url":"/index/address/add-user-address",
                "params":'{"user_id":2,"phone":136,"province_id":26,"city_id":322,"area_id":2722,"address":"test","name":"test","is_default":0,"address_id":1}'
              },{
                "type":"post",
                "name":"地址管理 - 删除地址[等待, 需要地址id]",
                "url":"/index/address/del-user-address",
                "params":'{"user_id":2,"address_id":1}'
              },{
                "type":"post",
                "name":"地址管理 - 修改默认地址[等待, 需要地址id]",
                "url":"/index/address/change-user-address",
                "params":'{"user_id":2,"address_id":1}'
              },
              

            ]
          },{
            "name":"个人中心",
            list:[
              {
                "type":"get",
                "name":"用户中心-1我的订单 - 获取订单列表 ",
                "url":"/index/order?user_id=2&status=-10",
                "params":{},
                info:"[OK-测试通过]"
              },{
                "type":"get",
                "name":"用户中心-1我的订单 - 订单状态",
                "url":"/index/order/order-status",
                "params":{},
                info:"[OK-测试通过]"
              },{
                "type":"get",
                "name":"用户中心-1我的订单 - 订单详情",
                "url":"/index/order/show?id=10",
                "params":{},
                info:"[OK-测试通过]"
              },
              {
                "type":"GET",
                "name":"个人中心-2我的消息: 消息列表",
                "url":"/index/user/message?user_id=2",
                "params":{},
                "info":"[OK,已经实现,测试通过]"
              },{
                "type":"GET",
                "name":"个人中心-2我的消息: 消息详情 ",
                "url":"",
                "params":{},
                info:"[OK, 直接从列表中获取数据]"
              },{
                "type":"GET",
                "name":"个人中心-2我的消息: 删除消息 ",
                "url":"/index/user/del-message?message_id=2",
                "params":'{}',
                info:"[OK]"
              },{
                "type":"GET",
                "name":"个人中心-3我的收藏: 获取收藏(关注) ",
                "url":"/index/company/company-attention?user_id=2",
                "params":{},
                info:"[OK]"
              },{
                "type":"POST",
                "name":"个人中心-3我的收藏: 删除收藏 ",
                "url":"/index/company/del-company-attention",
                "params":"{'user_id':2,'company_id':34}",
                info:"[OK]"
              },{
                "type":"GET",
                "name":"个人中心-4我的企业: 获取企业列表 ",
                "url":"/index/enterprise/my-enterprise?user_id=2",
                "params":{},
                info:"[OK]"
              },{
                "type":"GET",
                "name":"企业查询 - 搜索",
                "url":"/index/enterprise/search?title=百合网",
                "params":{},
                info:"[OK]"
              },{
                "type":"POST",
                "name":"个人中心-4我的企业: 认领企业 ",
                "url":"/index/enterprise/enterprise-claim",
                "params":"{'enterprise_id':0,'user_name':0,'user_id':0,'phone':0,'email':0}",
                info:"[OK, 接口OK, 实现OK]"
              },{
                "type":"GET",
                "name":"个人中心-5发票管理: 获取发票列表 ",
                "url":"/index/invoice?user_id=2",
                "params":'{}',
                info:"[OK]"
              },{
                "type":"GET",
                "name":"个人中心-5发票管理: 获取发票详情 ",
                "url":"/index/invoice/show?id=11",
                "params":{},
                info:"[OK]"
              },{
                "type":"POST",
                "name":"个人中心-5发票管理: 提交发票信息 ",
                "url":"",
                "params":"",
                info:"[没有测试]"
              },{
                "type":"GET",
                "name":"个人中心-6地址管理: 获取地址列表",
                "url":"/index/address/user-address?user_id=2",
                "params":"{}",
                info:"[OK]"
              },{
                "type":"GET",
                "name":"个人中心-7账号设置: 获取个人信息",
                "url":"/index/invoice/show?id=",
                "params":{},
                info:"[没有接口]"
              },{
                "type":"POST",
                "name":"个人中心-7账号设置: 修改手机号 ",
                "url":"/index/login/change-user-phone",
                "params":'',
                info:"[上传文件, 无法测试]"
              },{
                "type":"POST",
                "name":"个人中心-7账号设置: 绑定邮箱 ",
                "url":"/index/user/bind-user-email",
                "params":'',
                info:""
              },{
                "type":"POST",
                "name":"个人中心-7账号设置: 修改用户头像 ",
                "url":"/index/user/change-user-img",
                "params":'',
                info:""
              },{
                "type":"POST",
                "name":"个人中心-7账号设置: 绑定邮箱 ",
                "url":"/index/user/change-user-pwd",
                "params":'',
                info:""
              },

            ]
          },{
            "name":"服务机构",
            list:[
              {
                "type":"GET",
                "name":"服务机构管理1-我的订单: 订单列表",
                "url":"",
                "params":{},
                info:"[没有找到这个接口]"
              },{
                "type":"GET",
                "name":"服务机构管理1-我的订单: 订单详情",
                "url":"",
                "params":{},
                info:"[没有找到这个接口]"
              },{
                "type":"GET",
                "name":"服务机构管理2-我的服务: 服务列表",
                "url":"",
                "params":{},
                info:"直接从服务机构详情获取?"
              },{
                "type":"POST",
                "name":"服务机构管理2-我的服务: 添加服务",
                "url":"/index/company/add-company-service",
                "params":'{}',
                info:""
              },{
                "type":"POST",
                "name":"服务机构管理2-我的服务: 修改服务",
                "url":"/index/company/update-company-service",
                "params":'{}',
                info:""
              },{
                "type":"POST",
                "name":"服务机构管理2-我的服务: 删除服务",
                "url":"/index/company/delete-company-service",
                "params":'{}',
                info:""
              },{
                "type":"GET",
                "name":"服务机构管理5-认证管理: 资质列表",
                "url":"/index/company/company-auto",
                "params":'{}',
                info:""
              },{
                "type":"GET",
                "name":"服务机构管理5-认证管理: 资质详情",
                "url":"/index/company/company-auto-info",
                "params":'{}',
                info:""
              },{
                "type":"POST",
                "name":"服务机构管理5-认证管理: 添加资质",
                "url":"/index/company/add-company-auto",
                "params":'{}',
                info:""
              },{
                "type":"POST",
                "name":"服务机构管理6-钱包: 提现没有吧",
                "url":"",
                "params":'{}',
                info:""
              },
              {
                "type":"POST",
                "name":"服务机构管理10-团队管理: 没有吧",
                "url":"",
                "params":'{}',
                info:""
              },

            ]
          }
        ] 
      }

    },

    methods:{

      formatHtml:function(obj){
        var objStr = JSON.stringify(obj,null,4);
        var html = objStr.replace(/\n/g, '<br>').replace(/\s/g, ' '); 
        return html;
      },

      dealGet:function(){

        if(this.url.indexOf('http://')!=0){
          this.url = 'http://119.23.229.133'+this.url
        }

        var self = this;
        Vue.http.get(this.url).then(function(r){

          self.response = self.formatHtml(r.data);

        })

      },

      dealRequest:function(url,type,params){
        var self = this;

        if(url.indexOf('http://')!=0){
          url = 'http://119.23.229.133'+url
        }
        if(type == 'GET' || type == 'get'){

          Vue.http.get(url).then(function(r){

            self.response = self.formatHtml(r.data);

          }).catch((res) => {
            self.response = res.status+" "+res.statusText;

          });

        }
        if(type == 'POST' || type == 'post'){

          //console.log(params)

          //???
          Vue.http.options.emulateJSON = true
         
          var paramsDict = JSON.parse(params);
          Vue.http.post(url,paramsDict,{"emulateJSON":true}).then(function(r){

            self.response = self.formatHtml(r.data);

          }).catch((res) => {
            self.response = res.status+" "+res.statusText;

          });

        }
        


        

      },
    }

  }
</script>

<style media="screen" scope>

  .page-content{
    padding: 10px;
    font-size: 16px;
  }

  h1{
    font-size:20px;
  }
  .request-item{
    padding: 8px 0;
  }
  .get-url-box{
    width: 50%;
  }
  .post-url-box{
    width: 50%;
  }
  .post-params-box{
    width: 50%;
  }
  .show-area{
    display: block;
    position: fixed;
    top: 0px;
    right: 0px;
    width: 300px;
    height: 100%;

    overflow:scroll;
    

    /*min-height: 100px;*/
    background-color: lightgray;
    
  }
</style>
