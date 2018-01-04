<template>
    <div>
        <loginNav></loginNav>
        <div class="main_wrapper">
            <div class="login_main">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import loginNav from '../loginNav/loginNav'

export default {
    components: {
        loginNav
    }
}
</script>

<style media="screen">
.login_main {
    display: flex;
    width: 100%;
    height: 570px;
    justify-content: flex-end;
    align-items: center;
    background-image: url(image/login-img.png);
    background-image: -webkit-image-set(url(image/login-img.png) 1x, url(image/login-img@2x.png) 2x);
    background-position: 100px center;
    background-repeat: no-repeat;
    background-size: 428px 445px
}

.login_box {
    width: 350px;
    height: auto;
    border: 1px solid #e0e4eb;
}
.login_box .phone{
    background-image:url(./image/tel.png); 
    background-position: 10px center;
    background-repeat: no-repeat;
}
.login_box .pass{
    background-image:url(./image/pass.png); 
    background-position: 10px center;
    background-repeat: no-repeat;
}
.login_box .code{
    background-image:url(./image/code.png); 
    background-position: 10px center;
    background-repeat: no-repeat;
}
.login_box section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.login_input {
    width: 280px;
    height: 40px;
    margin: 5px auto;
    padding-left: 30px;
    border: 1px solid #f5f5f5;
}

.twoItem {
    display: flex;
    width: 310px;
    justify-content: space-between;
    align-items: center;
}

.smscode_input {
    width: 160px;
    margin: 5px 0;
}

.smscode_btn {
    width: 105px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: #f8f8f8;
    border: 1px solid #e0e4eb;
}

.imgCode {
    width: 105px;
    height: 40px;
    border: 1px solid #e0e4eb;
}
.imgCode img{
    width: 100%;
    height: 100%;
}
.left_type,
.between_type,
.center_type {
    display: flex;
    width: 310px;
    align-items: center;
    margin: 20px auto;
    font-size: 15px;
    color: #b3b3b3;
}

.left_type {
    justify-content: flex-start;
}
.left_type .icon-ok{
    padding: 0 10px;
}
.center_type {
    justify-content: center;
}

.between_type {
    justify-content: space-between;
}
.between_type a{
    color: #6398ed;
}
.sign_btn{
    display: block;
    width: 310px;
    height: 40px;
    margin: auto;
    line-height: 40px;
    text-align: center;
    border-radius: 5px;
    background: #6398ed;
    color: #ffffff;
    font-size: 15px;
}
.loginway div{
    display: flex;
    width: 110px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.loginway div img{
    width: 50px;
    height: 50px;
}
.loginway div span{
    padding-top: 15px;
    font-size: 12px;
}
.login_head{
    width: 100%;
    margin: 0;
    margin-bottom: 10px;
    height: 40px;
    border-bottom: 1px solid #e0e4eb;
    color: #333;
    background: #fcfcfc;
}
</style>
