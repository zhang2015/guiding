<template>
	<div class="hotBodyBox">
		<section class="hotBodyHeader">
			<span class="hoyBodyTit">热门服务机构</span>
			<div class="hotBodyNav">
				<span v-for="(item,index) in tabs" :key="index" :class="{active:item.id == num}" @click="itemInfo(item.id)">{{item.name}}</span>				
			</div>
		</section>
		<section class="hotBodyCentent">
			<ul class="tx-c">

				<li v-for="item in tabContents" :key="item.id">
					<router-link :to="'/organizationDetails/'+item.id">  
                    <div class="img-logo-wrap">
                        <i :style=" 'background-image:url(' +   dealImg(item.cover_img)  + ')'  ">
                            <img :src="dealImg(item.cover_img)" alt="">
                        </i>
                    </div>
                    
                    <p>{{item.name}}</p>
                    <div>
                        <span v-for="(type,index) in item.companytype" v-show="index<2">{{type.name}}</span>
                    </div>
          </router-link>  
				</li>
			</ul>
		</section>
	</div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      tabs: [],
      tabContents: "",
      num: "",
      path: path,
      getTypeList: path + "/index/company/company-type",
      getItemInfo: path + "/index/index/hot-company"
    };
  },
  created: function() {
    var _this = this;
    this.$http.get(_this.getTypeList, { emulateJSON: true }).then(
      function(response) {
        var data = response.data;
        _this.num = data[0].id;
        for (var i = 0; i < data.length; i++) {
          _this.tabs.push({ id: data[i].id, name: data[i].name });
        }
        _this.itemInfo(_this.num);
      },
      function(response) {
        
      }
    );
  },
  methods: {
    itemInfo: function(id) {
      var _this = this;
      _this.num = id;
      this.$http
        .get(_this.getItemInfo + "?qualification_id=" + id, {
          emulateJSON: true
        })
        .then(
          function(response) {
            _this.tabContents = response.data;
          }
        );
    },
    dealImg:function(img){
      //return img?path+img:''
      return img?path+img:require('../../assets/default/fuwu_com.png');
    }
  }
};
</script>

<style media="screen">
.hoyBodyTit {
  font-size: 18px;
  color: #4a4a4a;
    font-weight: bold
}
.hotBodyHeader {
  display: flex;
  height: 58px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
.hotBodyNav span {
  padding: 6px 0;
  margin-left: 15px;
  color: #898989;
    transition: .3s;
    cursor: pointer;
    font-size: 14px;
    position: relative;
}
    .hotBodyNav span:after{
        content: "";
        width: 100%;
        left: 0;
        bottom: -2px;
        height: 2px;
        background: #0484FF;
        position: absolute;
        opacity: 0;
        transition: .3s
    }
.hotBodyNav span.active {
  color: #0484FF;
    font-weight: bold
}
    .hotBodyNav span.active:after{
        opacity: 1
    }
    .hotBodyNav span:hover{
        color: #0484FF;
    }
.hotBodyCentent {
  display: flex;
  width: 100%;
  height: 198px;
  justify-content: center;
  align-items: center;
  border: 1px solid #efefef;
}
.hotBodyCentent ul {
  width: 100%;
  background: #ffffff;
}
.hotBodyCentent ul li {
  float: left;
  display: flex;
  width: 301px;
  height: 198px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-left: 1px solid #f0f0f0;
  background: #ffffff;
}
.img-logo-wrap {
  width: 88px;
  height: 88px;
  border-radius: 100%;
  border: 1px solid #EDEDED;
    overflow: hidden;
    margin: 0 auto
}
    .img-logo-wrap>i{
        width: 56px;
        height: 56px;
        overflow: hidden;
        margin: 16px auto;
        display: block;
        position: relative;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        position: relative;
    }
    .img-logo-wrap>i>img{
        width: 100%;
        height: 100%;
        opacity: 0;
        position: absolute;
        left: 0;
        top: 0
    }
.hotBodyCentent ul li p {
  padding-top: 18px;
  padding-bottom: 10px;
  font-size: 14px;
  color: #0b0b0b;
    cursor: pointer;
    transition: .3s
}
    .hotBodyCentent ul li p:hover{
        color: #1A87FB
    }
.hotBodyCentent ul li div span {
  padding: 2px 10px;
  line-height: 24px;
  font-size: 12px;
  color: #7E7E7E;
  border: 1px solid #e1e1e1;
  margin-right: 5px;
}
    .tx-c{
        text-align: center
    }
</style>
