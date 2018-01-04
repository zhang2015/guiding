<template>
  <div class="vfooter">
    <div class="footer_main">
      <section>
        <span class="footer_label footer_label_1">联系方式</span>
        <a>咨询热线：{{contact.mobile}}</a>
        <a>官方QQ：{{contact.qq}}</a>
        <a>微信公众号：{{contact.wx_code}}</a>
        <a>地址：{{contact.address}}</a>
      </section>
      <section>
        <span class="footer_label footer_label_2">找机构</span>
        <a href='#/main/company/organization?type=1'>评估公司</a>
        <a href='#/main/company/organization?type=2'>会计事务所</a>
        <a href='#/main/company/organization?type=3'>知识产权所</a>
        <a href='#/main/company/organization?type=4'>律师所</a>
      </section>
      <section>
        <span class="footer_label footer_label_2">关于我们</span>
        <a href='#/main/help/helpAbout'>机构入驻</a>
        <a href='#/main/news'>新闻中心</a>
        <a href='#/main/help/helpCall'>联系我们</a>
      </section>
      <section>
        <span class="footer_label footer_label_2">帮助中心</span>
        <a href='#/main/help/helpUser'>用户协议</a>
        <a href='#/main/help/helpSecrecy'>保密协议</a>
        <a href='#/main/help/helpPay'>支付方式</a>
        <a href='#/main/help/helpCost'>费用问题</a>
      </section>
      <section>
        <img src="./images/weixin.png" alt="">
        <span>关注官方公众号</span>
      </section>
    </div>
    <div class="friend_link">
      <span>友情链接 :</span>
      <a v-for="item in links" :key="item.id" :href="'http://' + item.url" target="_blank">
        {{item.title}}
      </a>
    </div>
    <p class="archival">{{contact.company_set}}</p>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      apiUrl: path + '/index/index/friendly',
      contactUrl: path + '/index/index/sys-seting',
      links: [],
      contact: ''
    }
  },
  mounted: function() {
    this.getLinks()
    this.getContact()
  },
  methods: {
    getLinks: function() {
      this.$http.get(this.apiUrl).then((response) => {
        this.links = response.data
      }).catch(function(response) {
        console.log(response)
      })
    },
    getContact: function() {
      this.$http.get(this.contactUrl).then((response) => {
        this.contact = response.data
      }).catch(function(response) {
        console.log(response)
      })
    }
  }
}
</script>

<style media="screen">
.vfooter {
  width: 100%;
  min-width: 1210px;
  border-top: 1px solid #e5e7ed;
  background: #f5f5f5;
}

.footer_main {
  display: flex;
  width: 1210px;
  margin: auto;
  padding: 50px 0 40px 0;
  justify-content: space-around;
  align-items: flex-start;
}

.footer_main section:nth-child(1) {
  width: 396px;
}

.footer_main section:nth-child(2),
.footer_main section:nth-child(3),
.footer_main section:nth-child(4) {
  flex-grow: 1;
}

.footer_main section:last-child {
  width: 118px;
}

.footer_main section:last-child img {
  width: 118px;
  height: 118px;
}

.footer_main section:last-child span {
  display: block;
  line-height: 30px;
  color: #616161;
  font-size: 14px;
  text-align: center;
}

.footer_label {
  display: block;
  color: #616161;
  font-size: 18px;
  padding-bottom: 12px;
}

.footer_label_1 {
  font-weight: 600;
}

.footer_main section a {
  display: block;
  line-height: 30px;
  font-size: 14px;
  color: #898989;
    transition: .3s;
    cursor: pointer
}
    .footer_main section a:hover{
        color: #0079FF
    }
.friend_link {
  display: flex;
  width: 1210px;
  height: 45px;
  justify-content: flex-start;
  align-items: center;
  margin: auto;
  border-top: 1px solid #e5e7ed;
}

.friend_link span {
  font-size: 13px;
  color: #6b6b6b;
}

.friend_link a {
  font-size: 13px;
  color: #989898;
  padding: 0 10px;
    cursor: pointer;
    transition: .3s;
}
    .friend_link a:hover{
        color: #0079FF
    }
.archival {
  width: 100%;
  height: 40px;
  line-height: 40px;
  color: #9398a1;
  background: #4c4f54;
  text-align: center;
}
</style>
