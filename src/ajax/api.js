// var path = 'http://localhost/public';
var path = 'http://119.23.229.133';

export default{
	//帮助中心接口
	helpCenter:path+"/index/index/help-category",
	//帮助分类
	helpClassify:path+'/index/index/help-category',
	//帮助中心分类
	helpCenterClassify:path+'/index/cms/help?category_id=1',
	//帮助中心详情
	helpCenterDeatil:path+'/index/cms/help-info?help_id=1',
	//新闻分类
	newsClassify:path+'/index/cms/news-category',
	//新闻列表
	newsList:path+'/index/cms?category_id=333',
	//新闻详情
	newsDeatil:path+'/index/cms/news-info',
 	//http://119.23.229.133/index/cms/news-info?news_id=238
	//登录
		// [FAIL] 注册失败, 没有登录
	//注册
	register:path+'/index/login/register',
	//注册时发送验证码
	captcha:path+'/index/login/send-mobile-code',
	//公司列表
	corporationList:path+'/index/company',
	//机构类型
	organizationType:path+'/index/company/company-type',
	//公司状态配置
	corporationStateConfig:path+'/index/company/company-status'
}