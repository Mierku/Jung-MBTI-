const app = getApp();

Page({
	data: {
		// 分析家族（紫色背景）
		analysts: [
			{
				type: "INTJ",
				name: "建筑师",
				description: "富有想象力、战略性强的思想家，一切皆有可能。",
				image: "/images/mbti/intj.svg",
			},
			{
				type: "INTP",
				name: "逻辑学家",
				description: "具有创造力的发明家，对知识有着不可磨灭的渴望。",
				image: "/images/mbti/intp.svg",
			},
			{
				type: "ENTJ",
				name: "指挥官",
				description:
					"大胆、富有想象力和意志强大的领导者，总能找到方法或创造方法。",
				image: "/images/mbti/entj.svg",
			},
			{
				type: "ENTP",
				name: "辩论家",
				description: "聪明好奇的思想者，不会放过任何智力上的挑战。",
				image: "/images/mbti/entp.svg",
			},
		],

		// 外交家族（绿色背景）
		diplomats: [
			{
				type: "INFJ",
				name: "提倡者",
				description: "安静而神秘，同时富有激励性和坚持不懈的理想主义者。",
				image: "/images/mbti/infj.svg",
			},
			{
				type: "INFP",
				name: "调停者",
				description:
					"诗意、善良、利他的人，总是热切寻找善的迹象，哪怕是在最邪恶的人身上。",
				image: "/images/mbti/infp.svg",
			},
			{
				type: "ENFJ",
				name: "主人公",
				description: "富有魅力和激励性的领导者，能够让听众着迷。",
				image: "/images/mbti/enfj.svg",
			},
			{
				type: "ENFP",
				name: "活动家",
				description: "热情、有创造力、社交能力强的自由精神，总能找到理由微笑。",
				image: "/images/mbti/enfp.svg",
			},
		],

		// 哨兵族（蓝色背景）
		sentinels: [
			{
				type: "ISTJ",
				name: "物流师",
				description: "实际且注重事实的个人，可靠性不容质疑。",
				image: "/images/mbti/istj.svg",
			},
			{
				type: "ISFJ",
				name: "守卫者",
				description: "非常专注、热情和温暖，愿意不辞辛劳地保护所爱的人。",
				image: "/images/mbti/isfj.svg",
			},
			{
				type: "ESTJ",
				name: "总经理",
				description: "出色的管理者，无与伦比的关注细节能力和实用主义思维。",
				image: "/images/mbti/estj.svg",
			},
			{
				type: "ESFJ",
				name: "执政官",
				description: "特别关心，社交能力强，受欢迎的人，总是热衷于帮助他人。",
				image: "/images/mbti/esfj.svg",
			},
		],

		// 探险家族（黄色背景）
		explorers: [
			{
				type: "ISTP",
				name: "鉴赏家",
				description: "大胆而实际的实验者，各种工具的主人。",
				image: "/images/mbti/istp.svg",
			},
			{
				type: "ISFP",
				name: "探险家",
				description: "灵活且有魅力的艺术家，时刻准备探索和体验新事物。",
				image: "/images/mbti/isfp.svg",
			},
			{
				type: "ESTP",
				name: "企业家",
				description: "聪明，精力充沛，非常有洞察力的人，真正享受冒险。",
				image: "/images/mbti/estp.svg",
			},
			{
				type: "ESFP",
				name: "艺人",
				description: "自发性、精力充沛和热情的娱乐者——生活在他们周围从不无聊。",
				image: "/images/mbti/esfp.svg",
			},
		],

		// 当前用户的MBTI结果
		userMbtiType: null,
	},

	onLoad() {
		// 检查用户是否已完成测试并获取结果
		if (app.globalData.mbtiResult && app.globalData.mbtiResult.type) {
			this.setData({
				userMbtiType: app.globalData.mbtiResult.type,
			});
		}
	},

	// 查看MBTI类型详情
	viewTypeDetail(e) {
		const { type } = e.currentTarget.dataset;
		wx.navigateTo({
			url: "/pages/report-detail/report-detail?type=" + type,
		});
	},

	// 导航回主页
	goBack() {
		wx.navigateBack();
	},

	// 开始测试
	startTest() {
		wx.navigateTo({
			url: "/pages/test/test",
		});
	},
});
