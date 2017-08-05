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
                <span class="smscode_btn">获取验证码</span>
            </div>
        </section>
        <p class="left_type">
            <span class="icon-ok"></span>保持一周登录状态
        </p>
        <span class="sign_btn">登录</span>
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
            loginType: 'type1',
            phone: '',
            smscode: '',
            pass: '',
            imgcode: ''
        }
    },
    methods: {
        changeTab: function (value) {
            this.loginType = value;
        }
    }
}
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
</style>