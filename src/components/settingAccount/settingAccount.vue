<template>
  <div>
    <ul class="manage_list_common setting_list">
      <li class="upload">
        <p>头像</p>
        <p>
            <img :src="headImage">
             <input type="file" id="file" @change="uploadImageChange" style="display:none">
             <label for="file" class="select-head">选择头像</label>
          </p>

        <p><span @click="sendUploadHeadImage">上传头像</span></p>
      </li>
      <li>
        <p>邮箱</p>
        <p>{{show_email}}</p>
        <p>
          <span @click="dealClickEditEmail">绑定</span>
        </p>
      </li>
      <li>
        <p>手机</p>
        <p>{{phone_num_encrypt(show_phone)}}</p>
        <p>
          <span @click="dealClickEditPhone">修改</span>
        </p>
      </li>
      <li>
        <p>密码</p>
        <p>********</p>
        <p>
          <span @click="dealClickEditPassword">修改</span>
        </p>
      </li>
    </ul>
    <div class="windows_wrapper" v-show="email_edit">
      <div class="windows_box">
        <div class="windows_head">
          <span>绑定邮箱</span>
          <span class="icon-close" @click="email_edit = false"></span>
        </div>
        <div class="windows_content">
          <section>
            <span class="label">邮箱</span>
            <input v-model="input_email" type="text" placeholder="请输入您要绑定的邮箱">
          </section>
        </div>
        <div class="windows_btn">
          <span class="windows_btn_cancel" @click="email_edit = false">取消</span>
          <span class="windows_btn_confirm" @click="dealBindEmail">提交</span>
        </div>
      </div>
    </div>
    <div class="windows_wrapper" v-show="tel_edit">
      <div class="windows_box">
        <div class="windows_head">
          <span></span>
          <span class="icon-close" @click="tel_edit = false"></span>
        </div>
        <div class="windows_content">
          <section>
            <span class="label">原手机号</span>
            <input v-model="input_old_phone" type="text" placeholder="请输入原手机号">
          </section>
          <section>
            <span class="label">密码</span>
            <input v-model="input_old_code" type="text" placeholder="请输入密码">
          </section>
          <section>
            <span class="label">新手机号</span>
            <input v-model="input_new_phone" type="text" placeholder="请输入您要绑定的新手机号" class="shot">
            <span class="smscode_btn" @click="dealSendNewPhoneCode">发送验证码</span>
          </section>
          <section>
            <span class="label">验证码</span>
            <input v-model="input_new_code" type="text" placeholder="请输入新手机收到的验证码">
          </section>
        </div>
        <div class="windows_btn">
          <span class="windows_btn_cancel" @click="tel_edit = false">取消</span>
          <span class="windows_btn_confirm" @click="dealChangePhone">提交</span>
        </div>
      </div>
    </div>
    <div class="windows_wrapper" v-show="pass_edit">
      <div class="windows_box">
        <div class="windows_head">
          <span>修改登录密码</span>
          <span class="icon-close" @click="pass_edit = false"></span>
        </div>
        <div class="windows_content">
          <section>
            <span class="label">原密码</span>
            <input v-model="input_old_password" type="password" placeholder="请输入原密码">
          </section>
          <section>
            <span class="label">新密码</span>
            <input v-model="input_new_password" type="password" placeholder="请输入新密码">
          </section>
          <section>
            <span class="label">确认新密码</span>
            <input v-model="input_new_sure_password" type="password" placeholder="请再次输入新密码">
          </section>
        </div>
        <div class="windows_btn">
          <span class="windows_btn_cancel" @click="pass_edit = false">取消</span>
          <span class="windows_btn_confirm" @click="dealChangePassword">提交</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        email_edit: false,
        tel_edit: false,
        pass_edit: false,
        headImage:require('./images/uploadimg.png'),
        file:"",

        input_email:"",

        input_old_phone:"",
        input_old_code:"",
        input_new_phone:"",
        input_new_code:"",

        input_old_password:"",
        input_new_password:"",
        input_new_sure_password:"",

        show_email:"",
        show_phone:"",

        sendNewPhoneCode: false,
      }
    },
    created(){
      loginStatus(this);
      this.headImage = path + this.img;

      //获取用户基本信息
      this.getUserInfo();
    },
    methods:{

      dealClickEditEmail(){
        this.input_email = ""
        this.email_edit = true;
      },

      dealClickEditPhone(){
        this.input_old_phone = ""
        this.input_old_code = ""
        this.input_new_phone = ""
        this.input_new_code = ""

        this.tel_edit = true;
      },

      dealClickEditPassword(){

        this.input_old_password = ""
        this.input_new_password = ""
        this.input_new_sure_password = ""

        this.pass_edit = true
      },

      getUserInfo(){
          // /index/user
          var url = path + "/index/user?user_id="+this.userId;
          this.$http.get(url).then(function(r){
            var td = r.data;
            this.show_email = td.email;
            this.show_phone = td.phone;
          })
      },

      dealChangePassword:function(){

        if(this.input_old_password == ""){
          alert("请输入原密码");
          return;
        }

        if(this.input_old_password.length < 6){
          alert("原密码最少6位");
          return;
        }

        if(this.input_new_password == ""){
          alert("请输入新密码");
          return;
        }

        if(this.input_new_password.length < 6){
          alert("新密码最少6位");
          return;
        }

        if(this.input_new_sure_password == ""){
          alert("请输入新的重复密码");
          return;
        }

        if(this.input_new_sure_password.length <6){
          alert("新的重复密码最少6位");
          return;
        }

        if(this.input_new_password != this.input_new_sure_password){
          alert("新密码和新的重复密码不一致");
          return;
        }


        var url = path + "/index/user/change-user-pwd";
        var dict = {
          user_id:this.userId,
          pwd:this.input_new_password,
          pwd_sure:this.input_new_sure_password,
          old_pwd:this.input_old_password
        }
        this.$http.post(url,dict,{"emulateJSON":true}).then(function(r){
          var td = r.data;
          if(td.state == 1){
            alert("密码修改成功")

            this.pass_edit = false
          }else{
            alert("密码修改失败")
          }
        })

      },
      dealSendNewPhoneCode:function(){
        if(this.input_new_phone == ""){
          alert("请输入新手机号");
          return;
        }
        if (this.sendNewPhoneCode) {
          alert("请稍后请求");
          return;
        }
        var url = path + '/index/login/send-update-mobile-code';
        var dict = {
          phone:this.input_new_phone
        }
        this.$http.post(url,dict,{"emulateJSON":true}).then(function(r){
          var td = r.data;
          if(td.code == 1){
            this.show_phone = this.input_new_phone;
            alert("手机验证码发送成功")
          }else{
            alert(data.msg)
          }
        })
      },
      dealChangePhone:function(){

        if(this.input_old_phone == ""){
          alert("请输入原有手机号");
          return;
        }

        if(this.input_old_code == ""){
          alert("请输入密码");
          return;
        }

        if(this.input_new_phone == ""){
          alert("请输入新手机号");
          return;
        }

        if(this.input_new_code == ""){
          alert("请输入新手机号验证码");
          return;
        }

        var url = path + "/index/login/change-user-phone";
        var dict = {
          user_id:this.userId,
          old_phone:this.input_old_phone,
          pwd:this.input_old_code,
          phone:this.input_new_phone,
          code:this.input_new_code
        }
        this.$http.post(url,dict,{"emulateJSON":true}).then(function(r){
          var td = r.data;
          if(td.state == 1){
            this.show_phone = this.input_new_phone;
            alert("手机号修改成功")
          }else if (td.state == -1) {
            alert("手机号已存在")
          }else{
            alert("手机号修改失败")
          }
        })


      },
      dealBindEmail:function(){

        if(this.input_email == ""){
          alert("请输入邮箱");
          return;
        }

        //邮箱规则
        // var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/; 
        // reg.test(str);
        var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
        if(!reg.test(this.input_email)){
          alert("邮箱格式错误!");
          return;
        } 

        var url = path + "/index/user/bind-user-email";
        var dict = {
          user_id:this.userId,
          email:this.input_email
        }
        this.$http.post(url,dict,{"emulateJSON":true}).then(function(r){
          var td = r.data;
          if(td.state == 1){
            this.show_email = this.input_email;
            alert("邮箱绑定成功")
            this.email_edit = false
            //重新下载数据
            this.getUserInfo();
          }else{
            alert("邮箱绑定失败")
          }
        })

      },
      sendUploadHeadImage:function(){


        if(this.file == ""){
          alert("请选择头像文件");
          return;
        }

        //发起认领请求
        var url = path + "/api/fileUpload/change-user-img";

        //创建formData
        var formData = new FormData();
        

        formData.append("user_id",this.userId);
        formData.append("file",this.file);
        console.log(this.file)

        
        //发起请求
        this.$http.post(url,formData,function(){
          console.log("send")
        }).then(function (r) {
          //console.log(JSON.stringify(r.data))
          var td = r.data;
          if(td.state == 1){

            if(localStorage.img){
              localStorage.img = td.img;
            }else if(sessionStorage.img){
              sessionStorage.img = td.img;
            }

            alert(r.data.info+" 请刷新当前页面以使用新的头像");
            // location.reload();

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
        this.headImage = url;
      },
      phone_num_encrypt:function(phoneNum){
        return phoneNum.substring(0,3)+'****'+phoneNum.substring(8,11);
      }
    }
  }
</script>

<style media="screen">
  .upload img{
    width: 100px;
    height: 100px;
  }
    .select-head{
        position: relative;
        vertical-align: top;
        width: 70px;
        height: 28px;
        line-height: 28px;
        border-radius: 4px;
        border: 1px solid #e5e7ed;
        margin: auto;
        font-size: 12px;
        display: inline-block;
        text-align: center;
        background: #FCFCFC;
        cursor: pointer;
        transition: .3s;
    }
    .select-head:hover{
        background: #ffffff
    }
</style>
