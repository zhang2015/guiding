<template>
  <div class="tab_type_box">
    <div class="tab_type_head">
      <a class="active">公司管理</a>
    </div>
    <div class="padding20">
      <ul class="manage_list_common setting_list">
        <li>
          <p>企业名称</p>
          <input v-model="company.name" type="text" placeholder="请输入公司名称">
        </li>
        <li class="upload">
          <p>LOGO</p>
          <div  class="upload-logo-box">
            <img :src="src" />
            <span>点击图片选择图片</span>
            <input id="file" type="file" @change="uploadImageChange">
          </div>
          
        </li>
        <li>
          <p>服务电话</p>
          <input v-model="company.mobile" type="text" placeholder="请输入公司服务电话">
        </li>
        <li>
          <p>邮箱</p>
          <input v-model="company.email" type="text" placeholder="请输入企业联系邮箱">
        </li>
        <li>
          <p>客服QQ</p>
          <input type="text" placeholder="请输入企业客服QQ">
        </li>
        <li>
          <p>地址</p>
          <select v-model="provinceId" @change="dealProvinceChange">
            <option value="-1">请选择省</option>
            <option v-for="item in provinceList" 
              :value="item.id">{{item.name}}</option>
          </select>
          <select v-model="cityId"  @change="dealCityChange">
            <option value="-1">请选择市</option>
            <option v-for="item in cityList" 
              :value="item.id">{{item.name}}</option>
          </select>
          <select v-model="areaId">
            <option value="-1">请选择区</option>
            <option v-for="item in areaList" 
              :value="item.id">{{item.name}}</option>
          </select>
          <input v-model="company.address" type="text" placeholder="请输入公司详细地址" class="wallet_sort">
        </li>
        <li class="company-manager-input-area">
          <p>公司主页</p>
          <p>
            <textarea v-model="company.content" name="" id="" cols="110" rows="10"></textarea>
          </p>
        </li>
        <li class="company-manager-input-area">
          <p>服务范围</p>
          <p>
            <textarea v-model="company.service_area" name="" id="" cols="110" rows="10"></textarea>
          </p>
          
        </li>
        <li class="company-manager-input-area">
          <p>管理团队</p>
          <p>
            <textarea v-model="company.company_team" name="" id="" cols="110" rows="10"></textarea>
          </p>
          
        </li>
        <li>
          <p></p>
          <span class="submit_btn company_submit" @click="dealSendUpdateCompany">提交</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        company:{
          id:"",
          name:"",
          mobile:"",
          email:"",
          address:"",
          content:"",
          service_area:"",
          company_team:"",

          
          
        },

        src:require("../../assets/uploadimg.png"),

        provinceId:-1,
        cityId:-1,
        areaId:-1,

        provinceList:[],
        cityList:[],
        areaList:[],
      }
    },

    created(){
      loginStatus(this);
      if(this.companyId){
        this.requestOrganizationDetail();
      }

      
    },

    methods:{

      //=========发送网络请求===========
      dealSendUpdateCompany:function(){

        //检测
        if(this.company.name.length == 0){
          alert("请输入正确的企业名称");
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

        if(this.company.address.length == 0){
          alert("请输入正确的详细地址");
          return;
        }

        if(this.company.mobile.length == 0){
          alert("请输入正确的手机号");
          return;
        }

        if(this.company.email.length == 0){
          alert("请输入正确的email");
          return;
        }

        if(this.file == ""){
          alert("请选择企业LOGO文件");
          return;
        }



        
        //发起认领请求
        var url = path + "/index/company/update-company";

        //创建formData
        var formData = new FormData();
        
        formData.append("company_id",this.company.id);
        formData.append("name",this.company.name);
        formData.append("user_id",this.userId);

        formData.append("mobile",this.company.mobile);
        formData.append("email",this.company.email);

        formData.append("province_id",this.provinceId);
        formData.append("city_id",this.cityId);
        formData.append("area_id",this.areaId);
        formData.append("address",this.company.address);
        formData.append("company_type",1);
        formData.append("license",this.file);


        formData.append("content",this.company.content);

        formData.append("service_area",this.company.service_area);

        formData.append("company_team",this.company.company_team);


        
        
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
      requestOrganizationDetail:function(){

        // /index/company/show
        var url = path + "/index/company/show?company_id="+this.companyId;
        this.$http.get(url).then(function(r){
          var td = r.data;
          this.company = td.company;
          this.src = path + this.company.cover_img;

          this.provinceId = this.company.province_id;
          this.cityId = this.company.city_id;
          this.areaId = this.company.area_id;
          this.downloadProvinceList();
          this.downloadCityList();
          this.downloadAreaList();
        })
      },

      //======图片改变=========
      uploadImageChange:function(){
        //获取文件标签
        var fileTag = document.getElementById("file");
        
        
        //检测和获取文件路径
        if(fileTag.files.length==0){
          return ;
        }
        var uploadFile = fileTag.files[0];
        var url = window.URL.createObjectURL(uploadFile);
        // console.log("url = "+url);
        
        this.file = uploadFile;

        //显示图片
        this.src = url;
      },

      //====下载不同的地址数据====
      downloadProvinceList:function(){

        //获取省份信息
        //下载省份数据
        var url = path+"/index/address/child-address?address_id=1"
        this.$http.get(url).then(function(r){

          var td = r.data;
          this.provinceList = td;

        })
      },

      downloadCityList:function(){
        //alert("")

        if(this.provinceId != -1){
          //下载城市数据
          var url = path+"/index/address/child-address?address_id="+this.provinceId
          this.$http.get(url).then(function(r){

            var td = r.data;
            this.cityList = td;
          })
        }
      },


      downloadAreaList:function(){
        //alert("")

        if(this.cityId != -1){
          //下载城市数据
          var url = path+"/index/address/child-address?address_id="+this.cityId
          this.$http.get(url).then(function(r){

            var td = r.data;
            this.areaList = td;

          })
        }
      },

      //====地址改变 - 发送请求=====
      dealProvinceChange:function(){
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
    }
  }
</script>

<style media="screen">
  .manage_list_common li input.wallet_sort{
    width: 170px;
  }
  .company_submit{
    width: 160px;
    height: 45px;
    line-height: 45px;
  }
  .company-manager-input-area{
    height: 200px !important;
  }
  .upload img{
    width: 100px;
    height: 100px;
  }

  .upload-logo-box{
    position: relative;
  }
  .upload-logo-box input{
    position: absolute;
    top: 0;
    opacity: 0;
    padding-bottom: 60px;
  }
</style>
