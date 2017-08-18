<template>
  <div class="tab_type_box">
    <div class="tab_type_head">
      <a class="active">消息中心</a>
    </div>
    <div class="padding20">
      <ul class="messageList">
        <li>
          <section>
            <p>
              <span class="messageTitle">系统消息</span>
              <span class="messageTime">2017-05-01 12:20:30</span>
            </p>
            <p class="messageInfor">信息信息信息信息信息信息信息信息信息信息</p>
          </section>
          <section>
            <span class="messageBtn messageBtnDetail">详情</span>
            <span class="messageBtn messageBtnDelet">删除</span>
          </section>
        </li>
        <li>
          <section>
            <p>
              <span class="messageTitle">系统消息</span>
              <span class="messageTime">2017-05-01 12:20:30</span>
            </p>
            <p class="messageInfor">信息信息信息信息信息信息信息信息信息信息</p>
          </section>
          <section>
            <span class="messageBtn messageBtnDetail">详情</span>
            <span class="messageBtn messageBtnDelet">删除</span>
          </section>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
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
  padding: 5px 10px;
  border-radius: 5px;
  background: #fff;
}
.messageBtnDetail{
  border: 1px solid green;
  color: green;
}
.messageBtnDelet{
  border: 1px solid #898989;
  color: #898989;
  margin-left: 20px;
}
</style>
