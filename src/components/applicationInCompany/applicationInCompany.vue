<template>
  
  <div class="applicationIn main_content clearfix">
    
    
    <!--公司入驻 begin-->
    <div class="tab_type_box">
      <div class="tab_type_head">
        <a href="#/manage/applicationIn">服务机构免费入驻</a>
        <a class="active">公司免费入驻</a>
      </div>
      <div class="applicationIn_content">
        <section>
          <span class="lable">公司全称：</span>
          <input v-model="companyName" type="text" value="" placeholder="请输入公司全称">
          <div>
              <span class="color-red ml25">该公司已存在</span>
              <router-link :to="applicationInButtonPath" class="btn-bd-green-s">去认领</router-link>
          </div>
        </section>
        <section>
          <span class="lable">机构地址：</span>
          <select @change="dealProvinceChange" v-model="provinceId">
            <option value="-1" >选择省</option>
            <option v-for="item in provinceList" 
              :value="item.id">{{item.name}}</option>
          </select>
          <select @change="dealCityChange"  v-model="cityId">
            <option value="-1">选择市</option>
            <option v-for="item in cityList" 
              :value="item.id">{{item.name}}</option>
          </select>
          <select v-model="areaId">
            <option value="-1">选择区</option>
            <option v-for="item in areaList" 
              :value="item.id">{{item.name}}</option>
          </select>
        </section>
        <section>
          <span class="lable"></span>
          <input v-model="companyAddress" type="text" value="" placeholder="请输入详细地址">
        </section>
        <section>
          <span class="lable">公司电话：</span>
          <input v-model="companyPhone" type="text" value="" placeholder="请输入公司联系电话">
        </section>
        <section>
          <span class="lable">公司邮箱：</span>
          <input v-model="companyEmail" type="text" value="" placeholder="请输入公司联系邮箱">
        </section>
        <section class="top upload-box">
          <span class="lable">营业执照：</span>

          <img :src="uploadImgPath">
          <input  @change="uploadImageChange" type="file" id="file" />

          
          <a href="javascript:void(0)" class="btn-bd-green-s ml20 mt15">上传营业执照</a>
          
        </section>
      </div>
      <div class="btn_box">
        <span class="submit_btn" @click="dealSendApplicationIn">提交申请</span>
        <span class="cancel_btn">取消</span>
      </div>
    </div>
    <!--公司入驻 end-->
    
    
    
  </div>
  
  
  
  
</template>



<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        typesValue: '1',

        provinceList:[],
        provinceId:-1,
        cityList:[],
        cityId:-1,
        areaList:[],
        areaId:-1,

        companyName:"",
        companyPhone:"",
        companyAddress:"",
        companyEmail:"",

        uploadImgPath: require("../../assets/uploadimg.png"),
        file:"",


        types:[
          {
            name: '评估公司',
            value: '1'
          },{
            name: '会计事务所',
            value: '2'
          },
          {
            name: '知识产权',
            value: '3'
          },
          {
            name: '律师所',
            value: '4'
          }
        ],

        applicationInButtonPath:"/login"
      }
    },
    created(){

      loginStatus(this);

      if(this.userId){
        this.applicationInButtonPath = "";
      }

      //下载省份数据
      var url = path+"/index/address/child-address?address_id=1"
      this.$http.get(url).then(function(r){

        var td = r.data;
        this.provinceList = td;

      })

    },
    methods:{
      types_tab:function(value){
        this.typesValue = value;
      },dealProvinceChange:function(){
        //alert("")

        this.cityId = -1;
        this.cityList = []
        this.areaId = -1;
        this.areaList = []

        if(this.provinceId != -1){
          //下载城市数据
          var url = path+"/index/address/child-address?address_id="+this.provinceId
          this.$http.get(url).then(function(r){

            var td = r.data;
            this.cityList = td;

          })
        }
        

      },dealCityChange:function(){
        //alert("")

        this.areaId = -1;
        this.areaList = []

        if(this.cityId != -1){
          //下载城市数据
          var url = path+"/index/address/child-address?address_id="+this.cityId
          this.$http.get(url).then(function(r){

            var td = r.data;
            this.areaList = td;

          })
        }
        

      },
      dealSendApplicationIn:function(){

        //检测
        if(this.companyName.length == 0){
          alert("请输入正确的机构名");
          return;
        }

        if(this.provinceId == -1){
          alert("请选择省份");
          return;
        }
        if(this.cityId == -1){
          alert("请选择城市");
          return;
        }
        if(this.areaId == -1){
          alert("请选择地区");
          return;
        }


        if(this.companyAddress.length == 0){
          alert("请输入正确的详细地址");
          return;
        }

        if(this.companyPhone.length == 0){
          alert("请输入正确的手机号");
          return;
        }

        if(this.companyEmail.length == 0){
          alert("请输入正确的email");
          return;
        }

        if(this.file == ""){
          alert("请选择营业执照文件");
          return;
        }


        var id = this.$route.query.id;
        console.log("id = "+id);


        
        //发起认领请求
        var url = path + "/index/enterprise/enterprise-claim";

        //创建formData
        var formData = new FormData();
        
        formData.append("enterprise_id",id);
        formData.append("user_name",this.realName);
        formData.append("user_id",this.userId);
        formData.append("phone",this.phone);
        formData.append("email",this.email);

        formData.append("license_path",this.file);
        
        //发起请求
        this.$http.post(url,formData,function(){
          console.log("send")
        }).then(function (r) {
          //console.log(JSON.stringify(r.data))
          if(r.data.status == 1){
            alert(r.data.info);
          }else{
            alert(r.data.info);
          }
        })
        
        
      },
      uploadImageChange:function(){
        //获取文件标签
        var fileTag = document.getElementById("file");
        
        
        //检测和获取文件路径
        if(fileTag.files.length==0){
          return ;
        }
        var uploadFile = fileTag.files[0];
        var url = window.URL.createObjectURL(uploadFile);
        console.log("url = "+url);
        
        
        this.file = uploadFile;

        //显示图片
        this.uploadImgPath = url;
      }
    }
  }
</script>

<style media="screen">
 .applicationIn .tab_type_box{
   width: 100%;
     box-sizing: border-box
 }
 .applicationIn .tab_type_head a{
   width: 184px;
 }
 .applicationIn_content{
   padding-top: 30px;
   padding-left: 300px;
     font-size: 14px;
 }
 .applicationIn_content section{
   display: flex;
   height: 70px;
   justify-content: flex-start;
   align-items: center;
 }
 .applicationIn_content section.top{
   align-items: flex-start;
   padding: 10px 0;
   height: 100px;
 }
 .applicationIn_content section.top img{
   width: 100px;
   height: 100px;
 }
 .applicationIn_content section.top .lable{
   padding-top: 20px;
 }
 .applicationIn_content section .lable{
   width: 135px;
   color: #616161;
 }
 .applicationIn_content section .types{
   height: 40px;
     padding: 0 20px;
   line-height: 40px;
   text-align: center;
   margin-right: 10px;
   border: 1px solid #e5e7ed;
   background: #fff;
   color: #898989;
   cursor: pointer;
     transition: .3s;
 }
    .applicationIn_content section .types:hover{
        color: #006EFF
    }
 .applicationIn_content section .types.active{
   border: 1px solid #0066eb;
   background: #006EFF;
   color: #fff;
 }
 .applicationIn_content section input{
   width: 455px;
   height: 40px;
   padding-left: 10px;
   border: 1px solid #e5e7ed;
     font-size: 14px;
 }
 .applicationIn_content section select{
   width: 175px;
   height: 40px;
   border: 1px solid #e5e6ed;
   margin-right: 10px;
     font-size: 14px;
 }
 .btn_box{
   display: flex;
   justify-content: center;
   padding-bottom: 20px;
 }
 .btn_box span{
   width: 158px;
   height: 58px;
   margin: 10px;
 }
    .business-license-list{
        height: auto!important;
            align-items: end!important
    }
    .business-license-img{
        width: 400px!important;
        height: auto!important;
        margin-bottom: 30px;
    }
    .applicationIn_content .top{
        background: none!important
    }
    .mt15{
        margin-top: 15px
    }

</style>
