<template>
	<div class="indexContent">
		<banner></banner>
		<div class="labelBox">
			<section class="labels">
				<p>
					<span>安全保障</span>
					<span>消除信息不对称</span>
				</p>
				<img src="./images/icon-index-03.png" alt="">
			</section>
			<section class="labels">
				<p>
					<span>海量资源</span>
					<span>全产业链服务覆盖</span>
				</p>
				<img src="./images/icon-index-04.png" alt="">
			</section>
			<section class="labels">
				<p>
					<span>便捷高效</span>
					<span>快速匹配一键直达</span>
				</p>
				<img src="./images/icon-index-05.png" alt="">
			</section>
			<section class="labels">
				<p>
					<span>专业服务</span>
					<span>高标准服务商准入</span>
				</p>
				<img src="./images/icon-index-06.png" alt="">
			</section>
		</div>
		<hotBody></hotBody>
		<bodyTabs :data="typeList[0]"></bodyTabs>
		<bodyTabs :data="typeList[1]"></bodyTabs>
		<bodyTabs :data="typeList[2]"></bodyTabs>
		<bodyTabs :data="typeList[3]"></bodyTabs>
		<div class="messageBox">
			<div class="messageCentent">
				<div class="messageCententBox">
					<indexNewBody></indexNewBody>
					<indexNews></indexNews>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
import banner from "../banner/banner";
import hotBody from "../hotBody/hotBody";
import bodyTabs from "../bodyTabs/bodyTabs";
import indexNewBody from "../indexNewBody/indexNewBody";
import indexNews from "../indexNews/indexNews";

export default {
  data() {
    return {
    getTypeList: path+'/index/company/company-type',
    typeList: ''
    }
  },
  components: {
    banner,
    hotBody,
	bodyTabs,
	indexNewBody,
	indexNews
  },
  created: function(){
    var _this = this;
    this.$http.get(_this.getTypeList, { emulateJSON: true }).then(
      function(response) {
        _this.typeList = response.data
        _this.typeList[0].BgColor="background:#4e93f9"
        _this.typeList[0].BorderColor="border-color:#4e93f9"
        _this.typeList[0].tabBgColor="background:#427dd4;"
        _this.typeList[0].activeFontColor="color:#3f82e7;"
        _this.typeList[0].tabsdes="资质严格审核, 值得信赖"

        _this.typeList[1].BgColor="background:#40e0a9"
        _this.typeList[1].BorderColor="border-color:#40e0a9"
        _this.typeList[1].tabBgColor="background:#36bf90;"
        _this.typeList[1].activeFontColor="color:#46c298;"
        _this.typeList[1].tabsdes="资质严格审核, 值得信赖"

        _this.typeList[2].BgColor="background:#eebc74"
        _this.typeList[2].BorderColor="border-color:#eebc74"
        _this.typeList[2].tabBgColor="background:#cba063;"
        _this.typeList[2].activeFontColor="color:#ffad6a;"
        _this.typeList[2].tabsdes="资质严格审核, 值得信赖"

        _this.typeList[3].BgColor="background:#f98f7a"
        _this.typeList[3].BorderColor="border-color:#f98f7a"
        _this.typeList[3].tabBgColor="background:#d47a68;"
        _this.typeList[3].activeFontColor="color:#ed684e;"
        _this.typeList[3].tabsdes="资质严格审核, 值得信赖"
      },
      function(response) {
        
      }
    );
  },


  
  mounted(){

    // var mainNav = this.$parent.$refs.mainNav;
    // console.log(mainNav.$data);
    // mainNav.$data.dropDownShow = true;

    document.body.style.background = "#f0f0f0";

  },

  destroyed(){
    //首页默认灰色背景, 其他页面默认白色
    document.body.style.background = "#fff";
    
  },
  beforeRouteLeave(to, from, next) {



    //console.log("beforeRouteLeave")
    
    var mainNav = this.$parent.$refs.mainNav;
    //console.log(mainNav.$data);
    mainNav.$data.dropDownShow = false;

    //首页默认灰色背景, 其他页面默认白色
    document.body.style.background = "#fff";

    // ....
    next()
  }
};
</script>

<style media="screen">

.labelBox {
  display: flex;
  width: 100%;
  height: 128px;
  padding-top: 428px;
  justify-content: space-between;
  align-items: center;
}
.labels {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 228px;
  height: 128px;
  padding: 0 30px;
  background: #ffffff;
  border: 1px solid #efefef;
}
.labels p {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}
.labels p span:nth-child(1) {
  font-size: 20px;
  color: #4a4a4a;
}
.labels p span:nth-child(2) {
  padding-top: 12px;
  font-size: 14px;
  color: #bababa;
}
.labels img {
  display: block;
  width: 58px;
  height: auto;
}
.messageBox{
	width: 100%;
	height: 344px;
	margin-top: 20px;
}
.messageCentent{
	position: absolute;
	width: 100%;
	height: 344px;
	background: #ffffff;
	left: 0;
	min-width: 1210px;
}
.messageCententBox{
	width: 1210px;
	margin: 20px auto;
}
</style>
