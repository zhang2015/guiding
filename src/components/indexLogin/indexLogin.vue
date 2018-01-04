<template>
    <div class="indexLoginWrapper">
        <div class="indexLogin">
          <img :src="headImage" alt="" class="userIcon">
          <span class="userName">欢迎{{nick_name}}</span>
          <p class="btns" v-show="!userId">
            <router-link to='/login'><span class="loginBtn userBtn">登录</span></router-link>
            <router-link to='/login/register'><span class="registerBtn userBtn">注册</span></router-link>
          </p>
          <div class="introduceDiv">
            <div class="introduceItem">
              <img src="./images/icon-index-01.png" alt="" class="introduceIcon">
              <p>
                <span>平台入驻服务机构</span>
                <span>{{num1}}</span>
              </p>
            </div>
            <p class="introduceLine"></p>
            <div class="introduceItem">
              <img src="./images/icon-index-02.png" alt="" class="introduceIcon">
              <p>
                <span>已认领公司</span>
                <span>{{num2}}</span>
              </p>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      path:path,
      getIndexUrl: path + "/index/index",
      num1: "",
      num2: "",
      userId: false,
      nick_name: "",
      headImage: require("../../assets/default/user_img.png")
    }
  },
  created: function() {
    loginStatus(this);

    if(this.userId){
      this.headImage = path+this.img;
    }

    var _this = this
    this.$http.get(_this.getIndexUrl, { emulateJSON: true }).then(
      function(response) {
        var data = response.data;
        _this.num1 = data.company_num;
        _this.num2 = data.enterprise_num;
      },
      function(response) {
        
      }
    )
  },
  methods: {}
};
</script>
<style>
.indexLoginWrapper {
  position: absolute;
  width: 1210px;
  height: 408px;
  top: 0;
  left: 50%;
  margin-left: -605px;
}
.indexLogin {
  position: absolute;
  right: 0;
  top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 226px;
  height: 381px;
  background: #ffffff;
  z-index: 10;
}
.indexLogin .userIcon {
  width: 70px;
  height: 70px;
  border-radius: 100%;
}
.indexLogin .userName {
  font-size: 14px;
  color: #b3b3b3;
  padding: 10px 0;
}
.indexLogin .btns {
  display: flex;
  height: 36px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.indexLogin .btns  a{
  padding: 0;
}
.indexLogin .btns .userBtn {
  display: block;
  width: 90px;
  height: 34px;
  border-radius: 34px;
  cursor: pointer;
  text-align: center;
  line-height: 34px;
  font-size: 13px;
  margin: 0 5px;
}
.indexLogin .btns .loginBtn {
  border: 1px solid #337ffb;
  color: #337ffb;
    transition: .3s;
    cursor: pointer
}
    .indexLogin .btns .loginBtn:hover{
        background: #337ffb;
        color: #fff
    }
.indexLogin .btns .registerBtn {
  border: 1px solid #ffbe61;
  color: #ffbe61;
    transition: .3s;
    cursor: pointer
}
    .indexLogin .btns .registerBtn:hover{
        background: #ffbe61;
        color: #fff
    }
.indexLogin .introduceLine {
  display: block;
  margin-left: 80px;
  border-top: 1px solid #e6e6e6;
}
.indexLogin .introduceDiv {
  width: 100%;
  border-top: 1px solid #e6e6e6;
  margin-top: 30px;
}
.indexLogin .introduceItem {
  display: flex;
  width: 100%;
  height: 90px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.indexLogin .introduceItem .introduceIcon {
  width: 40px;
  margin-right: 15px;
}
.indexLogin .introduceItem p {
  display: flex;
  width: 120px;
  flex-direction: column;
  justify-content: center;
}
.indexLogin .introduceItem p span:nth-child(1) {
  font-size: 14px;
  color: #898989;
}
.indexLogin .introduceItem p span:nth-child(2) {
  font-size: 20px;
  color: #616161;
    font-family: alial;
    font-weight: bold;
    margin-top: 6px
}
</style>