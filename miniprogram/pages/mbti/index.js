const app = getApp();
const { MBTIUtils } = require("../../utils/mbti-utils");

Page({
	data: {
		mbtiTypes: {
			INTJ: "建筑师",
			INTP: "逻辑学家",
			ENTJ: "指挥官",
			ENTP: "辩论家",
			INFJ: "提倡者",
			INFP: "调停者",
			ENFJ: "主人公",
			ENFP: "活动家",
			ISTJ: "物流师",
			ISFJ: "守卫者",
			ESTJ: "总经理",
			ESFJ: "执政官",
			ISTP: "鉴赏家",
			ISFP: "探险家",
			ESTP: "企业家",
			ESFP: "艺人",
		},
		luckyOptions: [
			"今日宜结交新朋友",
			"今日宜独处思考",
			"今日宜开始新挑战",
			"今日宜整理环境",
			"今日宜放松心情",
			"今日宜学习新技能",
			"今日宜与家人交流",
			"今日宜表达自我",
		],
		luckyResult: "",
		luckyPercentage: 0,
		luckyDegree: 0,
	},

	onLoad: function () {
		// 初始化页面
		this.generateLuckyValue();
	},

	// 生成幸运值
	generateLuckyValue: function () {
		// 检查是否已经有今天的幸运结果
		const today = new Date().toDateString();

		try {
			const lastLuckyDay = wx.getStorageSync("lastLuckyDay") || "";

			if (lastLuckyDay === today) {
				// 如果有今天的结果，直接显示
				const savedResult =
					wx.getStorageSync("lastLuckyResult") || this.getRandomLuckyResult(80); // 默认较高幸运值
				const savedPercentage =
					parseInt(wx.getStorageSync("lastLuckyPercentage")) || 80;

				// console.log("从缓存读取幸运值:", savedResult, savedPercentage);

				this.setData({
					luckyResult: savedResult,
					luckyPercentage: savedPercentage,
					luckyDegree: savedPercentage * 1.8, // 将百分比转换为角度（100% = 180度）
				});
			} else {
				// 没有今天的结果，生成新的幸运值
				// 生成0-100的随机幸运度值
				const randomPercentage = Math.floor(Math.random() * 101);

				// 根据幸运值选择结果
				const result = this.getRandomLuckyResult(randomPercentage);
				// console.log("生成新的幸运值:", result, randomPercentage);

				// 使用更高效的方式更新进度条
				const that = this;

				// 设置初始结果，这样即使动画不完成也有值显示
				this.setData({
					luckyPercentage: 0,
					luckyDegree: 0,
					luckyResult: "今日幸运指数分析中...",
				});

				// 延迟一点开始动画，确保界面已经渲染
				setTimeout(function () {
					// 使用更简单的方式直接设置最终结果
					that.setData({
						luckyPercentage: randomPercentage,
						luckyDegree: randomPercentage * 1.8, // 将百分比转换为角度（100% = 180度）
						luckyResult: result,
					});

					// 保存今日结果到本地存储
					wx.setStorageSync("lastLuckyDay", today);
					wx.setStorageSync("lastLuckyResult", result);
					wx.setStorageSync("lastLuckyPercentage", randomPercentage);
				}, 800);
			}
		} catch (e) {
			console.error("生成幸运值出错:", e);
			// 出错时使用默认值
			this.setData({
				luckyPercentage: 88,
				luckyDegree: 88 * 1.8, // 88% 对应的角度
				luckyResult: "今日宜放松心情",
			});
		}
	},

	// 根据幸运度获取相应的幸运结果
	getRandomLuckyResult: function (percentage) {
		let resultIndex = 0;
		if (percentage < 20) {
			resultIndex = 0; // 低幸运度选项
		} else if (percentage < 50) {
			resultIndex = Math.floor(Math.random() * 3) + 1; // 中低幸运度选项
		} else if (percentage < 80) {
			resultIndex = Math.floor(Math.random() * 2) + 4; // 中高幸运度选项
		} else {
			resultIndex = Math.floor(Math.random() * 2) + 6; // 高幸运度选项
		}

		return this.data.luckyOptions[resultIndex] || "今日宜放松心情";
	},

	onShow: function () {
		// 页面显示
	},

	startTest: function () {
		// 在开始新测试前，清除之前的测试结果缓存
		// console.log("开始新测试，清除旧的测试结果");
		app.globalData.mbtiResult = null;
		wx.removeStorageSync("mbtiResult");

		wx.navigateTo({
			url: "/pages/test/test",
		});
	},

	// 伴侣分析工具
	goToPartnerAnalysis: function () {
		wx.showToast({
			title: "伴侣分析功能即将上线",
			icon: "none",
			duration: 2000,
		});
	},

	// 通用分析工具
	goToGeneralAnalysis: function () {
		wx.showToast({
			title: "通用分析功能即将上线",
			icon: "none",
			duration: 2000,
		});
	},

	// 心理健康工具
	goToMentalHealth: function () {
		wx.showToast({
			title: "心理健康分析功能即将上线",
			icon: "none",
			duration: 2000,
		});
	},

	// 查看16型人格页面
	viewAllTypes: function () {
		wx.navigateTo({
			url: "/pages/mbti/types",
		});
	},

	// 跳转到缘分配对页面
	goToCompatibility: function () {
		// 如果用户已经测试过，可以将其MBTI类型传递给缘分配对页面
		const mbtiResult = wx.getStorageSync("mbtiResult");
		let url = "/pages/compatibility/compatibility";

		if (mbtiResult && mbtiResult.type) {
			url += `?myType=${mbtiResult.type}`;
		}

		wx.navigateTo({
			url: url,
		});
	},

	// 关系网功能
	showRelationship: function () {
		wx.showToast({
			title: "功能正在加速研发中",
			icon: "none",
			duration: 2000,
		});
	},

	// 心理健康功能
	showMentalHealth: function () {
		wx.showToast({
			title: "功能正在加速研发中",
			icon: "none",
			duration: 2000,
		});
	},

	// 我的报告功能
	goToReports: function () {
		wx.navigateTo({
			url: "/pages/reports/index",
		});
	},

	// 理论详情介绍
	showTheoryDetails: function () {
		wx.showModal({
			title: "MBTI与认知功能",
			content:
				"MBTI的16种类型由4个偏好组成(E/I, S/N, T/F, J/P)，而每种类型背后是卡尔·荣格的八种认知功能(Te, Ti, Fe, Fi, Se, Si, Ne, Ni)。这些认知功能决定了我们如何接收信息和做决策，是MBTI理论的核心基础。",
			confirmText: "了解了",
			showCancel: false,
		});
	},

	/**
	 * 用户点击右上角分享给朋友
	 */
	onShareAppMessage: function () {
		// console.log("从首页分享给朋友");
		return {
			title: "MBTI性格测试 - 探索你的性格类型",
			path: "/pages/mbti/index",
			imageUrl: "/images/mbti/enfj.svg", // 使用一个默认图片
		};
	},

	/**
	 * 用户点击右上角分享到朋友圈
	 */
	onShareTimeline: function () {
		// console.log("从首页分享到朋友圈");
		return {
			title: "MBTI性格测试 - 探索你的性格类型",
			query: "",
			imageUrl: "/images/mbti/enfj.svg", // 使用一个默认图片
		};
	},
});
