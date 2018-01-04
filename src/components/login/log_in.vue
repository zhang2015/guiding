<template>
    <div class="login_box">
        <ul class="login_box_tab">
            <li @click="changeTab('type1')" :class="loginType=='type1'? 'active':''">普通登录</li>
            <li @click="changeTab('type2')" :class="loginType=='type2'? 'active':''">手机动态密码登录</li>
        </ul>
        <section v-if="loginType == 'type1'">
            <input type="text" class="login_input phone" v-model="phone" placeholder="请输入您的手机号">
            <input type="password" class="login_input pass" v-model="pass" placeholder="请输入您的密码">
            <div class="twoItem">
                <input type="text" class="login_input smscode_input code" v-model="imgcode" placeholder="请输入右侧验证码">
                <span class="imgCode">
                    <img src="./image/codeimg.png">
                </span>
            </div>
        </section>
        <section v-if="loginType == 'type2'">
            <input type="text" class="login_input phone" v-model="phone" placeholder="请输入您的手机号">
            <div class="twoItem">
                <input type="text" class="login_input smscode_input code" v-model="smscode" placeholder="请输入手机验证码">
                <span class="smscode_btn" @click="disabled && getSmsCode()">{{smscodeBtnText}}</span>
            </div>
        </section>
        <p class="left_type" :class="{agree:isagree == true}" @click="isagree=!isagree">
            <span class="icon-ok"></span>保持一周登录状态
        </p>
        <span class="sign_btn" @click="toLogin()">登录</span>
        <p class="between_type">
            <router-link to='/login/register'>免费注册</router-link>
            <router-link to='/login/forget'>忘记密码?</router-link>
        </p>
        <p class="center_type">使用合作网站登录</p>
        <div class="center_type loginway">
            <div>
                <img src="./image/weixin.png" />
                <span>微信登录</span>
            </div>
            <div>
                <img src="./image/qq.png" />
                <span>QQ登录</span>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      loginType: "type1",
      phone: "",
      smscode: "",
      pass: "",
      imgcode: "",
      disabled: true,
      wait: 90,
      smscodeBtnText: "获取验证码",
      getSmsCodeUrl: path + "/index/login/mobile-login-code",
      getImgSmsCodeUrl: path + "",
      passLoginUrl: path + "/index/login",
      phoneLoginUrl: path + "/index/login/login-by-phone",
      isagree: false
    };
  },
  methods: {
    changeTab: function(value) {
      this.loginType = value;
    },
    getSmsCode: function() {
      if (this.phone == "") {
        alert("请填入手机号");
        return false;
      } else if (!/^1[1-9][0-9]{9}$/.test(this.phone)) {
        alert("请填入正确手机号");
        return false;
      }
      var _this = this;
      this.$http
        .post(
          _this.getSmsCodeUrl,
          {
            phone: _this.phone
          },
          { emulateJSON: true }
        )
        .then(
          function(response) {
            var data = response.data;
            if (data.code == 1) {
              _this.waitTime();
            } else {
              alert(data.msg);
            }
          },
          function(response) {
            
          }
        );
    },
    waitTime: function() {
      var _this = this;
      _this.disabled = false;
      if (_this.wait == 0) {
        _this.smscodeBtnText = "获取验证码";
        _this.disabled = true;
        _this.wait = 90;
      } else {
        _this.wait--;
        _this.smscodeBtnText = _this.wait + "S后重发";
        setTimeout(function() {
          _this.waitTime();
        }, 1000);
      }
    },
    toLogin: function() {
      var _this = this;
      if (this.phone == "") {
        alert("请填入手机号");
        return false;
      } else if (!/^1[1-9][0-9]{9}$/.test(this.phone)) {
        alert("请填入正确手机号");
        return false;
      }
      if (this.loginType == "type1") {
        if (_this.imgcode == "") {
          alert("请填入图形验证码");
          return false;
        }
        if (_this.pass == "") {
          alert("请输入密码");
          return false;
        }
        this.$http.post(_this.passLoginUrl,{
                phone: _this.phone,
                password: _this.pass,
            },{emulateJSON:true}).then(function(response){
                var data = response.data
                if (data.state == 1) {
                    _this.saveUserMsg(data.user)
                }else{
                    alert(data.info)
                }
            }, function(response){
                //alert('请稍后再试')
            });
      } else if (this.loginType == "type2") {
        if (_this.smscode == "") {
          alert("请填入短信验证码");
          return false;
        }
        this.$http.post(_this.phoneLoginUrl,{
                phone: _this.phone,
                code: _this.smscode,
            },{emulateJSON:true}).then(function(response){
                var data = response.data
                if (data.state == 1) {
                    _this.saveUserMsg(data.user)
                }else{
                    alert(data.info)
                }
            }, function(response){
                //alert('请稍后再试')
            });
      }
    },
    saveUserMsg: function(data){
        if( this.isagree == true ){
            localStorage.setItem('userId',data.id)
            localStorage.setItem('nick_name',data.nick_name)
            localStorage.setItem('name',data.name)
            localStorage.setItem('img',data.img)

            localStorage.setItem('companyId',119)
        }else{
            sessionStorage.setItem('userId',data.id)
            sessionStorage.setItem('nick_name',data.nick_name)
            sessionStorage.setItem('name',data.name)
            sessionStorage.setItem('img',data.img)

            sessionStorage.setItem('companyId',119)
        }
        this.$router.push('/main')
    }
  }
};
</script>

<style media="screen">
.login_box_tab {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.login_box_tab li {
  width: 50%;
  height: 30px;
  text-align: center;
  line-height: 30px;
  background: #fcfcfc;
  border-top: 3px solid transparent;
}

.login_box_tab li:nth-child(1) {
  border-right: 1px solid #e0e4eb;
  border-bottom: 1px solid #e0e4eb;
}

.login_box_tab li:nth-child(2) {
  border-bottom: 1px solid #e0e4eb;
}

.login_box_tab li.active {
  border-top: 3px solid #6398ed;
  background: #ffffff;
  border-bottom: 1px solid #ffffff;
  color: #6398ed;
}
.login_box .left_type.agree{
 color: #6398ed;
}
</style>