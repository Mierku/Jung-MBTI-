App({
	onLaunch: function () {
		// 初始化云开发环境
		if (wx.cloud) {
			wx.cloud.init({
				env: wx.cloud.DYNAMIC_CURRENT_ENV, // 使用默认环境
				traceUser: true,
			});
		}
	},
	globalData: {
		userInfo: null,
		testAnswers: [],
		mbtiResult: null,
	},
});
