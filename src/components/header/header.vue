<template>
  <div class="vheader">
    <div>
      <p>
        <span class="icon-map-marker"></span>
        <span>{{showCityName}}</span>
        <span @click="city_dialog = true">[切换]</span>
      </p>
      <p>
        <span>咨询热线：400-213-2120</span>
        <router-link to="/main/help">帮助中心</router-link>
      </p>
    </div>
    <!--切换地区 begin-->
    <div class="windows_wrapper" v-show="city_dialog">
      <div class="windows_box">
        <div class="windows_head">
          <span>选择城市</span>
          <span class="icon-close" @click="city_dialog = false"></span>
        </div>
        <div class="windows_content city-content">
          <div class="city-hot">
              <b class="color-red">热门城市</b>
              <div>
                  <a v-for="item in hotList" @click="dealSelectCity(item)" href="#">{{item.name}}</a>
                  <!-- <a href="#">北京市</a>
                  <a href="#">北京市</a>
                  <a href="#">北京市</a>
                  <a href="#">北京市</a>
                  <a href="#">北京市</a>
                  <a href="#">北京市</a>
                  <a href="#">北京市</a>
                  <a href="#">北京市</a>
                  <a href="#">北京市</a>
                  <a href="#">北京市</a>
                  <a href="#">北京市</a>
                  <a href="#">北京市</a>
                  <a href="#">北京市</a>
                  <a href="#">北京市</a>
                  <a href="#">北京市</a>
                  <a href="#">北京市</a>
                  <a href="#">北京市</a>
                  <a href="#">北京市</a>
                  <a href="#">北京市</a>
                  <a href="#">北京市</a>
                  <a href="#">北京市</a>
                  <a href="#">北京市</a>
                  <a href="#">北京市</a> -->
              </div>
          </div>
          <div class="city-list">
              <b>全部城市</b>
              <div>
                  <a  v-for="item in activeList" @click="dealSelectCity(item)" href="#">{{item.name}}</a>
                  <!-- <a href="#">北京市</a>
                  <a href="#">北京市</a>
                  <a href="#">北京市</a>
                  <a href="#">北京市</a>
                  <a href="#">北京市</a>
                  <a href="#">北京市</a>
                  <a href="#">北京市</a> -->
              </div>
          </div>
        </div>
      </div>
    </div>
    <!--切换地区 begin-->
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{

        city_dialog: false,
        hotList:[],
        activeList:[],
        showCityName:"北京",
        showCityId:-1
      }
    },

    methods:{
      dealSelectCity(item){
        this.showCityName = item.name;
        this.showCityId = item.id;
        this.city_dialog = false;
      }
    },

    created(){

      var url = path + "/index/index/address";
      this.$http.get(url).then(function(r){
        //console.log("header created");
        var td = r.data;
        this.hotList = td.hot;
        this.activeList = td.active;
      })

    }
  }
</script>

<style media="screen">
  .vheader{
    width: 100%;
    height: 30px;
    min-width: 1210px;
    border-bottom: 1px solid #ccc;
    background: #f1f1f1;
    color: #898989;
  }
  .vheader>div:first-child{
    width: 1210px;
    height: 30px;
    margin: auto;
  }
  .vheader div p{
    line-height: 30px;
  }
  .vheader div p:nth-child(1){
    float: left;
  }
  .vheader div p:nth-child(1) span:nth-child(3){
    color: #2990FF ;
    cursor: pointer;
      transition: .3s
  }
    .vheader div p:nth-child(1) span:nth-child(3):hover{
        color: #59a9ff
    }
  .vheader div p:nth-child(2){
    float: right;
  }
  .vheader div p:nth-child(2) a{
    color: #898989;
    padding-left: 10px;
    margin-left: 10px;
      transition: .3s;
      position: relative;
  }
    .vheader div p:nth-child(2) a:after{
        height: 10px;
        width: 1px;
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        margin-top: -5px;
        background: #ccc
    }
    .vheader div p:nth-child(2) a:hover{
        color: #0484FF
    }
    
    .windows_wrapper{
        z-index: 1000;
        background: rgba(0,0,0,.6)
    }
    .city-list{
        margin-top: 20px
    }
    .city-content b{
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 10px;
        display: block;
        margin-top: 6px
    }
    .city-content{
        padding: 20px;
    }
    .city-content>div{
        padding: 10px
    }
    .city-hot{
        background: #fffbe7;
        border: 1px solid #ffe0c5
    }
    .city-content a{
        display: inline-block;
        padding: 5px 0;
        font-size: 14px;
        margin-right: 10px;
        color: #616161;
        transition: .3s;
    }
    .city-content a:hover{
        color: #006EFF
    }
    .city-list{
        background: #f7f7f7;
        border: 1px solid #e4e4e4
    }
</style>
