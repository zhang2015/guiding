<template>
  <div class="tab_type_box">
    <div class="tab_type_head">
      <a class="active">{{typeName}}认领</a>
    </div>
    <div class="padding20">
      <ul class="manage_list_common setting_list">
        <li class="name-filed">
          <p>{{typeName}}名称</p>
          <input type="text" :placeholder="'请输入'+typeName+'名称'" v-model="company_name" disabled="" />
        </li>
        <li>
          <p>真实姓名</p>
          <input type="text" placeholder="请输入您的真实姓名" v-model="realName">
        </li>
        <li>
          <p>手机号</p>
          <input type="text" placeholder="请输入您的手机号" v-model="phone">
        </li>
        <li>
          <p>邮箱</p>
          <input type="text" placeholder="请输入您的邮箱" v-model="email">
        </li>
        <li class="upload">
          <p>营业执照</p>
          <div class="upload-box">
            <img :src="uploadImgUrl" />
            <input id="file" class="file-upload" type="file" @change="dealImgChange"/>
          </div>
        </li>
        <li>
          <p></p>
          <span class="submit_btn company_submit" @click="dealSendClaim">提交审核</span>
          <span class="cancel_btn company_cancel">取消</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        type:"company",
        typeName:"公司",
        company_name:"",
        uploadImgUrl: require("../../assets/uploadimg.png"),

        realName:"",
        phone:"",
        email:"",
        file:""

      }
    },
    created(){

      loginStatus(this)


      var type = this.$route.query.type;
      if(type == "organization"){
        this.typeName = "服务机构"
        this.type = "organization"

      }

      this.company_name = this.$route.query.name;
    },
    methods:{
      dealImgChange:function(){
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
        this.uploadImgUrl = url;
      },
      dealSendClaim:function(){

        //检测
        if(this.realName.length == 0){
          alert("请输入正确的用户名");
          return;
        }

        if(this.phone.length == 0){
          alert("请输入正确的手机号");
          return;
        }

        if(this.email.length == 0){
          alert("请输入正确的email");
          return;
        }

        if(this.file == ""){
          alert("请选择营业执照文件");
          return;
        }


        //代码块: 发起请求
        var id = this.$route.query.id;
        console.log("id = "+id);

        var url = null;
        var formData = null;
        if(this.type == "company"){

          //发起认领请求
          url = path + "/index/enterprise/enterprise-claim";

          //创建formData
          formData = new FormData();
          
          formData.append("enterprise_id",id);
          formData.append("user_name",this.realName);
          formData.append("user_id",this.userId);
          formData.append("phone",this.phone);
          formData.append("email",this.email);

          formData.append("license_path",this.file);
        }
        else if(this.type == "organization"){
          //发起认领请求
          url = path + "/index/company/company-claim";

          //创建formData
          formData = new FormData();
          
          formData.append("company_id",id);
          formData.append("user_name",this.realName);
          formData.append("user_id",this.userId);
          formData.append("phone",this.phone);
          formData.append("email",this.email);

          formData.append("license_path",this.file);
        }

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
        

      }
    }
  }
</script>

<style media="screen">
  .company_submit,.company_cancel{
    width: 160px;
    margin: 0 10px;
  }
  .name-filed input{
    color: #aaa;
  }
  .upload-box{
    position: relative;
    overflow: hidden;
  }
  .file-upload{
    position: absolute;
    top:0;
    opacity: 0;
    padding-bottom: 56px;
  }
</style>
