<template>
    <div class="login_box">
        <p class="center_type login_head">新用户注册</p>
        <section >
            <input type="text" class="login_input phone" v-model="phone" placeholder="请输入您的手机号">
            <div class="twoItem">
                <input type="text" class="login_input smscode_input code" v-model="smscode" placeholder="请输入手机验证码">
                <span class="smscode_btn">获取验证码</span>
            </div>
            <input type="password" class="login_input pass" v-model="pass" placeholder="请输入您的密码">
        </section>
        
        <p class="left_type">
            <span class="icon-ok"></span>同意<a>用户协议</a>
        </p>
        <span class="sign_btn">免费注册</span>
        <p class="between_type">
            <a>免费注册</a>
            <a>忘记密码?</a>
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
            pass: ''
        }
    },
    methods: {
        
    }
}
</script>

<style media="screen">

</style>