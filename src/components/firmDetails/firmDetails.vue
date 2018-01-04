<template>
  <div>
    <mainHeader></mainHeader>
    <mainNav show='false'></mainNav>
    <div class="firm_detail_head_wrapper">
      <div class="firm_detail_head">
        <img :src="firmInfor.src?firmInfor.src:''">
        <section>
          <h1>{{firmInfor.name}}<router-link :to="{path:userId?'/manage/personal/myCompany/myCompanyClaimApply':'/login',query:{name:firmInfor.name,type:'company',id:firmInfor.id}}"><span class="icon-id"></span>认领公司</router-link></h1>
          <p>
            <span class="icon-tel"></span><span>电话:{{firmInfor.tel}}</span>
            <span class="icon-message"></span><span>邮箱:{{firmInfor.email}}</span>
            <span class="icon-globe"></span><span>网址:<a :href="'http://'+firmInfor.link" target="_blank">{{firmInfor.link}}</a></span>
          </p>
          <p>
            <span class="icon-compass"></span><span>地址:{{firmInfor.address}}</span>
          </p>
          <div>
            分享到:
            <span>
              <img src="./images/1.png" alt="">
            </span>
            <span>
              <img src="./images/2.png" alt="">
            </span>
            <span>
              <img src="./images/3.png" alt="">
            </span>
            <span>
              <img src="./images/4.png" alt="">
            </span>
          </div>
          <div @click="dealCollect">{{!isCollect?'收藏':'取消收藏'}}</div>
        </section>
      </div>
    </div>
    <div class="main_wrapper">
      <div class="firm_details main_content clearfix">
        <div class="main_content_left">
          <div class="tab_type_box">
            <div class="tab_type_head">
              <router-link :to="{ name: 'firmEquity' }">知识产权</router-link>
              <router-link :to="{ name: 'firmIntro' }">公司简介</router-link>
              <router-link :to="{ name: 'firmBusiness' }">工商信息</router-link>
            </div>
            <router-view ref="firmDetailSub"></router-view>
          </div>
        </div>
        <div class="main_content_right">
          <recommend></recommend>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import mainHeader from '../mainHeader/mainHeader'
  import mainNav from '../mainNav/mainNav'
  import recommend from '../recommend/recommend'

  import request from '../../ajax/request.js';

  import Vue from 'vue'

  export default {
    data(){
      return{

        //下载的json对象
        info:{},

        id:0,

        firmInfor:{
          name: '',
          tel: '',
          email: '',
          link: '',
          address: '',
          src:""
        },

        isCollect:false
      }
    },

    beforeMount(){
      
    },
    created(){

      loginStatus(this)
      

      var id = this.$route.params.id;
      this.id = id;

      this.downloadDetail();

    },
    methods:{

      dealCollect(){

        //如果没有登录, 则没有任何操作
        if(!this.userId){
          alert("请登录");
          return;
        }

        //如果没有收藏, 添加收藏
        if(!this.isCollect){

          var url = path + "/index/enterprise/add-enterprise-attention"
          var dict = {
            "user_id":this.userId,
            "enterprise_id":this.id
          }

          this.$http.get(url,{params:dict}).then(function(r){

            var td = r.data;
            if(td.status == 0){

              alert(td.info);

            }else{
              this.isCollect = true;
            }

          })

        }

        //如果收藏了,取消收藏
        else{

          var url = path + "/index/enterprise/del-enterprise-attention"
          var dict = {
            "user_id":this.userId,
            "enterprise_id":this.id
          }

          this.$http.get(url,{params:dict}).then(function(r){

            var td = r.data;
            if(td.status == 0){

              alert(td.info);

            }else{
              this.isCollect = false;
            }

          })

        }

      },


      downloadDetail:function(){
        var dict = {
          enterprise_id:this.id
        }
        var self = this;

        //如果能取到userId, 获取收藏数据
        if(this.userId){
          dict['user_id'] = this.userId
          
        }


        request.companyDetail(dict,function(data){
    
          //保存下载的json, 供下级使用
          self.info = data;


          //self.firmInfor.name = data.company.title;
          //Vue.set(self.firmInfor,'name',"aa")
          //self.$set(self.firmInfor,'name',data.company.title)

          self.firmInfor.id = data.id;
          self.firmInfor.name = data.title;
          self.firmInfor.src = path + data.img;
          self.firmInfor.tel = data.mobile;
          self.firmInfor.email = data.email;
          self.firmInfor.link = data.web_url;
          self.firmInfor.address = data.register_address;

          if(data['is_gz'] != undefined){
            if(data['is_gz'] == 0){
              self.isCollect = false;
            }
            else{
              self.isCollect = true;
            }
          }

          self.$forceUpdate()

          //
          var sub = self.$refs.firmDetailSub;
          if(sub.loadData){
            sub.loadData();
          }

        })
      }
    },

    components:{
      mainHeader,
      mainNav,
      recommend
    },
    watch: {
      '$route' (to, from) {
        // react to route changes...
        console.log(""+to.path+" "+to.params.id)

        console.log(""+from.path+" "+from.params.id)

        if(to.params.id != from.params.id){



          this.id = to.params.id;
          this.downloadDetail();

          //滚动到顶部
          window.scrollTo(0,0);
        }
      }
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
</style>
