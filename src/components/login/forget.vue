<template>
    <div class="login_box">
        <p class="center_type login_head">忘记密码</p>
        <section >
            <input type="text" class="login_input phone" v-model="phone" placeholder="请输入您的手机号">
            <div class="twoItem">
                <input type="text" class="login_input smscode_input code" v-model="imgcode" placeholder="请输入右侧验证码">
                <span class="imgCode">
                    <img :src="verify_code" @click="dealChangeVerifyCode">
                </span>
            </div>
            <div class="twoItem">
                <input type="text" class="login_input smscode_input code-phone" v-model="smscode" placeholder="请输入手机验证码">
                <span class="smscode_btn" @click="disabled && getSmsCode()">{{smscodeBtnText}}</span>
            </div>
            <input type="password" class="login_input pass" v-model="newpass" placeholder="请输入新密码">
            <input type="password" class="login_input pass" v-model="repass" placeholder="请输入确认新密码">
        </section>
        <span class="sign_btn forget_btn" @click="toDealChangePassword()">确定</span>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    data() {
        return {
            phone: '',
            smscode: '',
            newpass: '',
            repass: '',
            verify_code:"",
            getSmsCodeUrl: path+'/index/login/mobile-login-code',
            smscodeBtnText:"获取验证码",
            disabled: true,
            imgcode:"",

            changePasswordUrl:path+"/index/login/forget-pwd"
        }
    },
    created(){

        this.verify_code = path+"/api/verify-code?r="+Math.random();

    },
    methods: {
        dealChangeVerifyCode(){

          this.verify_code = path+"/api/verify-code?r="+Math.random();

        },

        getSmsCode:function(){
            if (this.phone == '') {
                alert('请填入手机号')
                return false
            }else if(!(/^1[1-9][0-9]{9}$/.test(this.phone))){
                alert('请填入正确手机号')
                return false
            }

            if (this.imgcode == '') {
                alert('请填入图形验证码')
                return false
            }
            if (this.imgcode.length != 4) {
                alert('图形验证码必须为4位')
                return false
            }


            var _this = this
            this.$http.post(_this.getSmsCodeUrl,{
                phone: _this.phone,
                yz_code: _this.imgcode
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

        toDealChangePassword(){

            if (this.phone == '') {
                alert('请填入手机号')
                return false
            }else if(!(/^1[1-9][0-9]{9}$/.test(this.phone))){
                alert('请填入正确手机号')
                return false
            }

            if (this.imgcode == '') {
                alert('请填入图形验证码')
                return false
            }
            if (this.imgcode.length != 4) {
                alert('图形验证码必须为4位')
                return false
            }

            if (this.smscode == '') {
                alert('请填入手机验证码')
                return false
            }
            if (this.newpass == '') {
                alert('请填入密码')
                return false
            }
            if (this.newpass.length < 6) {
                alert('新密码最少6位')
                return false
            }
            if (this.repass == '') {
                alert('请填入确认密码')
                return false
            }
            if (this.repass.length < 6) {
                alert('确认密码最少6位')
                return false
            }
            var _this = this
            this.$http.post(_this.changePasswordUrl,{
                phone: _this.phone,
                
                code: _this.smscode,

                pwd: _this.newpass,

                pwd_sure: _this.repass

            },{emulateJSON:true}).then(function(response){
                var data = response.data
                if (data.state == 1) {
                    alert("修改成功,点击跳转到登录界面!")
                    this.$router.push('/login')
                }else{
                    alert(data.info)
                }
            }, function(response){
                //alert('请稍后再试')
            });
        }
    }
}
</script>

<style media="screen">
.forget_btn{
    margin: 10px auto;
}
</style>