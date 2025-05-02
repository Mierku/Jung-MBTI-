Page({
	data: {
		reports: [],
	},

	onLoad: function () {
		// 页面加载时获取用户的测试报告
		this.loadTestHistory();
	},

	onShow: function () {
		// 每次页面显示时重新获取测试历史，确保数据最新
		this.loadTestHistory();

		// 显示自定义tabbar
		if (typeof this.getTabBar === "function" && this.getTabBar()) {
			this.getTabBar().setData({
				selected: 1,
			});
		}
	},

	loadTestHistory: function () {
		// 从本地存储获取测试历史记录
		try {
			const testHistory = wx.getStorageSync("testHistory") || [];

			if (testHistory.length > 0) {
				// 处理时间显示并排序
				const formattedReports = testHistory.map((item, index) => {
					const date = new Date(item.date);

					// 格式化日期：年月日
					const formattedDate = `${date.getFullYear()}年${
						date.getMonth() + 1
					}月${date.getDate()}日`;

					// 格式化时间：时分
					const hours = date.getHours().toString().padStart(2, "0");
					const minutes = date.getMinutes().toString().padStart(2, "0");
					const formattedTime = `${hours}:${minutes}`;

					// 获取前4个主要认知功能
					const sortedFunctions = this.getSortedCognitiveFunctions(item.scores);
					const topFunctions = sortedFunctions.slice(0, 4);

					return {
						...item,
						formattedDate,
						formattedTime,
						topFunctions,
					};
				});

				this.setData({
					reports: formattedReports,
				});
			} else {
				this.setData({
					reports: [],
				});
			}
		} catch (error) {
			console.error("获取测试历史失败:", error);
			this.setData({
				reports: [],
			});
		}
	},

	// 将认知功能分数转换为排序后的数组
	getSortedCognitiveFunctions: function (scores) {
		if (!scores) return [];

		// 将分数对象转换为数组并排序
		const functionsArray = Object.entries(scores).map(([func, score]) => ({
			function: func,
			score: typeof score === "number" ? score.toFixed(1) : score,
		}));

		// 按分数降序排序
		return functionsArray.sort(
			(a, b) => parseFloat(b.score) - parseFloat(a.score)
		);
	},

	viewReportDetail: function (e) {
		const index = e.currentTarget.dataset.id;
		const report = this.data.reports[index];

		if (report) {
			// 将报告数据存储到全局对象，以便结果页面使用
			const app = getApp();

			// 创建与API兼容的结果对象
			const mbtiResult = {
				type: report.type,
				scores: report.scores,
				originalScores: report.originalScores || report.scores,
				date: report.date,
			};

			app.globalData.mbtiResult = mbtiResult;

			// 导航到结果页面
			wx.navigateTo({
				url: "/pages/result/result",
			});
		}
	},

	deleteReport: function (e) {
		const index = e.currentTarget.dataset.id;
		const reports = this.data.reports;

		wx.showModal({
			title: "删除记录",
			content: "确定要删除这条测试记录吗？",
			confirmText: "删除",
			confirmColor: "#ff4d4f",
			success: (res) => {
				if (res.confirm) {
					// 从展示列表和存储中删除
					const newReports = [...reports];
					newReports.splice(index, 1);

					// 更新本地存储
					const testHistory = wx.getStorageSync("testHistory") || [];
					testHistory.splice(index, 1);
					wx.setStorageSync("testHistory", testHistory);

					this.setData({
						reports: newReports,
					});

					wx.showToast({
						title: "删除成功",
						icon: "success",
					});
				}
			},
		});
	},
});
