const app = getApp();
// 引入新的认知功能题库
const questionDatabase = require("../../utils/question-database");

Page({
	data: {
		currentQuestion: 0,
		totalQuestions: 72, // 每个轴9个问题，共8个认知功能，总共72个问题
		progress: 0,
		answers: [],
		questions: [],
		showTip: true, // 控制提示是否显示
		tipAnimationData: {}, // 提示动画数据
		isReviewing: false, // 标记用户是否处于返回浏览模式
		options: [
			{ text: "完全不同意", value: 0 },
			{ text: "比较不同意", value: 1 },
			{ text: "中立", value: 2 },
			{ text: "比较同意", value: 3 },
			{ text: "完全同意", value: 4 },
		],
		isSelecting: false, // 标记是否正在进行选择动画
		lastClickTime: 0, // 记录上次点击时间，用于节流
	},

	onLoad() {
		try {
			// 从题库中随机抽取问题，每个认知功能9题，共72题
			const questions = questionDatabase.generateTestQuestions();

			// 初始化答案数组
			const answers = new Array(questions.length).fill(null);
			const totalQuestions = questions.length;

			this.setData({
				questions,
				answers,
				totalQuestions,
			});

			this.calculateProgress();
			console.log("测试页面已加载");
			console.log(`随机生成了${questions.length}个问题`);
			this.initTipAnimation();
		} catch (error) {
			console.error("onLoad error:", error);
			wx.showToast({
				title: "题目初始化失败",
				icon: "none",
			});
		}
	},

	// 处理选项选择 (0-4)
	selectOption(e) {
		try {
			// 节流处理：如果正在动画中或者两次点击间隔小于300ms，则不处理
			const now = Date.now();
			if (this.data.isSelecting || now - this.data.lastClickTime < 300) {
				return;
			}

			// 更新最后点击时间
			this.setData({
				lastClickTime: now,
				isSelecting: true, // 标记正在选择，开始动画
			});

			const value = parseInt(e.currentTarget.dataset.value);

			// 设置当前题目的答案
			const newAnswers = [...this.data.answers];
			newAnswers[this.data.currentQuestion] = {
				function: this.data.questions[this.data.currentQuestion].function,
				value: value,
			};

			this.setData({
				answers: newAnswers,
				isReviewing: false, // 选择答案后，无论之前是否在浏览模式，都关闭浏览模式
			});

			// 检查是否是最后一题
			const isLastQuestion =
				this.data.currentQuestion === this.data.totalQuestions - 1;

			// 在动画完成后检查是否完成测试或跳转到下一题
			setTimeout(() => {
				// 设置动画结束
				this.setData({ isSelecting: false });

				// 如果是最后一题，尝试多种方式触发完成对话框
				if (isLastQuestion) {
					console.log("这是最后一题，尝试触发完成对话框");
					// 尝试使用新方法
					const testCompleted = this.checkIfTestCompleted();

					// 如果新方法失败，尝试使用备用方法
					if (!testCompleted) {
						console.log("checkIfTestCompleted方法返回false，尝试备用方法");
						this.autoFinishTest();
					}
				}
				// 如果不是最后一题，则自动前进到下一题
				else if (this.data.currentQuestion < this.data.totalQuestions - 1) {
					// 选择答案后自动前进到下一题，无论是否在浏览模式
					this.nextQuestion();
				}
			}, 300); // 300ms的动画时间
		} catch (error) {
			// 发生错误时也要重置选择状态
			this.setData({ isSelecting: false });
			console.error("选择选项出错:", error);
		}
	},

	finishTest() {
		try {
			// 显示加载提示
			wx.showLoading({
				title: "计算结果中...",
				mask: true,
			});

			// 保存答案并计算结果
			this.saveAnswersAndCalculateResult();

			// 隐藏加载提示
			wx.hideLoading();
		} catch (error) {
			wx.hideLoading();
			console.error("完成测试出错:", error);
			wx.showToast({
				title: "测试完成处理失败",
				icon: "none",
			});
		}
	},

	nextQuestion() {
		try {
			if (this.data.currentQuestion < this.data.totalQuestions - 1) {
				this.setData({
					currentQuestion: this.data.currentQuestion + 1,
					isReviewing: false, // 正向进入下一题时，关闭返回浏览模式
				});
				this.calculateProgress();
			}
		} catch (error) {
			console.error("下一题出错:", error);
		}
	},

	prevQuestion() {
		try {
			if (this.data.currentQuestion > 0) {
				this.setData({
					currentQuestion: this.data.currentQuestion - 1,
					isReviewing: true, // 进入返回浏览模式
				});
				this.calculateProgress();
			}
		} catch (error) {
			console.error("上一题出错:", error);
		}
	},

	calculateProgress() {
		try {
			const progress =
				((this.data.currentQuestion + 1) / this.data.totalQuestions) * 100;
			this.setData({ progress });
		} catch (error) {
			console.error("计算进度出错:", error);
		}
	},

	saveAnswersAndCalculateResult() {
		try {
			const { answers, questions } = this.data;

			// 处理所有回答，确保没有未回答的题目
			const processedAnswers = answers.map((answer, index) => {
				// 如果没有回答，设置默认中立答案
				if (answer === null) {
					return {
						function: questions[index].function,
						value: 2, // 中立选项
					};
				}
				return answer;
			});

			// 计算认知功能得分（包含原始分数和加权分数）
			const scoreResult = questionDatabase.calculateScores(processedAnswers);

			// 确定MBTI类型
			const mbtiType = questionDatabase.determineMBTIType(scoreResult);

			// 保存结果
			const result = {
				type: mbtiType,
				scores: scoreResult.weightedScores,
				originalScores: scoreResult.originalScores,
				axisRanking: scoreResult.axisRanking,
				multipliers: scoreResult.multipliers,
				date: new Date().toISOString(),
				answers: processedAnswers,
			};

			// 在控制台打印加权前后的值
			console.log("原始分数:", result.originalScores);
			console.log("维度排名:", result.axisRanking);
			console.log("应用的乘数:", result.multipliers);
			console.log("加权后的分数:", result.scores);

			// 添加认知功能排名的调试信息
			const rankedFunctions = Object.entries(result.scores)
				.map(([func, score]) => ({ func, score }))
				.sort((a, b) => b.score - a.score);
			console.log("认知功能排名:", rankedFunctions);
			console.log(
				"主导与辅助功能差值:",
				rankedFunctions[0].score - rankedFunctions[1].score
			);
			console.log("最终MBTI类型:", result.type);

			// 保存到全局数据和本地存储
			app.globalData.mbtiResult = result;
			wx.setStorageSync("mbtiResult", result);

			// 记录测试历史
			this.saveTestHistory(result);

			// 延迟一下再跳转，确保数据已保存
			setTimeout(() => {
				// 导航到结果页面
				wx.navigateTo({
					url: "/pages/result/result",
					success: () => {
						console.log("成功跳转到结果页面");
					},
					fail: (err) => {
						console.error("跳转到结果页面失败:", err);
						wx.showToast({
							title: "跳转结果页面失败",
							icon: "none",
						});
					},
				});
			}, 300);
		} catch (error) {
			console.error("保存答案和计算结果出错:", error);
			wx.showToast({
				title: "结果计算失败",
				icon: "none",
			});
		}
	},

	// 保存测试历史记录
	saveTestHistory(result) {
		try {
			// 获取现有历史记录
			let history = wx.getStorageSync("testHistory") || [];

			// 添加新的测试结果
			history.unshift({
				date: result.date,
				type: result.type,
				scores: result.scores,
				originalScores: result.originalScores,
			});

			// 最多保存10条历史记录
			if (history.length > 10) {
				history = history.slice(0, 10);
			}

			// 保存更新后的历史记录
			wx.setStorageSync("testHistory", history);
		} catch (error) {
			console.error("保存测试历史失败:", error);
		}
	},

	initTipAnimation() {
		try {
			// 创建动画实例
			const animation = wx.createAnimation({
				duration: 300,
				timingFunction: "ease",
			});

			// 设置初始状态
			animation.opacity(1).step();

			// 应用动画数据
			this.setData({
				tipAnimationData: animation.export(),
			});
		} catch (error) {
			console.error("初始化提示动画出错:", error);
		}
	},

	closeTip() {
		try {
			// 创建关闭动画
			const animation = wx.createAnimation({
				duration: 300,
				timingFunction: "ease",
			});

			// 设置关闭状态
			animation.opacity(0).step();

			// 应用动画数据
			this.setData({
				tipAnimationData: animation.export(),
			});

			// 动画结束后隐藏提示
			setTimeout(() => {
				this.setData({
					showTip: false,
				});
			}, 300);
		} catch (error) {
			console.error("关闭提示动画出错:", error);
		}
	},

	onUnload() {
		// 页面卸载
	},

	// 添加检查测试是否完成的方法
	checkIfTestCompleted() {
		try {
			// 检查是否所有问题都已回答
			const allAnswered = this.data.answers.every((answer) => answer !== null);
			const isLastQuestion =
				this.data.currentQuestion === this.data.totalQuestions - 1;

			console.log("检查测试完成状态:");
			console.log(
				"- 当前题目:",
				this.data.currentQuestion + 1,
				"/",
				this.data.totalQuestions
			);
			console.log("- 所有问题已回答:", allAnswered);
			console.log("- 当前是最后一题:", isLastQuestion);

			// 如果是最后一题并且所有问题都已回答，显示确认对话框
			if (isLastQuestion && allAnswered) {
				console.log("测试已完成，显示确认对话框");

				// 使用setTimeout确保UI已经更新
				setTimeout(() => {
					wx.showModal({
						title: "完成测试",
						content: "您已完成所有题目，是否现在提交结果？",
						confirmText: "提交",
						cancelText: "再检查",
						showCancel: true,
						mask: true, // 添加遮罩防止用户点击其他地方
						success: (res) => {
							console.log("对话框选择结果:", res);
							if (res.confirm) {
								console.log("用户选择了立即提交");
								this.finishTest();
							} else {
								console.log("用户选择了再检查");
							}
						},
						fail: (err) => {
							console.error("显示对话框失败:", err);
						},
					});
				}, 100);

				return true;
			}

			return false;
		} catch (error) {
			console.error("检查测试完成状态出错:", error);
			return false;
		}
	},

	// 添加备用方法，用于自动完成测试
	autoFinishTest() {
		console.log("尝试自动完成测试");
		// 检查是否在最后一题
		if (this.data.currentQuestion === this.data.totalQuestions - 1) {
			// 检查是否所有问题都已回答
			const allAnswered = this.data.answers.every((answer) => answer !== null);
			if (allAnswered) {
				console.log("所有条件满足，显示确认对话框");
				wx.showModal({
					title: "完成测试",
					content: "您已完成所有题目，是否现在提交结果？",
					confirmText: "提交",
					cancelText: "再检查",
					showCancel: true,
					mask: true,
					success: (res) => {
						if (res.confirm) {
							this.finishTest();
						}
					},
				});
			}
		}
	},
});
