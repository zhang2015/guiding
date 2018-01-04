/*

========1.主页模块========

1.主页
	接口1: 轮播图 indexAdsList

	接口2: 内容页 indexContent

	接口3: 底部友情链接 friendly [OK]

	接口4: 底部网站信息 systemSetting [OK]

2.登录
	接口1: 登录 login

3.注册
	接口1: 注册 reg

4.登录-手机动态密码登录 
	接口1: 动态密码登录 smsLogin

5.服务机构列表
	接口1: 服务机构类型 serviceOrganizationType [OK]
	接口2: 服务机构列表 serviceOrganizationList [OK]

6.企业列表
	接口1: 企业类型 
	接口2: 企业列表 companyList [OK]

	接口3: 热门新闻, 热门服务机构, 热门企业 ???

	接口4: 获取省份列表

7.帮助中心
	接口1: 帮助中心分类 helpCategory [OK]
	接口2: 帮助中心列表 helpList [OK]

8.帮助中心-通用详情
	接口1: 帮助中心详情 helpDetail [OK]


========2.机构模块========
1.机构主页 
	接口1: serviceOrganizationDetail [OK]

2.成交记录
	接口: 同上

3.服务范围
	接口: 同上

4.管理团队
	接口: 同上

========3.企业主页========

1.企业主页
	接口1: companyDetail

2.企业主页-公司简介
	接口: 同上

3.企业主页-知识产权
	接口: 同上


========4.新闻中心========
1.新闻中心
	接口1: 新闻分类 newsType [OK]
	接口2: 新闻列表 newsList [OK]

2.新闻中心-新闻详情
	接口3: 新闻详情 newsDetail [OK]



========5.购物车========
1.购物车
	

2.确认订单
3.交易完成

========6.个人中心========
1.个人中心
2.我的订单
3.我的收藏
4.我的公司
5.管理公司
6.认领公司
7.填写公司
8.发票管理
9.申请开票
10.发票管理-详情
11.收件地址
12.账号设置
13.绑定邮箱
14.绑定手机

========7.服务机构管理========
1.服务机构管理
2.订单详情
3.申请服务机构
4.服务设置
5.新增编辑项目
6.公司管理
7.认证管理
8.发票管理
9.发票管理-详情
10.钱包管理-提现


*/


import Vue from 'vue'

export default {


	//===========1.主页模块============

	//1.主页
	//http://119.23.229.133/index/index/hot-company?qualification_id=1



	//2.登录
	//参数1: phone
	//参数2: password
	//
	login:function(params,callback){
		var url = path+"/index/login";
		Vue.http.post(url,params).then(function(r){
			callback(r.data);
		})
	},

	//3.注册

	//4.登录-手机动态密码登录

	//5.服务机构列表
	//参数1: area_id 区域
	//参数2: qualification_pid 服务类型
	//参数3: qualification_id 服务内容
	serviceOrganizationList:function(params,callback){
		var url = path+"/index/company";
		Vue.http.get(url,{params:params}).then(function(r){
			callback(r.data);
		})
	},

	//服务机构详情
	//参数1: company_id  [必须, 传入机构id]
	//参数2: 
	serviceOrganizationDetail:function(params,callback){
		var url = path+"/index/company/show";
		Vue.http.get(url,{params:params}).then(function(r){
			callback(r.data);
		})
	},


	//6.企业列表
	//参数1: manage_status 企业状态		[非必须]
	//参数2: register_money_type 注册资本 [非必须]
	//参数3: province_id 省份id			[非必须]
	//参数4: city_id 城市id 				[非必须]
	//参数5: property_type 是否有商标 		[非必须]
	companyList:function(params,callback){
		var url = path+"/index/enterprise";
		Vue.http.get(url,{params:params}).then(function(r){
			callback(r.data);
		})
	},

	//企业详情
	//参数1: enterprise_id		[必须]
	companyDetail:function(params,callback){
		var url = path+"/index/enterprise/show";
		Vue.http.get(url,{params:params}).then(function(r){
			callback(r.data);
		})
	},


	//省份列表
	//参数1: 无
	provinceList:function(params,callback){
		var url = path+"/index/address/child-address?address_id=1";
		Vue.http.get(url,{params:params}).then(function(r){
			callback(r.data);
		})
	},

	//城市列表
	//参数1: address_id=26
	cityList:function(params,callback){
		var url = path+"/index/address/child-address?address_id=1";
		Vue.http.get(url,{params:params}).then(function(r){
			callback(r.data);
		})
	},



	//获取帮助分类
	/*
		{"1":"帮助资讯","2":"用户协议","3":"保密协议","4":"支付方式","5":"费用问题","6":"关于我们","7":"机构入驻","8":"新闻中心","9":"联系我们","10":"找机构","11":"评估公司","12":"会计事物所","13":"知识产权所","14":"律师所"}
	*/
	helpCategory:function(params,callback){
		var url = path+"/index/index/help-category";
		Vue.http.get(url,{params:params}).then(function(r){
			callback(r.data);
		})
	},

	//帮助中心界面 - 搜索框下面
	//参数1: category_id 
	//参数2: keyword		[可不传]
	//参数3: page		[可不传,默认为1]
	//示例: 
	//category_id=1
	//
	helpList:function(params,callback){
		var url = path+"/index/cms/help";
		Vue.http.get(url,{params:params}).then(function(r){
			callback(r.data);
		})
	},

	//帮助详情
	//参数1: help_id    帮助内容的id
	//实例: help_id = 11, 是发票管理
	helpDetail:function(params,callback){
		var url = path+"/index/cms/help-info";
		Vue.http.get(url,{params:params}).then(function(r){
			callback(r.data);
		})
	},


	//友情链接
	//参数: 无
	friendly:function(params,callback){
		var url = path+"/index/index/friendly";
		Vue.http.get(url,{params:params}).then(function(r){
			callback(r.data);
		})
	},

	//系统配置
	systemSetting:function(params,callback){
		var url = path+"/index/index/sys-seting";
		Vue.http.get(url,{params:params}).then(function(r){
			callback(r.data);
		})
	}


	//===========帮助中心============



	
}