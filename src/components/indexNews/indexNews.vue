<template>
    <div class="indexNews">
        <p>
            <span>行业新闻</span>
            <router-link to="/main/news">更多>></router-link>
        </p>
        <ul>
            <li v-for="item in newsList" :key="item.id">
                
                  <span>
                    <router-link :to="'/main/newsDetails/'+item.id">
                      {{textLenght(item.title,56,true)}}
                    </router-link>
                  </span>
                  <span>{{item.created_at.split(" ")[0]}}</span>

            </li>
        </ul>
    </div>
</template>
<script>
export default {
  data() {
    return {
      newsUrl:path+'/index/index/news',
      newsList: ''
    };
  },
  created() {
    var _this = this
    this.$http.get(_this.newsUrl, { emulateJSON: true }).then(
      function(response) {
        _this.newsList = response.data
      },
      function(response) {
        //alert("请稍后再试")
      }
    )
  },
  methods: {
    textLenght:function(str, len, hasDot) {
            var newLength = 0
            var newStr = ""
            var chineseRegex = /[^\x00-\xff]/g
            var singleChar = ""
            var strLength = str.replace(chineseRegex, "**").length
            for (var i = 0; i < strLength; i++) {
                singleChar = str.charAt(i).toString()
                if (singleChar.match(chineseRegex) != null) {
                    newLength += 2
                } else {
                    newLength++
                }
                if (newLength > len) {
                    break
                }
                newStr += singleChar
            }

            if (hasDot && strLength > len) {
                newStr += "..."
            }
            return newStr
        }
  }
};
</script>
<style>
.indexNews {
  float: right;
  width: 590px;
  height: 304px;
  border: 1px solid #efefef;
}
.indexNews p {
  display: flex;
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #efefef;
  justify-content: space-between;
  align-items: center;
  background: #fcfcfc;
}
.indexNews p span {
  padding-left: 20px;
  font-size: 14px;
  font-weight: bold;
  color: #4a4a4a;
}
.indexNews a {
  padding-right: 20px;
  color: #4A4A4A;
  cursor: pointer;
    transition: .3s;
}
    .indexNews a:hover{
        color: #0585FF
    }
.indexNews ul {
  width: 530px;
  margin: auto;
  margin-top: 10px;
  list-style: none;
  counter-reset: count;
}
.indexNews ul li {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 48px;
  border-bottom: 1px dashed #e5e7ed;
}
.indexNews ul li:last-child {
  border: 0;
  
}
.indexNews ul li:before {
  content: "● ";
  color: #b3b3b3;

}
.indexNews li span:nth-child(1) {
  font-size: 14px;
  color: #565656;
  padding: 0 10px;
    cursor: pointer;
    transition: .3s;
  flex-grow: 2;
}
    .indexNews li span:nth-child(1):hover{
        color:#0585FF

    }
.indexNews li span:nth-child(2) {
  font-size: 14px;
  color: #b3b3b3;


}
</style>