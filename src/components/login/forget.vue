<template>
    <div class="login_box">
        <p class="center_type login_head">新用户注册</p>
        <section >
            <input type="text" class="login_input" v-model="phone" placeholder="请输入您的手机号">
            <div class="twoItem">
                <input type="text" class="login_input smscode_input" v-model="smscode" placeholder="请输入手机验证码">
                <span class="smscode_btn">获取验证码</span>
            </div>
            <input type="password" class="login_input" v-model="newpass" placeholder="请输入新密码">
            <input type="password" class="login_input" v-model="repass" placeholder="请输入确认新密码">
        </section>
        <span class="sign_btn">确定</span>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    data() {
        return {
            phone: '',
            smscode: '',
            newpass: '',
            repass: ''
        }
    },
    methods: {
        
    }
}
</script>

<style media="screen">

</style>