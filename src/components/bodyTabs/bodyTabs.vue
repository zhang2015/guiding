<template>
	<div class="bodytabs" v-if="data" :style="data.BorderColor">
		<div class="bodyTabSidebar" :style="data.BgColor">
			<p>{{data.name}}</p>
			<span class="siderLine"></span>
			<span class="siderDes">{{data.tabsdes}}</span>
			<ul>
				<li v-for='(itme,index) in data.child' :key="index" v-if="index < 5" :class='{active:num === itme.id}' @click="itemList(itme.id)" :style="data.tabBgColor">
					<span v-if="num === itme.id" :style="data.activeFontColor">{{itme.name}}</span>
					<span v-else>{{itme.name}}</span>
				</li>
			</ul>
		</div>
		<div class="bodyTabCentent">
      <router-link v-for="(item,index) in items" :key="index" :to="'/organizationDetails/'+item.id">
  			<section >
                    <div class="img-logo-wrap">
                        <i :style=" 'background-image:url(' +   dealImg(item.cover_img)  + ')'  ">
                            <img :src="dealImg(item.cover_img)" alt="">
                        </i>
                    </div>
    				<div>
    					<p>{{item.name}}</p>
    					<p>
    						<span v-for="(label,index) in item.companytype"  :key="index" v-if="index<3">{{label.name}}</span>
    					</p>
    					<p v-if="item.service[0]">{{item.service[0].title}}:<span>{{item.service[0].price}}</span><i>元</i></p>
    				</div>
          
  			</section>
      </router-link>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
    path: path,
    num: '',
    itemListPath:path+'/index/index/index-company',
    items:''
	}
  },
  props: ["data"],
  mounted() {
    
  },
  watch: {
    data(val) {
      this.data = val
      this.num = this.data.child[0].id
      this.itemList(this.num)
    }
  },
  methods:{
    itemList: function(id) {
      this.num = id
      var _this = this;
      _this.num = id;
      this.$http
        .get(_this.itemListPath + "?qualification_id=" + id, {
          emulateJSON: true
        })
        .then(
          function(response) {
            _this.items = response.data;
          },
          function(response) {
            
          }
        );
    },
    dealImg:function(img){
      //return img?path+img:''
      return img?path+img:require('../../assets/default/fuwu_com.png')
    }
  }
};
</script>

<style media="screen">
.bodytabs {
  width: 100%;
  height: 398px;
  border-top: 3px solid;
  background: #ffffff;
  margin-top: 20px;
}
.bodyTabSidebar {
  float: left;
  width: 208px;
  height: 368px;
  padding-top: 30px;
  padding-left: 20px;
  color: #ffffff;
}
.bodyTabSidebar p {
  font-size: 22px;
  font-weight: bold;
}
.bodyTabSidebar .siderLine {
  display: block;
  width: 88px;
  height: 0px;
  border-top: 3px solid #ffffff;
  margin-top: 5px;
  margin-bottom: 15px;
}
.bodyTabSidebar .siderDes {
  font-size: 14px;
}
.bodyTabSidebar ul {
  float: right;
  margin-top: 50px;
}
.bodyTabSidebar ul li {
  height: 38px;
  line-height: 38px;
  width: 140px;
  text-align: right;
  padding-right: 20px;
    font-size: 14px;
  margin-bottom: 10px;
    background: rgba(0,0,0,.12)!important;
    transition: .3s;
    cursor: pointer
}
.bodyTabSidebar ul li:hover{
    background: rgba(0,0,0,.07)!important;
}
.bodyTabSidebar ul li.active {
  background: #ffffff !important;
}
.bodyTabCentent {
  float: left;
  width: 982px;
}
.bodyTabCentent section {
  float: left;
  display: flex;
  width: 490px;
  height: 132px;
  border-bottom: 1px solid #f0f0ff;
  justify-content: left;
  align-items: center;
    position: relative;
    z-index: 1;
    transition: .3s;
/*    top: 0;*/
}
    .bodyTabCentent section:hover{
/*        top: -2px;*/
        z-index: 2;
        box-shadow: 0 2px 2px rgba(0,0,0,.04)
    }
    .bodyTabCentent section div p:nth-child(1):hover{
        color:#0585FF
    }
.bodyTabCentent section:nth-child(2n + 1) {
  border-right: 1px solid #f0f0f0;
}
.bodyTabCentent section img {
  width: 88px;
  height: 88px;
  border-radius: 100%;
  margin-left: 30px;
  margin-right: 20px;
    border: 1px solid #EDEDED
}
.bodyTabCentent section div p:nth-child(1) {
  font-size: 16px;
  color: #0b0b0b;
  line-height: 30px;
    transition: .3s;
    cursor: pointer
}
.bodyTabCentent section div p:nth-child(2) span {
  padding: 0 10px;
  line-height: 24px;
  font-size: 12px;
  color: #ccc;
  border: 1px solid #e1e1e1;
  margin-right: 5px;
}
.bodyTabCentent section div p:nth-child(3) {
  line-height: 24px;
  font-size: 12px;
  color: #b3b3b3;
}
.bodyTabCentent section div p:nth-child(3) span {
  color: #ffc373;
  font-size: 14px;
}
.bodyTabCentent section div p:nth-child(3) i {
  color: #898989;
  font-size: 14px;
}
    
    .bodyTabCentent .img-logo-wrap{
        margin: 0 20px;
        margin-left: 30px
    }

</style>
