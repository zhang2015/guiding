<template>
  <div class="tab_type_box">
    <div class="tab_type_head">
      <a class="active">消息中心</a>
    </div>
    <div class="padding20">
      <ul class="messageList">
        <li v-for="item in messageList" :key="item.id">
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
      </ul>
      <moPaging 
            :page-index="currentPage" 
            :page-size="pageSize" 
            :total="count" 
            @change="pageChange">
            </moPaging>
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
                    <div>{{defaultinfo.message_type_string}}</div>
                </section>
                <section>
                    <span class="label">时间：</span> 
                    <div>{{defaultinfo.created_at}}</div>
                </section>
                <section>
                    <span class="label">内容：</span> 
                    <div class="windows-cont">{{defaultinfo.content}}</div>
                </section>
            </div> 
            <div class="windows_btn">
                <span class="windows_btn_cancel windows_btn_del" @click="dealDelMessage(defaultinfo.id)">删除</span> 
                <span class="windows_btn_confirm" @click="message_info = false">关闭</span>
            </div>
        </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import moPaging from "../MoPaging/MoPaging"

  export default {
    components:{
      moPaging
    },
    data(){
      return {
        messageList:[],
        message_info:false,
        pageSize: 15, //每页显示20条数据
        currentPage: 1, //当前页码
        count: 0, //总记录数
        defaultinfo:{
          created_at:'',
          message_type_string:'',
          content:'',
          id:''
        }
      }
    },
    created(){
      loginStatus(this);
      this.getList();
    },
    methods:{
      //获取数据
      getList() {
        var url = path + "/index/user/message"
        var dict = {
          user_id : this.userId,
          page: this.currentPage
        }
        this.$http.get(url,{params:dict}).then(function(r){
          var td = r.data;
          var list = td.data;
          this.count = td.total;
          this.messageList = list;
        })
      },
      //从page组件传递过来的当前page
      pageChange(page) {
        this.currentPage = page;
        this.getList();
      },
      dealDelMessage:function(id){
        var url = path + "/index/user/del-message?message_id="+id;
        this.$http.get(url).then(function(r){
          var td = r.data;
          if(td.state == 1){
            alert("删除成功");
            this.message_info = false;
            this.getList();
          }else{
            alert("删除失败!");
          }
        })
      },
      dealShowMessage:function(item){
        this.message_info = true;
        this.defaultinfo.created_at = item.created_at;
        this.defaultinfo.message_type_string = item.message_type_string;
        this.defaultinfo.content = item.content;
        this.defaultinfo.id = item.id;
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
