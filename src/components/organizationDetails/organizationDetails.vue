<template>
  <div>
    <mainHeader></mainHeader>
    <mainNav></mainNav>
    
    <div class="main_wrapper">
      <div class="firm_details main_content clearfix">
        <div class="main_content_left orgain_content_right">
          <div class="organ_head_infor">
            <div class="organ_head_item">
              <span class="organ_head_name">服务项目：</span>
              <div>
                <span v-for="(item,index) in service" v-on:click="dealClickService(index,item.id)" v-bind:class="{'service-active':serviceIndex==index}">{{item.title}}</span>
                <span v-show="service.length==0">暂无</span>
                
              </div>
            </div>
            <div class="organ_head_item">
              <span class="organ_head_name"></span>
              <p>{{service.length>0?service[serviceIndex].info:'暂无描述'}}</p>
            </div>
            <div class="organ_head_item">
              <span class="organ_head_name">价　　格：</span>
              <span class="money">￥{{service.length>0?service[serviceIndex].price:'0'}}</span>
            </div>
            <div class="organ_head_item">
              <span class="organ_head_name">数　　量：</span>
              <input type="number" v-model="goodsNum" min="1" class="buy_num"/>
            </div>
            <div class="organ_head_item">
              <span class="organ_head_name"></span>
              <span class="btn btn_buy" @click="dealBuyNow()">立即购买</span>
              <span class="btn btn_add" @click="dealAddToCart()">加入购物清单</span>
            </div>
          </div>
          <div class="tab_type_box">
            <div class="tab_type_head">
              <router-link :to="{ name: 'organizationIntro' }">公司主页</router-link>
              <router-link :to="{ name: 'organizationEquity' }">成交记录</router-link>
              <router-link :to="{ name: 'organizationBusiness' }">服务范围</router-link>
              <router-link :to="{ name: 'organizationTeam' }">管理团队</router-link>
            </div>
            <!-- <router-view></router-view> -->
            <router-view :detaildata='companyDetail' :orderdata='order' ref="organizationDetailSub"></router-view>
          </div>
        </div>
        <div class="main_content_right orgain_content_left" id="mainLeft">
        <div class="main_content_right orgain_content_left">
          <div class="top">
          	<div class="top-icon">
          		<img v-bind:src="imgUrl"/>
          	</div>
          	<div class="top-company">
          		<span class="organization-name">{{company.name?company.name:''}}</span>
              
          	</div>
            <router-link :to="{path:userId?'/manage/personal/myCompany/myCompanyClaimApply':'/login',query:{name:company.name,type:'organization',id:company.id}}">
            	<div class="organization-claim">
                <span class="icon-id"></span>
                认领服务机构
              </div>
            </router-link>
          	<div class="top-tab clear">
              <a target="_blank" :href="'http://wpa.qq.com/msgrd?v=3&uin='+qq+'&site=qq&menu=yes'" class="communication"><img src="./images/communication.png"/>
                沟通
              </a>
          		<div class="focus" @click="dealCollection(company.id)"><img src="./images/focus.png"/>{{is_gz?'取消收藏':'收藏'}}</div>
          	</div>
          </div>
        	<ul class="mid-list">
        		<li>已认证资质</li>
        		<!-- 
              <li><img src="./images/true.png"/>公司认证</li>
          		<li><img src="./images/true.png"/>商标代理</li>
          		<li><img src="./images/true.png"/>专利代理</li>
          		<li><img src="./images/true.png"/>专利代理</li> 
            -->
            <li v-for="item in companytype"><img src="./images/true.png"/>{{item.name}}</li>
        	</ul>
        	<ul class="mid-list cborder">
        		<li>机构基本信息</li>
        		<li><img src="./images/phone.png"/>{{company.charge_phone}}</li>
        		<li><img src="./images/email.png"/>{{company.email}}</li>
        		<li><img src="./images/finol.png"/><a v-bind:href="'http://'+company.web_url">{{company.web_url}}</a></li>
        		<li><img src="./images/address.png"/>
        		    <p class="scmessa">{{company.address}}</p>
        		</li>
        	</ul>
        	<div class="map" id="allmap">
        		<!-- <img src="./images/map.png"/> -->
        	</div>        	
        </div> 
       <div class="main_content_right orgain_content_left protect">
       	<p class="protect-title">四大保障</p>
       	<ul class="protect-list clear">
       		<li>
       			<img src="./images/list-1.png"/>
       			<p>真实</p>
       		</li>
       		<li>
       			<img src="./images/list-2.png"/>
       			<p>安全</p>
       		</li>
       		<li>
       			<img src="./images/list-3.png"/>
       			<p>保密</p>
       		</li>
       		<li>
       			<img src="./images/list-4.png"/>
       			<p>专业</p>
       		</li>
       	</ul>
       	</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import mainHeader from '../mainHeader/mainHeader'
  import mainNav from '../mainNav/mainNav'
  import recommend from '../recommend/recommend'

  export default {
    data(){
      return{
      	companyDetail:{},
        imgUrl:require("../../assets/default/fuwu_com.png"),
        order:{},
        service:[],
        serviceIndex:0,
        goodsNum:1,
        companytype:[],

        company:{},

        //下载的对象 - 供子路由中使用
        //下载的json对象
        info:{},

        is_gz:0,

        qq:'228349069'  //丁-公司默认的qq

        //当前服务的id

      }
    },
    created(){

        loginStatus(this)


        var id = this.$route.params.id;

        var detailUrl = path + '/index/company/show?company_id='+id;
        if(this.userId){
          detailUrl += ("&user_id="+this.userId)
        }

        //下载数据
        this.$http.get(detailUrl).then((response) => {

        	var td = response.data

          this.company = td.company
          if(this.company.cover_img){
            this.imgUrl = path + this.company.cover_img
          }
          
          this.order = td.order

          this.service = td.company.service;
          this.companytype = td.company.companytype;

          this.info = td.company;

          if(td.is_gz){
            this.is_gz = td.is_gz;
          }


          console.log("download data")
          //让子组件更新到最新数据
          var sub = this.$refs.organizationDetailSub;
          console.log("->"+sub)
          if(sub.loadData){
            sub.loadData();
            console.log("sub")
          }else{
            console.log("NO")
          }

          //qq显示
          if(td.company.qq){
            this.qq = td.company.qq;
          }

          //显示地图信息
          //地图上线了再去显示
          /*
          if(td.company.lon && td.company.lat){
            console.log("显示地图")
            console.log("lon="+td.company.lon+" lat="+td.company.lat)
            show_baidu_map(td.company.lon, td.company.lat);
          }
          */
          
          
        }).catch(function(response) {

      })
    },
    methods:{
      dealBuyNow:function(){
        console.log("dealBuyNow");

        //实现现在购买接口
        var service = this.service[this.serviceIndex];


        //需要传值
        this.$router.push({
          path:"/manage/cart/buyNowDetail",
          query:{'type':'buyNow','service_id':service.id,'num':this.goodsNum}})

      },
      dealAddToCart:function(){

        //获取到当前选择的服务
        var serviceItem = this.service[this.serviceIndex];
        console.log(JSON.stringify(serviceItem))


        if(this.goodsNum<1){
          alert("请输入正确的个数!");
          return;
        }

        //发送添加到购物车的请求
        var url = path + "/index/cart/add-cart";
        var dict = {
          user_id:this.userId,
          service_id:serviceItem.id,
          num:this.goodsNum
        }
        this.$http.post(url,dict,{"emulateJSON":true}).then(function(r){
          var td = r.data;
          if(td.status == 1){

            //更新导航栏购物车商品数量
            eventBus.$emit("changeCart");


            alert("添加成功")
          }else{
            alert("添加失败")
          }
        })

      },
      dealClickService:function(index,id){
        var item = this.service[index];
        this.serviceIndex = index;
      },
      dealCollection:function(company_id){

        if(this.is_gz == 0){

          var url = path + "/index/company/add-company-attention"
          var dict = {
            "user_id":this.userId,
            "company_id":company_id
          }
          this.$http.post(url,dict,{"emulateJSON":true}).then(function(r){
            var td = r.data;
            if(td.status == 1){
              alert("添加收藏成功");
              this.is_gz = 1;
            }else{
              alert("添加收藏失败: "+td.info);
            }
          })

        }else{

          var url = path + "/index/company/del-company-attention"
          var dict = {
            "user_id":this.userId,
            "company_id":company_id
          }
          this.$http.post(url,dict,{"emulateJSON":true}).then(function(r){
            var td = r.data;
            if(td.status == 1){
              alert("取消收藏成功");
              this.is_gz = 0;
            }else{
              alert("取消收藏失败: "+td.info);
            }
          })

        }
        

      }

    },
    components:{
      mainHeader,
      mainNav,
      recommend
    }
  }
</script>

<style media="screen">
  .firm_detail_head_wrapper{
    width: 100%;
    height: 198px;
    padding: 20px 0;
    background: #f5f5f5;
  }
  .firm_detail_head{
    width: 1208px;
    height: 194px;
    margin: auto;
    border: 1px solid #e5e7ed;
    background: #fff;
  }
  .firm_detail_head{
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .firm_detail_head img{
    width: 132px;
    height: 132px;
    border: 1px solid #e5e7ed;
    margin: 0 20px;
  }
  .firm_detail_head section h1{
    display: flex;
    height: 40px;
    justify-content: flex-start;
    align-items: center;
    font-size: 20px;
    color: #616161;
    font-weight: 600;
  }
  .firm_detail_head section h1 a{
    font-size: 13px;
    color: #6398ed;
    font-weight: normal;
    padding-left: 20px;
  }
  .firm_detail_head section h1 a span{
    font-size: 16px;
    padding-right: 5px;
  }
  .firm_detail_head section p{
    display: flex;
    height: 30px;
    justify-content: flex-start;
    align-items: center;
    font-size: 15px;
    color: #b3b3b3;
  }
  .firm_detail_head section p span:nth-child(2n){
    padding: 0 25px 0 10px;
  }
  .firm_detail_head section p span a{
    color: #6398ed;
  }
  .firm_detail_head section div{
    display: flex;
    height: 40px;
    justify-content: flex-start;
    align-items: center;
  }
  .firm_detail_head section div span{
    width: 22px;
    height: 22px;
    padding-left: 10px;
  }
  .firm_detail_head section div span img{
    width: 22px;
    height: 22px;
    border: 0;
    margin: 0;
  }
  .firm_detail_content{
    padding: 30px 20px;
  }
  .organ_head_infor{
    width: 962px;
    border: 1px solid #eef0f6;
    margin-bottom: 20px;
      padding: 20px 40px
  }
  .organ_head_item{
    display: flex;
    font-size: 14px;
    align-items: center;
    color: #898989;
      padding: 10px 0
  }
  .organ_head_name{
    width: 80px;
    font-weight: bold;
    color: #616161;
  }
  .organ_head_item div span{
    padding: 10px 10px;
    border: 1px solid #eef0f6;
    margin-right: 10px;
      cursor: pointer;
      transition: .3s;
      display: inline-block;
      color: #565656
  }
    .organ_head_item div span:hover{
        color: #0079FF
    }
  .organ_head_item .money{
    font-size: 22px;
    font-weight: bold;
    color:#FF826A;
  }
  .btn{
    height: 46px;
    border-radius: 3px;
    text-align: center;
    line-height: 46px;
      cursor: pointer;
      transition: .3s;
      font-size: 14px;
  }
  .btn_buy{
    width: 100px;
    background: #0079FF;
    color: #fff;
    height: 46px;
      border: 1px solid #0079FF;
      box-shadow: 0 1px 1px #F8F8F8
  }
    .btn_buy:hover{
        background: #2d91ff
    }
  .btn_add{
    width: 150px;
    background: #eff1f6;
    color: #616161;
    margin-left: 20px;
      border: 1px solid #d4d7e2;
      box-shadow: 0 1px 1px #F8F8F8
  }
    .btn_add:hover{
        background: #f7f7f7
    }
  .orgain_content_right{
    float: right;
  }
  #mainLeft{
  	border: none;
  }
  .orgain_content_left{
    float: left;
    border: 1px solid #e5e7ed;
  }
  .top{
  	width: 100%;
/*  	height: 264px;*/
  	background: #f8f8f8;
  	box-sizing: border-box;
  	border: 1px solid transparent;
  	border-bottom:1px solid #e5e7ed ;
      padding-bottom: 10px
  }
  .top-icon{
  	width: 120px;
  	height: 120px;
  	padding: 5px;
  	background: #fff;
  	border: 1px solid #e5e7ed;
  	margin: 20px auto 10px ;
  }
  .top-icon img{
  	width: 100%;
  	height: 100%;
  }
  .top-company{
  	width: 130px;
  	margin: 0 auto;
  	text-align: center;
  	font-size: 16px;
		line-height: 23px;
  }
  .top-tab{
  	width: 180px;
  	margin: 10px auto;
  }
  .top-tab>*{
  	width: 80px;
  	height: 30px;
  	line-height: 30px;
		text-align: center;
  	border-radius: 3px;
      cursor: pointer;
      transition: .3s;
  }
    .top-tab>*:hover{
        background: #fff
    }
  .top-tab>* img{
  	vertical-align: -3px;
  	margin-right: 3px;
  }
  .communication{
  	float: left;
  	border:1px solid #d4e1f5;
      color: #4790F2
  }
  .focus{
  	float: right;
		border:1px solid #e5e7ed;
  }
  .mid-list{
  	padding: 20px;
  	overflow: hidden;
  	border-bottom: 1px solid #e5e7ed;
  }
  .mid-list li{
  	line-height: 30px;
  	font-size: 14px;
  	color: #666;
  }
  .mid-list li:first-child{
  	font-size: 12px;
  	font-weight:bold ;
  }
  .mid-list li img{
  	vertical-align: -4px;
  	margin-right: 10px;
  }
  .cborder{
  	border: none;
  }
  .scmessa{
  	float: right;
  	width: 160px;
  	margin-top: 6px;
  	line-height: 20px;
  }
  .map{
  	margin: 10px 0;
  	text-align: center;
  }
  .protect{
  	margin-top: 20px;
  }
  .protect-title{
  	width: 100%;
  	height: 35px;
  	line-height: 35px;
  	background: #fcfcfc;
  	border-bottom:1px solid #e5e7ed ;
  	box-sizing: border-box;
  	padding-left: 20px;
  	font-size: 15px;
  	color: #666;
  }
  .protect-list{
  	padding:10px 20px 30px;
  }
  .protect-list li{
  	float: left;
  	width: 90px;
  	text-align: center;
  	margin-top: 15px;
  }
  .protect-list li p{
  	margin-top:5px ;
  	font-size: 14px;
  	color: #999;
  }
    .protect-list li>img{
        width: 56px;
        height: 56px
    }
  .service-active{
      border-color: #0079FF!important;
      box-sizing: border-box;
      color: #0079FF
  }
    .organization-claim{
        text-align: center;
        font-size: 14px;
        color: #0079FF;
        margin-top: 10px;
        transition: .3s;
        cursor: pointer;
        line-height: 24px
    }

    .organization-claim:hover{
        color: #3695ff
    }
    .organization-claim>span{
        margin-right: 6px;
    }

    .map{
      margin:0 auto 5px auto;
      width: 185px;
      height:138px;
      border:1px solid #ccc;
    }
    .buy_num{
        height: 32px;
        padding: 0 10px;
        width: 50px;
    }
</style>
