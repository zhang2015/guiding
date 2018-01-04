<template>
    <div class="newBodys">
        <ul>
            <li v-for="(item ,index) in data" :key="index" :class="{active:num == index}" @click="num = index">{{item.type}}</li>
        </ul>
        <router-link v-for="(item,index) in data[num].datas" :key="index" v-if="index<4" :to="item.path">
        <section class="newBodyItem" >
            
              <img :src="item.img" alt="">
              <div>
                  <p>{{textLenght(item.name,20,true)}}</p>
                  <p>
                      <span v-for="(type,index) in item.label" :key="index">{{type.name}}</span>
                  </p>
              </div>

            
        </section>
        </router-link>
    </div>
</template>
<script>
export default {
  data() {
    return {
      num: "0",
      data: [
        {
          type: "最新入驻服务商",
          datas: [
            
          ]
        },
        {
          type: "最新认领企业",
          datas: [
            
          ]
        },
        {
          type: "最近成交记录",
          datas: [
            
          ]
        }
      ]
    };
  },

  created(){

    
    this.downloadNewComingData();

    this.downloadNewClaimData();

    this.donloadNewOrderRecord();
    
  },

  methods: {
    donloadNewOrderRecord(){

      var url = path + "/index/index"
      this.$http.get(url).then(function(r){
        var td = r.data;

        var list = td.order;
        for(var i=0;i<list.length; i++){
          var item = list[i];
          item.img = path+item.user.img;
          item.name = item.user.name
          item.label = [{name:item.servar_area},{name:item.price+"元"}];
  

          item.path = "/"

        }

        this.data[2].datas = list;
      })


    },
    downloadNewComingData:function(){

      var url = path + "/index/index/new-company"
      this.$http.get(url).then(function(r){
        var td = r.data;


        var list = td;

        //最多显示4个
        list = list.splice(0,4);

        for(var i=0;i<list.length; i++){
          var item = list[i];
          item.img = path+item.cover_img;
          //item.name = item.name
          item.label = item.companytype;

          item.path = "/organizationDetails/"+item.id

        }



        this.data[0].datas = list;
      })

    },

    //下载最新认领企业
    downloadNewClaimData:function(){

      var url = path + "/index/index/new-claim-enterprise"
      this.$http.get(url).then(function(r){
        var td = r.data;

        var list = td;
        for(var i=0;i<list.length; i++){
          var item = list[i];
          item.img = path+item.enterprise.img;
          item.name = item.enterprise.title
          item.label = [];

          item.path = "/firmDetails/"+item.enterprise_id

        }

        this.data[1].datas = list;
      })

    },
    textLenght: function(str, len, hasDot) {
      var newLength = 0;
      var newStr = "";
      var chineseRegex = /[^\x00-\xff]/g;
      var singleChar = "";
      var strLength = str.replace(chineseRegex, "**").length;
      for (var i = 0; i < strLength; i++) {
        singleChar = str.charAt(i).toString();
        if (singleChar.match(chineseRegex) != null) {
          newLength += 2;
        } else {
          newLength++;
        }
        if (newLength > len) {
          break;
        }
        newStr += singleChar;
      }

      if (hasDot && strLength > len) {
        newStr += "...";
      }
      return newStr;
    }
  }
};
</script>
<style>
.newBodys {
  float: left;
  width: 590px;
  height: 304px;
  border: 1px solid #efefef;
  border-top: 0;
}
.newBodys ul {
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: center;
  align-items: center;
}
.newBodys ul li {
  display: flex;
  flex-grow: 1;
  height: 40px;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  background: #fcfcfc;
  border: 1px solid #efefef;
  border-left: 0;
  color: #4a4a4a;
    cursor: pointer;
    transition: .3s;
}
    .newBodys ul li:after{
        content: "";
        position: absolute;
        left: -1px;
        right: -1px;
        top: -2px;
        height: 0px;
        background: #337ffb;
/*        transition: .3s*/
    }
    .newBodys ul li:hover{
        color: #0585FF
    }
.newBodys ul li:nth-child(3) {
  border-right: 0;
}
.newBodys ul li.active {
/*  height: 38px;*/
/*  border-top: 3px solid #337ffb;*/
  border-bottom-color: #fff;
  color: #337ffb;
  background: #ffffff;
    transition: inherit;
    position: relative;
}
    .newBodys ul li.active:after{
        height: 3px;
    }
.newBodyItem {
  float: left;
  display: flex;
  width: 270px;
  height: 100px;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid #efefef;
  margin-left: 20px;
  margin-top: 20px;
    transition: .3s;
    position: relative;
    top: 0
}
    .newBodyItem:hover{
        top: -2px;
        box-shadow: 0 3px 3px rgba(0,0,0,.06)
    }
.newBodyItem:nth-child(2n + 1) {
  margin-left: 10px;
}
.newBodyItem img {
  width: 70px;
  height: 70px;
  margin: 15px;
  border-radius: 100%;
}
.newBodyItem p:nth-child(1) {
  font-size: 14px;
  color: #0b0b0b;
  line-height: 30px;
}
.newBodyItem p:nth-child(2) span {
  padding: 0 5px;
  line-height: 24px;
  font-size: 12px;
  color: #ccc;
  border: 1px solid #e1e1e1;
  margin-right: 5px;
}
</style>
