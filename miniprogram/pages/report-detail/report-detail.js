// 获取应用实例
const app = getApp();
const { mbtiColorSchemes } = require("../../utils/mbti-utils");
const { mbtiReportData } = require("../../utils/mbti-report-data");

Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		activeTab: "overview",
		mbtiResult: null,
		typeFullName: "",
		typePercentage: "8.5",
		typeColors: {
			primary: "#a050e2",
			secondary: "#f3eafe",
			text: "#333333",
			progress: "#a050e2",
		},
		functionScores: {},
		showAllFunctions: false, // 是否显示全部认知功能
		tabLineLeft: 0, // 标签线的位置

		// 概览数据
		typeHighlight: "",
		typeDescription: "",
		typeTraits: [],
		typeStrengths: [],
		typeWeaknesses: [],

		// 认知功能数据
		cognitiveFunctions: [],
		cognitiveAnalysis: "",

		// 职业数据
		careerOverview: "",
		recommendedCareers: [],
		idealWorkEnvironment: [],
		stressfulWorkEnvironment: [],

		// 人际关系数据
		relationshipStyle: "",
		bestMatches: [],
		goodMatches: [],
		challengingMatches: [],
		communicationTips: [],
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		// 显示分享菜单按钮
		wx.showShareMenu({
			withShareTicket: true,
			menus: ["shareAppMessage", "shareTimeline"],
		});

		// console.log("深度报告页面加载");

		// 尝试从页面参数获取类型 - 这是优先级最高的来源
		let mbtiType = options.type || "";
		// console.log("URL参数中的MBTI类型:", mbtiType);

		// 根据不同情况准备mbtiResult对象
		let mbtiResult;

		// 1. 如果URL参数有类型，使用该类型创建结果对象（优先）
		if (mbtiType) {
			// console.log("使用URL参数创建结果对象:", mbtiType);
			mbtiResult = {
				type: mbtiType,
				scores: {},
				functionScores: {},
			};
		}
		// 2. 如果URL没有类型参数，则尝试使用全局数据
		else if (app.globalData.mbtiResult && app.globalData.mbtiResult.type) {
			mbtiResult = app.globalData.mbtiResult;
			// console.log("从全局数据获取的MBTI类型:", mbtiResult.type);
		}
		// 3. 如果前两种都没有，则尝试从存储获取
		else {
			mbtiResult = wx.getStorageSync("mbtiResult") || {};
			// console.log("从本地存储获取的MBTI类型:", mbtiResult.type || "未找到");
		}

		if (!mbtiResult || !mbtiResult.type) {
			console.error("未找到有效的MBTI结果");
			wx.showToast({
				title: "未找到测试结果",
				icon: "none",
			});

			// 如果没有测试结果，3秒后返回上一页
			setTimeout(() => {
				wx.navigateBack();
			}, 3000);
			return;
		}

		// console.log("最终使用的MBTI类型:", mbtiResult.type);

		// 设置类型颜色
		const typeColors =
			mbtiColorSchemes[mbtiResult.type] || this.data.typeColors;

		// 添加RGB格式颜色
		if (typeColors.primary) {
			typeColors.primaryRgb = this.hexToRgb(typeColors.primary);
		}

		// 获取对应的MBTI类型报告数据
		const typeData = mbtiReportData[mbtiResult.type] || {};
		// console.log(
		// 	"获取到的报告数据类型:",
		// 	mbtiResult.type,
		// 	"数据是否存在:",
		// 	!!typeData
		// );

		// 获取MBTI全名
		const typeFullName = this.getMbtiFullName(mbtiResult.type);

		// 获取各项认知功能分数
		const functionScores = mbtiResult.functionScores || {};

		// 计算认知功能堆栈
		const cognitiveFunctions = this.getCognitiveFunctionStack(mbtiResult.type);

		// 根据类型获取默认的匹配度数据
		const compatibilityData = this.getCompatibilityData(mbtiResult.type);

		this.setData({
			mbtiResult,
			typeFullName,
			typeColors,
			functionScores,

			// 使用新的报告数据
			typeHighlight: typeData.highlight || "暂无数据",
			typeDescription: typeData.description || "暂无详细描述信息。",
			typeTraits: typeData.traits || [],
			typeStrengths: typeData.strengths || ["暂无数据"],
			typeWeaknesses: typeData.weaknesses || ["暂无数据"],
			cognitiveAnalysis: typeData.cognitiveAnalysis || "暂无认知功能分析数据。",
			careerOverview: typeData.careerOverview || "暂无职业倾向数据。",
			recommendedCareers: typeData.recommendedCareers || [
				{
					category: "暂无数据",
					jobs: ["请完成测试获取推荐"],
				},
			],
			idealWorkEnvironment: typeData.idealWorkEnvironment || ["暂无数据"],
			stressfulWorkEnvironment: typeData.stressfulWorkEnvironment || [
				"暂无数据",
			],
			relationshipStyle: typeData.relationshipStyle || "暂无人际关系风格数据。",
			communicationTips: typeData.communicationTips || ["暂无数据"],

			cognitiveFunctions,
			bestMatches: compatibilityData.best,
			goodMatches: compatibilityData.good,
			challengingMatches: compatibilityData.challenging,
		});
	},

	/**
	 * 切换标签页
	 */
	switchTab: function (e) {
		const tab = e.currentTarget.dataset.tab;
		this.setData({
			activeTab: tab,
		});

		// 切换后计算并更新标签线位置
		this.updateTabLinePosition(tab);
	},

	/**
	 * 计算并更新标签线的位置
	 */
	updateTabLinePosition: function (activeTab) {
		// 获取tab的序号
		const tabIndex =
			{
				overview: 0,
				cognitive: 1,
				career: 2,
				relations: 3,
			}[activeTab] || 0;

		// 获取屏幕宽度
		try {
			// 使用新的API代替已废弃的wx.getSystemInfoSync
			const windowInfo = wx.getWindowInfo();
			const screenWidth = windowInfo.windowWidth;

			// 计算每个tab的宽度和标签线应该居中的位置
			const tabWidth = screenWidth / 4; // 4个标签均分宽度
			const tabLineLeft =
				tabWidth * tabIndex + (tabWidth - (60 / 750) * screenWidth) / 2; // 计算标签线居中位置

			this.setData({
				tabLineLeft,
			});
		} catch (e) {
			console.error("获取窗口信息失败", e);
			// 发生错误时使用默认宽度
			const screenWidth = 375; // 默认屏幕宽度
			const tabWidth = screenWidth / 4;
			const tabLineLeft =
				tabWidth * tabIndex + (tabWidth - (60 / 750) * screenWidth) / 2;

			this.setData({
				tabLineLeft,
			});
		}
	},

	/**
	 * 切换显示全部认知功能
	 */
	toggleShowAllFunctions: function () {
		this.setData({
			showAllFunctions: !this.data.showAllFunctions,
		});
	},

	/**
	 * 分享报告
	 */
	shareReport: function () {
		// 显示分享选项
		wx.showActionSheet({
			itemList: ["分享给微信好友", "分享到朋友圈"],
			success: (res) => {
				if (res.tapIndex === 0) {
					// 分享给好友
					wx.showToast({
						title: '请点击右上角的"..."按钮，选择"分享"',
						icon: "none",
						duration: 2000,
					});
				} else if (res.tapIndex === 1) {
					// 分享到朋友圈
					wx.showToast({
						title: '请点击右上角"..."，选择"分享到朋友圈"',
						icon: "none",
						duration: 2000,
					});
				}
			},
		});
	},

	/**
	 * 获取MBTI类型全名
	 */
	getMbtiFullName: function (type) {
		const typeNames = {
			INTJ: "建筑师",
			INTP: "逻辑学家",
			ENTJ: "指挥官",
			ENTP: "辩论家",
			INFJ: "提倡者",
			INFP: "调停者",
			ENFJ: "主人公",
			ENFP: "竞选者",
			ISTJ: "物流师",
			ISFJ: "守卫者",
			ESTJ: "总经理",
			ESFJ: "执政官",
			ISTP: "鉴赏家",
			ISFP: "探险家",
			ESTP: "企业家",
			ESFP: "表演者",
		};

		return typeNames[type] || "未知类型";
	},

	/**
	 * 获取认知功能堆栈
	 */
	getCognitiveFunctionStack: function (type) {
		if (!type || type.length !== 4) return [];

		// 所有8个认知功能的完整堆栈
		let functions = [];
		const positionTitles = [
			"主导功能",
			"辅助功能",
			"第三功能",
			"劣势功能",
			"对立功能",
			"批判功能",
			"欺骗功能",
			"恶魔功能",
		];

		// 认知功能描述
		const functionDescriptions = {
			Te: "外倾思维，关注逻辑系统和效率",
			Ti: "内倾思维，关注内在逻辑和分析",
			Fe: "外倾情感，关注他人情感和社会和谐",
			Fi: "内倾情感，关注个人价值观和真实性",
			Ne: "外倾直觉，关注可能性和新想法",
			Ni: "内倾直觉，关注洞察力和未来展望",
			Se: "外倾感觉，关注当下体验和实际行动",
			Si: "内倾感觉，关注细节和过往经验",
		};

		// 根据MBTI类型确定函数堆栈顺序
		let primaryFunctions = [];
		switch (type) {
			case "ESTP":
				primaryFunctions = ["Se", "Ti", "Fe", "Ni"];
				break;
			case "ESFP":
				primaryFunctions = ["Se", "Fi", "Te", "Ni"];
				break;
			case "ISTP":
				primaryFunctions = ["Ti", "Se", "Ni", "Fe"];
				break;
			case "ISFP":
				primaryFunctions = ["Fi", "Se", "Ni", "Te"];
				break;
			case "ESTJ":
				primaryFunctions = ["Te", "Si", "Ne", "Fi"];
				break;
			case "ESFJ":
				primaryFunctions = ["Fe", "Si", "Ne", "Ti"];
				break;
			case "ISTJ":
				primaryFunctions = ["Si", "Te", "Fi", "Ne"];
				break;
			case "ISFJ":
				primaryFunctions = ["Si", "Fe", "Ti", "Ne"];
				break;
			case "ENTP":
				primaryFunctions = ["Ne", "Ti", "Fe", "Si"];
				break;
			case "ENFP":
				primaryFunctions = ["Ne", "Fi", "Te", "Si"];
				break;
			case "INTP":
				primaryFunctions = ["Ti", "Ne", "Si", "Fe"];
				break;
			case "INFP":
				primaryFunctions = ["Fi", "Ne", "Si", "Te"];
				break;
			case "ENTJ":
				primaryFunctions = ["Te", "Ni", "Se", "Fi"];
				break;
			case "ENFJ":
				primaryFunctions = ["Fe", "Ni", "Se", "Ti"];
				break;
			case "INTJ":
				primaryFunctions = ["Ni", "Te", "Fi", "Se"];
				break;
			case "INFJ":
				primaryFunctions = ["Ni", "Fe", "Ti", "Se"];
				break;
			default:
				primaryFunctions = ["Ni", "Te", "Fi", "Se"];
		}

		// 生成阴影功能（第5-8功能）
		const shadowFunctions = this.getShadowFunctions(primaryFunctions);
		const allFunctions = [...primaryFunctions, ...shadowFunctions];

		// 构建完整的认知功能堆栈对象
		for (let i = 0; i < allFunctions.length; i++) {
			functions.push({
				position: `第${i + 1}功能`,
				title: positionTitles[i] || `功能${i + 1}`,
				function: allFunctions[i],
				description: functionDescriptions[allFunctions[i]] || "暂无描述",
			});
		}

		return functions;
	},

	/**
	 * 根据主要功能获取阴影功能
	 */
	getShadowFunctions: function (primaryFunctions) {
		if (!primaryFunctions || primaryFunctions.length !== 4) {
			return ["Ti", "Ne", "Si", "Fe"]; // 默认值
		}

		// 认知功能对应关系
		const opposites = {
			Te: "Ti",
			Ti: "Te",
			Fe: "Fi",
			Fi: "Fe",
			Ne: "Ni",
			Ni: "Ne",
			Se: "Si",
			Si: "Se",
		};

		// 生成阴影功能
		return primaryFunctions.map((func) => opposites[func] || func);
	},

	/**
	 * 获取类型匹配度数据
	 */
	getCompatibilityData: function (type) {
		// 这里只是示例数据，实际应用中应根据MBTI理论设置正确的匹配关系
		const compatibilityMap = {
			INTJ: {
				best: ["ENFP", "ENTP"],
				good: ["INFJ", "INFP", "ENTJ", "INTJ"],
				challenging: ["ESFJ", "ISFJ", "ESTJ", "ISTJ"],
			},
			INTP: {
				best: ["ENTJ", "ENFJ"],
				good: ["INTJ", "INFJ", "ENTP", "INTP"],
				challenging: ["ESFP", "ISFP", "ESTP", "ISTP"],
			},
			ENTJ: {
				best: ["INTP", "INFP"],
				good: ["ENTJ", "INTJ", "ENFJ", "INFJ"],
				challenging: ["ESFP", "ISFP", "ESTP", "ISTP"],
			},
			ENTP: {
				best: ["INTJ", "INFJ"],
				good: ["ENTP", "INTP", "ENFP", "INFP"],
				challenging: ["ESFJ", "ISFJ", "ESTJ", "ISTJ"],
			},
			INFJ: {
				best: ["ENTP", "ENFP"],
				good: ["INFJ", "INTJ", "ENFJ", "ENTJ"],
				challenging: ["ESTP", "ISTP", "ESFP", "ISFP"],
			},
			INFP: {
				best: ["ENTJ", "ENFJ"],
				good: ["INFP", "ENFP", "INTJ", "INTP"],
				challenging: ["ESTJ", "ISTJ", "ESFJ", "ISFJ"],
			},
			ENFJ: {
				best: ["INTP", "INFP"],
				good: ["ENFJ", "INFJ", "ENTJ", "INTJ"],
				challenging: ["ESTP", "ISTP", "ESFP", "ISFP"],
			},
			ENFP: {
				best: ["INTJ", "INFJ"],
				good: ["ENFP", "INFP", "ENTP", "INTP"],
				challenging: ["ESTJ", "ISTJ", "ESFJ", "ISFJ"],
			},
			ISTJ: {
				best: ["ESFP", "ESTP"],
				good: ["ISTJ", "ESTJ", "ISFJ", "ESFJ"],
				challenging: ["ENFP", "INFP", "ENTP", "INTP"],
			},
			ISFJ: {
				best: ["ESFP", "ESTP"],
				good: ["ISFJ", "ESFJ", "ISTJ", "ESTJ"],
				challenging: ["ENTP", "INTP", "ENFP", "INFP"],
			},
			ESTJ: {
				best: ["ISFP", "ISTP"],
				good: ["ESTJ", "ISTJ", "ESFJ", "ISFJ"],
				challenging: ["ENFP", "INFP", "ENTP", "INTP"],
			},
			ESFJ: {
				best: ["ISFP", "ISTP"],
				good: ["ESFJ", "ISFJ", "ESTJ", "ISTJ"],
				challenging: ["ENTP", "INTP", "ENFP", "INFP"],
			},
			ISTP: {
				best: ["ESFJ", "ENFJ"],
				good: ["ISTP", "ESTP", "ISFP", "ESFP"],
				challenging: ["INTJ", "ENTJ", "INFJ", "ENFJ"],
			},
			ISFP: {
				best: ["ESTJ", "ENTJ"],
				good: ["ISFP", "ESFP", "ISTP", "ESTP"],
				challenging: ["INTJ", "ENTJ", "INFJ", "ENFJ"],
			},
			ESTP: {
				best: ["ISFJ", "ISTJ"],
				good: ["ESTP", "ISTP", "ESFP", "ISFP"],
				challenging: ["INFJ", "ENFJ", "INTJ", "ENTJ"],
			},
			ESFP: {
				best: ["ISFJ", "ISTJ"],
				good: ["ESFP", "ISFP", "ESTP", "ISTP"],
				challenging: ["INFJ", "ENFJ", "INTJ", "ENTJ"],
			},
		};

		return (
			compatibilityMap[type] || {
				best: [],
				good: [],
				challenging: [],
			}
		);
	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {
		return {
			title: `我的MBTI人格类型是${this.data.mbtiResult.type}(${this.data.typeFullName})`,
			path: "/pages/index/index",
			imageUrl: `/images/mbti/${this.data.mbtiResult.type.toLowerCase()}.svg`,
		};
	},

	/**
	 * 用户点击右上角分享到朋友圈
	 */
	onShareTimeline: function () {
		// console.log("尝试从报告详情页分享到朋友圈...");
		// 确保有MBTI结果
		const mbtiType = this.data.mbtiResult ? this.data.mbtiResult.type : "未知";
		const typeFullName = this.data.typeFullName || "";

		// 构建分享信息
		const shareInfo = {
			title: `我的MBTI人格类型是${mbtiType}(${typeFullName})，来测测你的吧！`,
			imageUrl: `/images/mbti/${mbtiType.toLowerCase()}.svg`,
		};

		// console.log("报告详情页分享到朋友圈信息:", shareInfo);
		return shareInfo;
	},

	/**
	 * 将十六进制颜色转换为RGB格式
	 */
	hexToRgb: function (hex) {
		// 去除#号
		hex = hex.replace("#", "");

		// 转换为RGB
		const r = parseInt(hex.substring(0, 2), 16);
		const g = parseInt(hex.substring(2, 4), 16);
		const b = parseInt(hex.substring(4, 6), 16);

		return `${r}, ${g}, ${b}`;
	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {
		// 初始化标签线位置
		this.updateTabLinePosition(this.data.activeTab);
	},
});
