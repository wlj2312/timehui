import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		baseURL: 'https://admin.yuanzai1999.com', //请求地址配置https://admin.yuanzai1999.com
		// baseURL: 'https://xipintest.liuniu946.com', //请求地址配置http://mmz.liuniu946.com
		// baseURL: 'http://yrh.liuniu946.com', //请求地址配置
		urlFile: '/index', //项目部署所在文件夹
		hasLogin: false, //是否登录
		userInfo: {}, //登录信息
		loginInterceptor: false, //是否打开强制登录
		orderInfo: {}, //订单信息
		token: '',
		homeActive: false,
		// #ifdef H5 
		setWeiChatInfo:'',
		weichatInfo: {}, //保存微信注册信息
		weichatObj: '', //微信对象
		weichatBrowser: '' ,//当前是否为微信内置浏览器
		// #endif
		// shareData:'',//分享信息
	},
	mutations: {
		// 登录
		login(state) {
			state.hasLogin = true;
		},
		// 退出登录
		logout(state) {
			state.hasLogin = false;
			state.userInfo = {};
			uni.removeStorage({
				key: 'userInfo'
			})
		},
		// 保存用户信息
		setUserInfo(state, provider) {
			state.userInfo = provider;
			uni.setStorage({ //缓存用户登陆状态
				key: 'userInfo',
				data: provider
			})
		},
		// #ifdef H5
		//保存微信信息
		setWeiChatInfo(state, provider) {
			state.weichatInfo = provider;
		},
		//保存微信对象
		setWeiChatObj(state, provider) {
			state.weichatObj = provider;
		},
		// #endif
		OPEN_HOME(state) {
			state.homeActive = true;
		},
		CLOSE_HOME(state) {
			state.homeActive = false;
		},
	},
	actions: {

	}
})

export default store