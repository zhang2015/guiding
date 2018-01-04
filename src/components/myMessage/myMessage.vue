<template>
  <div class="tab_type_box">
    <div class="tab_type_head">
      <a class="active">消息中心</a>
    </div>
    <div class="padding20">
      <ul class="messageList">
        <li v-for="item in messageList">
          <section>
            <p>
              <span class="messageTitle">{{item.message_type_string}}</span>
              <span class="messageTime">{{item.created_at}}</span>
            </p>
            <p class="messageInfor">{{item.content}}</p>
          </section>
          <section>
            <span class="messageBtn messageBtnDetail" @click="dealShowMessage(item)">详情</span>
            <span class="messageBtn messageBtnDelet" @click="dealDelMessage(item.id)">删除</span>
          </section>
        </li>
        <!-- <li>
          <section>
            <p>
              <span class="messageTitle">系统消息</span>
              <span class="messageTime">2017-05-01 12:20:30</span>
            </p>
            <p class="messageInfor">信息信息信息信息信息信息信息信息信息信息</p>
          </section>
          <section>
            <span class="messageBtn messageBtnDetail" @click="message_info = true">详情</span>
            <span class="messageBtn messageBtnDelet">删除</span>
          </section>
        </li> -->
      </ul>
      <ZHPagination />
    </div>
    <div class="windows_wrapper" v-show="message_info">
        <div class="windows_box">
            <div class="windows_head">
                <span>消息详情</span> 
                <span class="icon-close" @click="message_info = false"></span>
            </div> 
            <div class="windows_content">
                <section>
                    <span class="label">消息类型：</span> 
                    <div>系统消息</div>
                </section>
                <section>
                    <span class="label">时间：</span> 
                    <div>2017-12-29 15:20:10</div>
                </section>
                <section>
                    <span class="label">内容：</span> 
                    <div class="windows-cont">据外媒报道，欧洲多国前日遭受猛烈暴风雪吹袭，英国出现4年来最大降雪，第二大城市伯明翰的机场及伦敦卢顿机场，近日上午一度关闭以便清理跑道积雪，导致航空交通大混乱，有滞留旅客形容卢顿机场“恍如战场”。据报道，英国最大机场希思罗机场服务严重受阻，英国航空公司10日共取消140班短途和26班长途航班，11日再取消79班，两日来共有6.5万旅客受影响。</div>
                </section>
            </div> 
            <div class="windows_btn">
                <span class="windows_btn_cancel windows_btn_del">删除</span> 
                <span class="windows_btn_confirm" @click="message_info = false">关闭</span>
            </div>
        </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  import ZHPagination from '../ZHPagination/ZHPagination'

  export default {
    components:{
      ZHPagination
    },
    data(){
      return {
        messageList:[],
        message_info:false
      }
    },
    created(){
      loginStatus(this);

      this.downloadList();
    },
    methods:{
      downloadList:function(){
        var url = path + "/index/user/message?user_id="+this.userId;
        this.$http.get(url).then(function(r){
          var td = r.data;
          this.messageList = td.data;
        })
      },
      dealDelMessage:function(id){
        var url = path + "/index/user/del-message?message_id="+id;
        this.$http.get(url).then(function(r){
          var td = r.data;
          //console.log("td="+JSON.stringify(td))
          if(td.state == 1){
            alert("删除成功");

            this.downloadList();

          }else{
            alert("删除失败!");
          }
        })
      },

      dealShowMessage:function(item){
        this.message_info = true
        //alert("时间:"+item.created_at+" 类型:"+item.message_type_string+" 内容:"+item.content);
      }
    }

  }
</script>

<style media="screen">
.messageList li{
  display: flex;
  width: 880px;
  height: 90px;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border: 1px solid #eef0f6;
  background: #f9fafc;
}
.messageList li section:nth-child(1){
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.messageList li section:nth-child(2){
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.messageTitle{
  font-size: 14px;
  font-weight: bold;
  color: #616161;
}
.messageTime{
  font-size: 13px;
  color: #b3b3b3;
}
.messageInfor{
  font-size: 14px;
  color: #898989;
  line-height: 30px;
}
.messageBtn{
  padding: 5px 20px;
  border-radius: 3px;
  background: #fff;
    cursor: pointer;
    transition: .3s
}
.messageBtnDetail{
  border: 1px solid #72CE6F;
  color: #72CE6F;
}
    .messageBtnDetail:hover{
        background: #72CE6F;
        color: #fff
    }
.messageBtnDelet{
  border: 1px solid #E5E7EE;
  color: #898989;
  margin-left: 20px;
    transition: .3s;
}
    .messageBtnDelet:hover{
        color: #FF826B
    }
    .windows-cont{
        width: 550px
    }
    .windows_content>*{
        height: auto!important;
        padding: 6px 0;
        align-items:baseline!important;
        line-height: 20px
    }
    .windows_btn{
        height: auto;
        padding-bottom: 30px
    }
    .windows_btn_del{
        color: #FF826B
    }
</style>
