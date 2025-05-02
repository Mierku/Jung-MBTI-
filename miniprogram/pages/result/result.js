const app = getApp();
const {
	MBTIUtils,
	mbtiColorSchemes,
	mbtiFullNames,
	mbtiCognitiveFunctions,
} = require("../../utils/mbti-utils");

// const typeDescriptions = {
// 	ISTJ: "严谨、负责、实际、注重传统和秩序。善于制定计划并确保其执行。",
// 	ISFJ: "安静、友善、有责任心和谨慎。致力于履行承诺，关注他人的需求。",
// 	INFJ: "寻求意义和联系，希望了解什么能激励他人。对他人有同理心，能理解他人的情感。",
// 	INTJ: "在实现自己的想法和达成目标时有创新的想法和非凡的动力。能很快洞察到外界事物间的规律。",
// 	ISTP: "灵活和宽容，安静地观察直到问题出现，然后迅速行动找到可行的解决方案。",
// 	ISFP: "安静、友善、敏感和善良。享受当前。喜欢有自己的空间，喜欢按照自己的时间表工作。",
// 	INFP: "理想主义者，忠于自己的价值观和自己所重视的人。希望外部生活与自己内心的价值观一致。",
// 	INTP: "追求逻辑和解释，理论性强，对感兴趣的事物有深入的研究。",
// 	ESTP: "灵活、宽容，采用实用的方法解决问题。喜欢理论和抽象的解释。",
// 	ESFP: "外向、友善、接受性强。热爱生活、人类和物质上的享受。喜欢与他人一起完成事情。",
// 	ENFP: "热情洋溢、富有想象力。认为生活充满可能性。能很快地将事情和信息联系起来。",
// 	ENTP: "反应快、睿智，能够应对各种挑战。善于找出理论上的可能性。",
// 	ESTJ: "实际、现实主义者，具有企业或机械方面的天赋。喜欢组织和参与活动。",
// 	ESFJ: "热心肠、有责任心、合作性强。希望把周围的环境变得井然有序。",
// 	ENFJ: "热情、为他人着想、反应敏捷、负责任。非常关注他人的感受、需要和动机。",
// 	ENTJ: "坦诚、果断，天生的领导者。长于制定计划和实现目标。",
// };

// MBTI类型在全球人口中的分布比例
const mbtiTypeDistribution = {
	ISFJ: 13.8,
	ESFJ: 12.3,
	ISTJ: 11.6,
	ISFP: 8.8,
	ESTJ: 8.7,
	ESFP: 8.5,
	ENFP: 8.1,
	ISTP: 5.4,
	INFP: 4.4,
	ESTP: 4.3,
	INTP: 3.3,
	ENTP: 3.2,
	ENFJ: 2.5,
	INTJ: 2.1,
	ENTJ: 1.8,
	INFJ: 1.5,
};

Page({
	data: {
		mbtiResult: null,
		mbtiShortDesc: "",
		functionScores: {
			Te: 0,
			Ti: 0,
			Fe: 0,
			Fi: 0,
			Ne: 0,
			Ni: 0,
			Se: 0,
			Si: 0,
		},
		typeColors: null, // 当前类型的颜色主题
		typeFullName: "", // 类型全称（如逻辑学家）
		enneagramTypes: [], // 九型人格类型
		userType: "",
		typeName: "",
		typeIcon: "",
		functions: [],
		functionNames: {
			Ni: "内向直觉",
			Ne: "外向直觉",
			Si: "内向感觉",
			Se: "外向感觉",
			Ti: "内向思考",
			Te: "外向思考",
			Fi: "内向情感",
			Fe: "外向情感",
		},
		functionDescriptions: {
			// ... existing descriptions ...
		},
		colorScheme: {},
		shortDesc: "",
		populationPercentage: 0, // 添加人口分布百分比
	},

	onLoad() {
		try {
			console.log("结果页面加载");

			// 检查并获取MBTI结果，优先从全局数据获取，如果没有则从本地存储获取
			let mbtiResult = app.globalData.mbtiResult;

			if (!mbtiResult) {
				// 从本地存储获取
				mbtiResult = wx.getStorageSync("mbtiResult");
			}

			console.log("MBTI结果:", mbtiResult);

			if (mbtiResult && mbtiResult.type) {
				// 直接使用新的认知功能得分
				const formattedScores = this.formatFunctionScores(mbtiResult.scores);
				const functionScores = formattedScores.percentages;
				const rawScores = formattedScores.raw;
				const maxFunction = formattedScores.maxFunction;

				// 使用MBTI工具类获取数据
				const typeFullName = MBTIUtils.getFullTypeName(mbtiResult.type);
				const mbtiShortDesc = MBTIUtils.getShortDescription(mbtiResult.type);
				const typeColors = MBTIUtils.getColorScheme(mbtiResult.type);

				// 添加最高分功能标记
				typeColors.maxFunction = maxFunction;

				// 为最高分功能添加特殊颜色
				if (!typeColors.maxProgress) {
					// 如果没有预设的maxProgress颜色，默认使用比普通progress更深的颜色
					const baseColor = typeColors.progress || "#8A2BE2";
					// 生成一个更深、更鲜艳的颜色
					typeColors.maxProgress = this.adjustColor(baseColor, -20); // 颜色更深
				}

				// 获取九型人格类型
				const enneagramTypes = this.getEnneagramTypes(mbtiResult.type);

				// 设置页面数据
				this.setData({
					mbtiResult,
					mbtiShortDesc,
					functionScores,
					rawScores,
					maxFunction,
					typeColors,
					typeFullName,
					enneagramTypes,
					populationPercentage: mbtiTypeDistribution[mbtiResult.type] || 0, // 设置类型在全球人口中的分布百分比
				});

				console.log("更新后的页面数据:", this.data);

				// 保存测试结果到本地存储，用于在"我的报告"中显示
				this.saveTestReport(mbtiResult, typeFullName);
			} else {
				console.error("未找到有效的MBTI结果");
				this.handleMissingData();
			}
		} catch (error) {
			console.error("结果页面加载出错:", error);
			this.handleMissingData();
		}
	},

	// 保存测试报告到本地存储
	saveTestReport(mbtiResult, typeFullName) {
		// 从本地存储获取现有报告
		wx.getStorage({
			key: "mbtiReports",
			success: (res) => {
				let reports = res.data || [];

				// 检查是否已存在相同ID的报告
				const existingReportIndex = reports.findIndex(
					(report) =>
						report.mbtiResult && report.mbtiResult.id === mbtiResult.id
				);

				// 创建新的报告对象
				const newReport = {
					id: mbtiResult.id || Date.now(), // 使用测试ID或当前时间戳
					title: "MBTI性格测试",
					type: "mbti",
					result: mbtiResult.type,
					description: typeFullName,
					date: mbtiResult.date || new Date().toISOString().split("T")[0], // 使用测试日期或当前日期
					finished: true,
					mbtiResult: mbtiResult, // 保存完整的测试结果
				};

				// 更新或添加报告
				if (existingReportIndex >= 0) {
					reports[existingReportIndex] = newReport;
				} else {
					reports.push(newReport);
				}

				// 保存回本地存储
				wx.setStorage({
					key: "mbtiReports",
					data: reports,
				});
			},
			fail: () => {
				// 如果没有现有报告，创建新的数组
				const newReport = {
					id: mbtiResult.id || Date.now(),
					title: "MBTI性格测试",
					type: "mbti",
					result: mbtiResult.type,
					description: typeFullName,
					date: mbtiResult.date || new Date().toISOString().split("T")[0],
					finished: true,
					mbtiResult: mbtiResult,
				};

				wx.setStorage({
					key: "mbtiReports",
					data: [newReport],
				});
			},
		});
	},

	// 格式化认知功能得分，转换为百分比
	formatFunctionScores(scores) {
		try {
			if (!scores) {
				throw new Error("认知功能得分为空");
			}

			// 保存原始分数
			const rawScores = {};
			Object.keys(scores).forEach((func) => {
				rawScores[func] = scores[func];
			});

			// 找出当前八个认知功能中的最大值和对应功能
			const maxScore = Math.max(...Object.values(scores));
			const maxFunction = Object.keys(scores).find(
				(func) => scores[func] === maxScore
			);
			console.log(
				"八个认知功能中的最大值:",
				maxScore,
				"对应功能:",
				maxFunction
			);

			// 将每个认知功能的得分转换为相对于最大值的百分比
			const functionScores = {};
			Object.keys(scores).forEach((func) => {
				// 转换为百分比，最小为10%，保证每个功能至少有显示
				// 使用当前最大值作为基准，而不是理论最大值
				functionScores[func] = Math.max(
					10,
					Math.min(100, Math.round((scores[func] / maxScore) * 100))
				);
			});

			console.log("格式化后的认知功能得分:", functionScores);
			console.log("原始分数:", rawScores);

			// 返回百分比、原始分数和最高分功能
			return {
				percentages: functionScores,
				raw: rawScores,
				maxFunction: maxFunction,
			};
		} catch (error) {
			console.error("格式化认知功能得分出错:", error);
			// 返回默认值
			const defaultScores = {
				Te: 50,
				Ti: 50,
				Fe: 50,
				Fi: 50,
				Ne: 50,
				Ni: 50,
				Se: 50,
				Si: 50,
			};
			return {
				percentages: defaultScores,
				raw: defaultScores,
				maxFunction: null,
			};
		}
	},

	// 分享结果方法增强
	shareResult() {
		// 获取测试类型数据
		const mbtiType = this.data.mbtiResult ? this.data.mbtiResult.type : "未知";
		const typeFullName = this.data.typeFullName || "";
		const percentText = this.data.populationPercentage
			? `全球仅${this.data.populationPercentage}%的人`
			: "";

		// 显示分享选项
		wx.showActionSheet({
			itemList: ["分享给微信好友", "分享到朋友圈", "保存分享图片"],
			success: (res) => {
				if (res.tapIndex === 0 || res.tapIndex === 1) {
					// 分享给好友或朋友圈
					wx.showShareMenu({
						withShareTicket: true,
						menus: ["shareAppMessage", "shareTimeline"],
						success: () => {
							wx.showToast({
								title: "请点击右上角分享",
								icon: "none",
							});
						},
					});
				} else if (res.tapIndex === 2) {
					// 生成分享图片 - 可以保存到本地
					this.generateShareImage();
				}
			},
		});
	},

	// 生成分享图片
	generateShareImage() {
		// 先检查相册权限
		wx.getSetting({
			success: (res) => {
				if (!res.authSetting["scope.writePhotosAlbum"]) {
					// 如果没有授权，请求授权
					wx.authorize({
						scope: "scope.writePhotosAlbum",
						success: () => {
							// 授权成功，开始生成图片
							this.drawShareImage();
						},
						fail: () => {
							// 授权失败，提示用户打开设置页面手动授权
							wx.showModal({
								title: "提示",
								content: "需要您授权保存图片到相册",
								confirmText: "去授权",
								success: (res) => {
									if (res.confirm) {
										wx.openSetting({
											success: (settingRes) => {
												if (settingRes.authSetting["scope.writePhotosAlbum"]) {
													// 用户在设置页面中允许了授权
													this.drawShareImage();
												}
											},
										});
									}
								},
							});
						},
					});
				} else {
					// 已有授权，直接生成图片
					this.drawShareImage();
				}
			},
		});
	},

	// 绘制分享图片
	drawShareImage() {
		wx.showLoading({
			title: "生成图片中",
		});

		try {
			const mbtiType = this.data.mbtiResult
				? this.data.mbtiResult.type
				: "未知";
			const typeFullName = this.data.typeFullName || "";
			const percentText = this.data.populationPercentage
				? `全球仅${this.data.populationPercentage}`
				: "";

			// 创建canvas上下文
			const query = wx.createSelectorQuery();
			query
				.select("#shareCanvas")
				.fields({ node: true, size: true })
				.exec((res) => {
					// 如果没有找到canvas节点，创建离屏canvas
					const canvas =
						res[0]?.node ||
						wx.createOffscreenCanvas({ type: "2d", width: 600, height: 1200 });
					const ctx = canvas.getContext("2d");

					// 设置画布尺寸
					canvas.width = 600;
					canvas.height = 1200; // 设置一个足够大的固定高度

					// 绘制背景
					ctx.fillStyle = "#F5F7FA";
					ctx.fillRect(0, 0, 600, canvas.height); // 确保背景覆盖整个画布

					// 从MBTI工具类获取图标URL和颜色信息
					const { mbtiIconMap } = require("../../utils/mbti-utils");
					const iconSrc = mbtiIconMap[mbtiType];
					const primaryColor = this.data.typeColors?.primary || "#8A2BE2";
					const progressColor = this.data.typeColors?.progress || primaryColor;

					// 绘制圆形背景和MBTI人物图标
					if (iconSrc) {
						// 先加载图标，在回调中继续绘制
						const img = canvas.createImage();
						img.onload = () => {
							// 绘制圆形背景 - 上移50px
							ctx.beginPath();
							ctx.arc(434, 146, 180, 0, Math.PI * 2); // y从196改为146
							const circleGradient = ctx.createLinearGradient(260, 0, 540, 250);

							// 安全地提取颜色，处理可能的格式问题
							let startColor = "#FF5500";
							let endColor = "#FF9500";

							try {
								const circleColor = this.data.typeColors?.circle || "";
								if (circleColor.includes("linear-gradient")) {
									// 尝试从linear-gradient中提取颜色值
									const colorMatches = circleColor.match(
										/#[0-9a-fA-F]{3,6}|rgb\([^)]+\)/g
									);
									if (colorMatches && colorMatches.length >= 2) {
										startColor = colorMatches[0];
										endColor = colorMatches[1];
									}
								}
							} catch (e) {
								console.error("解析渐变色失败:", e);
							}

							circleGradient.addColorStop(0, startColor);
							circleGradient.addColorStop(1, endColor);
							ctx.fillStyle = circleGradient;
							ctx.fill();

							// 绘制MBTI人物图标，居中放置在圆形内，上移50px
							const iconSize = 350;
							const iconX = 400 - iconSize / 2 + 40;
							const iconY = 110 - iconSize / 2 + 70; // 从160改为110
							ctx.drawImage(img, iconX, iconY, iconSize, iconSize);

							// 继续绘制其他部分
							continueDrawing();
						};
						img.onerror = () => {
							console.error("加载MBTI图标失败");
							continueDrawing();
						};
						img.src = iconSrc;
					} else {
						continueDrawing();
					}

					// 绘制其余部分
					const continueDrawing = () => {
						// 绘制MBTI类型和名称 - 上移50px
						ctx.fillStyle = "#333333";
						ctx.font = "bold 32px sans-serif";
						ctx.textAlign = "left";
						ctx.fillText(typeFullName, 50, 146); // 从196改为146

						ctx.fillStyle = primaryColor;
						ctx.font = "bold 52px sans-serif";
						ctx.fillText(mbtiType, 50, 206); // 从256改为206

						// 绘制人口百分比 - 上移50px
						if (this.data.populationPercentage) {
							ctx.fillStyle = "#555555";
							ctx.font = "18px sans-serif";
							ctx.fillText(`全球仅`, 50, 236); // 从286改为236

							ctx.fillStyle = "#FF4500";
							ctx.font = "bold 22px sans-serif";
							ctx.fillText(`${this.data.populationPercentage}%`, 110, 236); // 从286改为236
						}

						// 绘制认知功能标题 - 上移50px
						ctx.fillStyle = "#333333";
						ctx.font = "bold 34px sans-serif";
						ctx.textAlign = "left";
						ctx.fillText("认知功能", 50, 380); // 从430改为380

						// 绘制认知功能条形图 - 上移50px并减小间距
						const functions = ["Ne", "Ni", "Se", "Si", "Te", "Ti", "Fe", "Fi"];
						const functionNames = {
							Ne: "外倾直觉",
							Ni: "内倾直觉",
							Se: "外倾感觉",
							Si: "内倾感觉",
							Te: "外倾思维",
							Ti: "内倾思维",
							Fe: "外倾情感",
							Fi: "内倾情感",
						};

						let startY = 440; // 从490改为440，上移50px
						functions.forEach((func) => {
							// 函数名
							ctx.fillStyle = "#555555";
							ctx.font = "bold 22px sans-serif";
							ctx.textAlign = "left";
							ctx.fillText(`${func}`, 50, startY);

							ctx.font = "20px sans-serif";
							ctx.fillStyle = "#777777";
							ctx.fillText(`(${functionNames[func]})`, 90, startY);

							// 进度条背景 - 圆角矩形
							ctx.fillStyle = "#EEEEEE";
							this.roundRect(ctx, 250, startY - 15, 280, 24, 12, true, false);

							// 进度条 - 圆角矩形和填充
							const score = this.data.functionScores[func] || 0;
							const rawScore = this.data.rawScores[func] || 0;
							const progressWidth = 280 * (score / 100);

							// 为最高分功能使用maxProgress颜色，其他使用默认进度条颜色
							ctx.fillStyle =
								func === this.data.maxFunction
									? this.data.typeColors?.maxProgress || progressColor
									: progressColor;

							if (progressWidth > 0) {
								this.roundRect(
									ctx,
									250,
									startY - 15,
									progressWidth,
									24,
									12,
									true,
									false
								);
							}

							// 分数
							ctx.fillStyle = "#FFFFFF";
							ctx.font = "bold 18px sans-serif";
							ctx.textAlign = "right";

							ctx.fillText(`${rawScore}`, 250 + progressWidth - 12, startY + 5);

							startY += 60; // 从66改为60，减小间距
						});

						// 绘制性格标签 - 上移并减小间距
						let tagStartY = startY + 10; // 从+20改为+10，减小间距

						// 从typeColors获取性格标签
						const personalityTags = this.data.typeColors?.personality || [];

						if (personalityTags.length > 0) {
							const tagsPerRow = 3;
							const tagWidth = 160;
							const tagHeight = 40;
							const tagMargin = 10;

							let tagX = 50;
							let tagY = tagStartY;

							// 绘制每个标签
							personalityTags.forEach((tag, index) => {
								// 计算标签位置
								if (index > 0 && index % tagsPerRow === 0) {
									tagX = 50;
									tagY += tagHeight + tagMargin;
								}

								// 绘制标签背景 - 圆角矩形
								ctx.fillStyle = primaryColor;

								// 添加轻微阴影效果
								ctx.save();
								ctx.shadowColor = "rgba(0, 0, 0, 0.1)";
								ctx.shadowBlur = 4;
								ctx.shadowOffsetY = 4;
								ctx.fillStyle = primaryColor;
								this.roundRect(
									ctx,
									tagX,
									tagY,
									tagWidth,
									tagHeight,
									4,
									true,
									false
								);
								ctx.restore();

								// 绘制标签文字
								ctx.fillStyle = "#FFFFFF";
								ctx.font = "bold 18px sans-serif";
								ctx.textAlign = "center";
								ctx.fillText(
									tag,
									tagX + tagWidth / 2,
									tagY + tagHeight / 2 + 6
								);

								// 更新下一个标签的X位置
								tagX += tagWidth + tagMargin;
							});
						}

						// 计算底部位置 - 整体上移
						let qrcodeY =
							tagStartY +
							Math.ceil(personalityTags.length / 3) * (40 + 10) +
							20; // 标签后的间隔

						// 计算底部区域需要的总高度
						const qrcodeSize = 120; // 二维码尺寸
						const qrcodePadding = 10; // 二维码上边距
						const footerHeight = qrcodePadding + qrcodeSize + 10;

						// 绘制底部主题背景
						const gradient = ctx.createLinearGradient(
							0,
							qrcodeY,
							0,
							qrcodeY + footerHeight
						);
						gradient.addColorStop(0, this.adjustColor(primaryColor, -40)); // 深色版本
						gradient.addColorStop(1, primaryColor);
						ctx.fillStyle = gradient;
						ctx.fillRect(0, qrcodeY, canvas.width, footerHeight);

						// 在底部添加MBTI相关的文字
						ctx.fillStyle = "#FFFFFF";
						ctx.font = "bold 26px sans-serif";
						ctx.textAlign = "left";
						ctx.fillText(`探索${mbtiType}的奇妙世界`, 50, qrcodeY + 35);

						ctx.font = "18px sans-serif";
						ctx.fillText("每个性格都是独特的存在", 50, qrcodeY + 65);

						wx.showLoading({ title: "生成图片中..." });

						// 调用云函数获取小程序码
						wx.cloud.callFunction({
							name: "getQRCode", // 云函数名称
							success: (res) => {
								console.log("获取小程序码结果:", res);
								if (res.result && res.result.success && res.result.buffer) {
									// 处理buffer
									const base64 = wx.arrayBufferToBase64(res.result.buffer);
									const qrcode = canvas.createImage();
									qrcode.onload = () => {
										// 绘制小程序码图片 - 位置向上调整
										const qrcodeSize = 120; // 保持120尺寸
										const qrcodeX = canvas.width - qrcodeSize - 30; // 右侧位置

										// 将二维码放在底部区域的固定位置
										const qrcodeY2 = qrcodeY + qrcodePadding; // 使用事先计算的上边距

										// 绘制一个白色背景
										ctx.fillStyle = "#FFFFFF";
										this.roundRect(
											ctx,
											qrcodeX - 4,
											qrcodeY2 - 4,
											qrcodeSize + 8,
											qrcodeSize + 8,
											10,
											true,
											false
										);

										// 绘制二维码图片
										ctx.drawImage(
											qrcode,
											qrcodeX,
											qrcodeY2,
											qrcodeSize,
											qrcodeSize
										);

										// 添加边框
										ctx.strokeStyle = "#FFFFFF";
										ctx.lineWidth = 3;
										this.roundRect(
											ctx,
											qrcodeX - 4,
											qrcodeY2 - 4,
											qrcodeSize + 8,
											qrcodeSize + 8,
											10,
											false,
											true
										);

										// 完成绘制，保存图片
										saveFinalImage();
									};
									qrcode.onerror = () => {
										console.error("加载小程序码失败");
										fallbackToDefault();
									};
									qrcode.src = "data:image/jpeg;base64," + base64;
								} else {
									console.error("返回的小程序码数据无效:", res);
									fallbackToDefault();
								}
							},
							fail: (err) => {
								console.error("获取小程序码失败", err);
								fallbackToDefault();
							},
						});

						// 回退到默认显示
						const fallbackToDefault = () => {
							// 绘制占位的二维码区域
							const qrcodeSize = 120;
							const qrcodeX = canvas.width - qrcodeSize - 30;
							const qrcodeY2 = qrcodeY + qrcodePadding;

							// 白色圆角矩形背景
							ctx.fillStyle = "#FFFFFF";
							this.roundRect(
								ctx,
								qrcodeX - 4,
								qrcodeY2 - 4,
								qrcodeSize + 8,
								qrcodeSize + 8,
								10,
								true,
								false
							);

							// 二维码占位图案
							ctx.fillStyle = primaryColor;
							ctx.font = "bold 22px sans-serif";
							ctx.textAlign = "center";
							ctx.fillText(
								"MBTI",
								qrcodeX + qrcodeSize / 2,
								qrcodeY2 + qrcodeSize / 2 - 15
							);
							ctx.fillText(
								"性格测试",
								qrcodeX + qrcodeSize / 2,
								qrcodeY2 + qrcodeSize / 2 + 15
							);

							// 完成绘制，保存图片
							saveFinalImage();
						};

						// 保存最终图片
						const saveFinalImage = () => {
							wx.hideLoading();

							// 转换为图片并保存
							wx.canvasToTempFilePath({
								canvas: canvas,
								width: 600,
								height: 1200, // 使用固定高度1200
								destWidth: 1200, // 2倍分辨率以提高清晰度
								destHeight: 2600, // 固定高度的2倍
								success: (res) => {
									const tempFilePath = res.tempFilePath;

									wx.saveImageToPhotosAlbum({
										filePath: tempFilePath,
										success: function (res) {
											wx.showModal({
												title: "保存成功",
												content: "图片已成功保存到相册，快去分享吧",
												showCancel: false,
											});
										},
										fail: function (err) {
											console.error("保存图片失败", err);
											// 判断是否是权限问题
											if (
												err.errMsg.indexOf("auth deny") >= 0 ||
												err.errMsg.indexOf("authorize") >= 0
											) {
												wx.showModal({
													title: "提示",
													content: "保存图片需要您授权才能使用",
													confirmText: "去授权",
													success: (modalRes) => {
														if (modalRes.confirm) {
															wx.openSetting();
														}
													},
												});
											} else {
												wx.showModal({
													title: "保存失败",
													content: "图片保存失败，请稍后再试",
													showCancel: false,
												});
											}
										},
									});
								},
								fail: (err) => {
									wx.hideLoading();
									console.error("生成图片失败", err);
									wx.showModal({
										title: "生成失败",
										content: "生成分享图片失败，请稍后再试",
										showCancel: false,
									});
								},
							});
						};
					};
				});
		} catch (error) {
			wx.hideLoading();
			console.error("生成分享图片出错", error);
			wx.showModal({
				title: "生成失败",
				content: "生成分享图片失败，请稍后再试",
				showCancel: false,
			});
		}
	},

	// 绘制圆角矩形
	roundRect(ctx, x, y, width, height, radius, fill, stroke) {
		if (typeof radius === "number") {
			radius = { tl: radius, tr: radius, br: radius, bl: radius };
		} else {
			radius = { tl: 0, tr: 0, br: 0, bl: 0, ...radius };
		}
		ctx.beginPath();
		ctx.moveTo(x + radius.tl, y);
		ctx.lineTo(x + width - radius.tr, y);
		ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
		ctx.lineTo(x + width, y + height - radius.br);
		ctx.quadraticCurveTo(
			x + width,
			y + height,
			x + width - radius.br,
			y + height
		);
		ctx.lineTo(x + radius.bl, y + height);
		ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
		ctx.lineTo(x, y + radius.tl);
		ctx.quadraticCurveTo(x, y, x + radius.tl, y);
		ctx.closePath();
		if (fill) {
			ctx.fill();
		}
		if (stroke) {
			ctx.stroke();
		}
	},

	// 调整颜色亮度
	adjustColor(color, amount) {
		// 处理十六进制颜色
		if (color.startsWith("#")) {
			let hex = color.slice(1);
			if (hex.length === 3) {
				hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
			}
			let r = parseInt(hex.slice(0, 2), 16);
			let g = parseInt(hex.slice(2, 4), 16);
			let b = parseInt(hex.slice(4, 6), 16);

			r = Math.max(0, Math.min(255, r + amount));
			g = Math.max(0, Math.min(255, g + amount));
			b = Math.max(0, Math.min(255, b + amount));

			return `#${r.toString(16).padStart(2, "0")}${g
				.toString(16)
				.padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
		}

		// 处理rgb颜色
		if (color.startsWith("rgb")) {
			const matches = color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
			if (matches) {
				let r = parseInt(matches[1]);
				let g = parseInt(matches[2]);
				let b = parseInt(matches[3]);

				r = Math.max(0, Math.min(255, r + amount));
				g = Math.max(0, Math.min(255, g + amount));
				b = Math.max(0, Math.min(255, b + amount));

				return `rgb(${r}, ${g}, ${b})`;
			}
		}

		// 默认返回原色
		return color;
	},

	// 分享给朋友
	onShareAppMessage() {
		const mbtiType = this.data.mbtiResult ? this.data.mbtiResult.type : "未知";
		const typeFullName = this.data.typeFullName || "";
		const percentText = this.data.populationPercentage
			? `全球仅${this.data.populationPercentage}%的人`
			: "";

		return {
			title: `我的MBTI人格类型是${mbtiType}(${typeFullName})，${percentText}，来测测你的吧！`,
			path: "/pages/index/index",
			imageUrl: "/assets/images/share-img.png",
		};
	},

	// 分享到朋友圈
	onShareTimeline() {
		const mbtiType = this.data.mbtiResult ? this.data.mbtiResult.type : "未知";
		const typeFullName = this.data.typeFullName || "";
		const percentText = this.data.populationPercentage
			? `全球仅${this.data.populationPercentage}%的人`
			: "";

		return {
			title: `我的MBTI人格类型是${mbtiType}(${typeFullName})，${percentText}，来测测你的吧！`,
			query: "",
			imageUrl: "/assets/images/share-img.png",
		};
	},

	// 跳转到完整报告页面
	goToDetailReport() {
		if (!this.data.mbtiResult || !this.data.mbtiResult.type) {
			wx.showToast({
				title: "未找到测试结果",
				icon: "none",
			});
			return;
		}

		wx.navigateTo({
			url: "/pages/report-detail/report-detail",
		});
	},

	// 重新开始测试
	restartTest() {
		try {
			wx.redirectTo({
				url: "/pages/test/test",
			});
		} catch (error) {
			console.error("重新开始测试出错:", error);
			wx.showToast({
				title: "跳转失败",
				icon: "none",
			});
		}
	},

	// 处理数据缺失的情况
	handleMissingData() {
		wx.showModal({
			title: "数据缺失",
			content: "未找到有效的测试结果，请返回重新测试",
			showCancel: false,
			success: (res) => {
				if (res.confirm) {
					wx.redirectTo({
						url: "/pages/mbti/index",
					});
				}
			},
		});
	},

	// 获取九型人格类型建议
	getEnneagramTypes(mbtiType) {
		const enneagramSuggestions = {
			ISTJ: [1, 5, 6],
			ISFJ: [1, 2, 6],
			INFJ: [1, 4, 9],
			INTJ: [1, 5, 8],
			ISTP: [5, 7, 9],
			ISFP: [4, 6, 9],
			INFP: [4, 6, 9],
			INTP: [5, 6, 9],
			ESTP: [3, 7, 8],
			ESFP: [2, 3, 7],
			ENFP: [2, 4, 7],
			ENTP: [3, 7, 8],
			ESTJ: [1, 3, 8],
			ESFJ: [2, 3, 6],
			ENFJ: [2, 3, 9],
			ENTJ: [1, 3, 8],
		};

		return enneagramSuggestions[mbtiType] || [5, 6, 9];
	},
});
