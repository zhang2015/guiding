<template>
    <div class="login_box">
        <p class="center_type login_head">新用户注册</p>
        <section >
            <input type="text" class="login_input phone" v-model="phone" placeholder="请输入您的手机号">
            <div class="twoItem">
                <input type="text" class="login_input smscode_input code" v-model="smscode" placeholder="请输入手机验证码">
                <span class="smscode_btn" @click="disabled && getSmsCode()">{{smscodeBtnText}}</span>
            </div>
            <input type="password" class="login_input pass" v-model="pass" placeholder="请输入您的密码">
        </section>
        
        <p class="left_type" :class="{agree:isagree == true}" @click="isagree=!isagree">
            <span class="icon-ok"></span>同意<a>用户协议</a>
        </p>
        <span class="sign_btn" @click="toRegister()">免费注册</span>
        <p class="between_type">
            <router-link to='/login'>直接登录</router-link>
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
            phone: '',
            smscode: '',
            pass: '',
            smscodeBtnText: '获取验证码',
            getSmsCodeUrl: path+'/index/login/send-mobile-code',
            registerUrl: path+'/index/login/register',
            wait: 90,
            disabled: true,
            isagree: false
        }
    },
    methods: {
        getSmsCode:function(){
            if (this.phone == '') {
                alert('请填入手机号')
                return false
            }else if(!(/^1[1-9][0-9]{9}$/.test(this.phone))){
                alert('请填入正确手机号')
                return false
            }
            var _this = this
            this.$http.post(_this.getSmsCodeUrl,{
                phone: _this.phone
            },{emulateJSON:true}).then(function(response){
                var data = response.data
                if (data.code == 1) {
                    _this.waitTime()
                }else{
                    alert(data.msg)
                }
            }, function(response){
                //alert('请稍后再试')
            });
        },
        toRegister: function(){
            if (!this.isagree) {
                alert("请同意《用户协议》")
                return false
            }
            if (this.phone == '') {
                alert('请填入手机号')
                return false
            }else if(!(/^1[1-9][0-9]{9}$/.test(this.phone))){
                alert('请填入正确手机号')
                return false
            }
            if (this.smscode == '') {
                alert('请填入手机验证码')
                return false
            }
            if (this.pass == '') {
                alert('请填入密码')
                return false
            }
            var _this = this
            this.$http.post(_this.registerUrl,{
                phone: _this.phone,
                password: _this.pass,
                code: _this.smscode
            },{emulateJSON:true}).then(function(response){
                var data = response.data
                if (data.state == 1) {
                    this.$router.push('/login')
                }else{
                    alert(data.info)
                }
            }, function(response){
                //alert('请稍后再试')
            });
        },
        waitTime: function() {
            var _this = this
            _this.disabled = false
            if(_this.wait == 0) {
                _this.smscodeBtnText = "获取验证码"
                _this.disabled = true
                _this.wait = 90
            } else {
                _this.wait--
                _this.smscodeBtnText = _this.wait+'S后重发'
                setTimeout(function() {
                    _this.waitTime()
                },1000)
            }
        }
    }
}
</script>

<style media="screen">
.login_box .left_type.agree{
 color: #6398ed;
}
</style>