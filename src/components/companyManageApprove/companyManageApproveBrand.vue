<template>
  <div>
      <ul class="manage_list_common setting_list">
        <li class="upload">
          <p>认证资料</p>
          <!-- <img src="../../assets/uploadimg.png"> -->
          <div  class="upload-logo-box">
            <img :src="src" />
            <span>点击图片选择图片</span>
            <input id="file" type="file" @change="uploadImageChange">
          </div>
        </li>
        <li>
          <p></p>
          <span class="submit_btn company_submit" @click="approveCompany">提交</span>
          <span class="cancel_btn invoice_cancel_btn ml10" @click="backtolist">取消</span>
        </li>
      </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        src:'/static/images/uploadimg.png',
        license:''
      }
    },
    created(){
      loginStatus(this);
    },
    methods:{
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
        this.file = uploadFile;
        var formData = new FormData();
        formData.append("file",this.file);
        this.$http.post(path+'/api/uploadImage',formData,{"emulateJSON":true}).then(function(r){
          var imgdata = r.data;
          this.license = imgdata.uri;
        })
        //显示图片
        this.src = url;
      },
      approveCompany:function(){
        var data = {
          user_id : this.userId,
          company_id: this.companyId,
          qualification_id:this.$route.params.qualification_id,
          type:1,
          img_first:this.license
        }
        this.$http.post(path+'/index/company/add-company-auto',data,{"emulateJSON":true}).then(function(r){
          var rdata = r.data;
          if (rdata.status == 1) {
            window.location.href='#/manage/companyManage/companyManageApprove/companyManageApproveTable'
            alert(rdata.info)
          } else {
            alert(rdata.info)
          }
        })
      },
      backtolist:function(){
        window.location.href='#/manage/companyManage/companyManageApprove/companyManageApproveTable'
      }
    }
  }
</script>

<style media="screen">
  .company_submit{
    flex-basis: 100px;
  }
  .invoice_cancel_btn{
    flex-basis: 100px;
  }
  .upload-logo-box{
      position: relative;
    }
    .upload-logo-box img{
      width: 110px;
      height: 110px;
    }
    .upload-logo-box input{
      position: absolute;
      top: 0;
      opacity: 0;
      padding-bottom: 60px;
    }
</style>
