<template>
  <div>
    <ul class="manage_list_common setting_list">
      <li class="upload">
        <p>头像</p>
        <p><img src="./images/uploadimg.png"></p>
        <p></p>
      </li>
      <li>
        <p>邮箱</p>
        <p>123123231123@qq.com</p>
        <p>
          <span @click="email_edit = true">绑定</span>
        </p>
      </li>
      <li>
        <p>手机</p>
        <p>183****1234</p>
        <p>
          <span @click="tel_edit = true">修改</span>
        </p>
      </li>
      <li>
        <p>密码</p>
        <p>********</p>
        <p>
          <span @click="pass_edit = true">修改</span>
        </p>
      </li>
    </ul>
    <div class="windows_wrapper" v-show="email_edit">
      <div class="windows_box">
        <div class="windows_head">
          <span>绑定邮箱</span>
          <span class="icon-close" @click="email_edit = false"></span>
        </div>
        <div class="windows_content">
          <section>
            <span class="label">邮箱</span>
            <input type="text" placeholder="请输入您要绑定的邮箱">
          </section>
        </div>
        <div class="windows_btn">
          <span class="windows_btn_cancel" @click="email_edit = false">取消</span>
          <span class="windows_btn_confirm">提交</span>
        </div>
      </div>
    </div>
    <div class="windows_wrapper" v-show="tel_edit">
      <div class="windows_box">
        <div class="windows_head">
          <span></span>
          <span class="icon-close" @click="tel_edit = false"></span>
        </div>
        <div class="windows_content">
          <section>
            <span class="label">原手机号</span>
            <input type="text" placeholder="请输入原手机号" class="shot">
            <span class="smscode_btn">发送验证码</span>
          </section>
          <section>
            <span class="label">验证码</span>
            <input type="text" placeholder="请输入原手机收到的验证码">
          </section>
          <section>
            <span class="label">新手机号</span>
            <input type="text" placeholder="请输入您要绑定的新手机号" class="shot">
            <span class="smscode_btn">发送验证码</span>
          </section>
          <section>
            <span class="label">验证码</span>
            <input type="text" placeholder="请输入新手机收到的验证码">
          </section>
        </div>
        <div class="windows_btn">
          <span class="windows_btn_cancel" @click="tel_edit = false">取消</span>
          <span class="windows_btn_confirm">提交</span>
        </div>
      </div>
    </div>
    <div class="windows_wrapper" v-show="pass_edit">
      <div class="windows_box">
        <div class="windows_head">
          <span>修改登录密码</span>
          <span class="icon-close" @click="pass_edit = false"></span>
        </div>
        <div class="windows_content">
          <section>
            <span class="label">原密码</span>
            <input type="text" placeholder="请输入原密码">
          </section>
          <section>
            <span class="label">新密码</span>
            <input type="text" placeholder="请输入新密码">
          </section>
          <section>
            <span class="label">确认新密码</span>
            <input type="text" placeholder="请再次输入新密码">
          </section>
        </div>
        <div class="windows_btn">
          <span class="windows_btn_cancel" @click="pass_edit = false">取消</span>
          <span class="windows_btn_confirm">提交</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        email_edit: false,
        tel_edit: false,
        pass_edit: false,
      }
    }
  }
</script>

<style media="screen">
 
</style>
