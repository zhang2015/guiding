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
    height: 300px;
    justify-content: flex-end;
    align-items: center;
}

.login_box {
    width: 300px;
    height: auto;
    border: 1px solid #f5f5f5;
}

.login_box section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.login_input {
    width: 200px;
    height: 25px;
    margin: 5px auto;
    padding-left: 20px;
    border: 1px solid #f5f5f5;
}

.twoItem {
    display: flex;
    width: 220px;
    justify-content: space-between;
    align-items: center;
}

.smscode_input {
    width: 120px;
    margin: 5px 0;
}

.smscode_btn {
    width: 70px;
    height: 25px;
    line-height: 25px;
    text-align: center;
}

.imgCode {
    width: 70px;
    height: 25px;
}

.left_type,
.between_type,
.center_type {
    display: flex;
    width: 220px;
    align-items: center;
    margin: auto;
}

.left_type {
    justify-content: flex-start;
}

.center_type {
    justify-content: center;
}

.between_type {
    justify-content: space-between;
}
.sign_btn{
    display: block;
    width: 220px;
    height: 25px;
    margin: auto;
    line-height: 25px;
    text-align: center;
    border-radius: 5px;
}
.loginway div{
    display: flex;
    width: 100px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.loginway div img{
    width: 50px;
    height: 50px;
}
.login_head{
    width: 100%;
    height: 30px;
    background: #f5f5f5;
}
</style>
