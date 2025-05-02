const app = getApp();

Page({
	data: {
		myType: "",
		myTypeIndex: 0,
		partnerType: "",
		partnerTypeIndex: 0,
		mbtiTypesList: [
			"INTJ",
			"INTP",
			"ENTJ",
			"ENTP",
			"INFJ",
			"INFP",
			"ENFJ",
			"ENFP",
			"ISTJ",
			"ISFJ",
			"ESTJ",
			"ESFJ",
			"ISTP",
			"ISFP",
			"ESTP",
			"ESFP",
		],
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
		showResult: false,
		compatibilityScore: 0,
		compatibilityLevel: "",
		compatibilityDescription: "",
		compatibilityAdvice: "",
		compatibilityChallenges: "",
	},

	onLoad: function (options) {
		// 如果有参数传入，设置初始值
		if (options.myType) {
			const index = this.data.mbtiTypesList.findIndex(
				(type) => type === options.myType
			);
			if (index !== -1) {
				this.setData({
					myType: options.myType,
					myTypeIndex: index,
				});
			}
		}
	},

	// 选择我的MBTI类型
	changeMyType: function (e) {
		const index = e.detail.value;
		const type = this.data.mbtiTypesList[index];
		this.setData({
			myType: type,
			myTypeIndex: index,
		});
		// 重置结果
		if (this.data.showResult) {
			this.setData({ showResult: false });
		}
	},

	// 选择对方MBTI类型
	changePartnerType: function (e) {
		const index = e.detail.value;
		const type = this.data.mbtiTypesList[index];
		this.setData({
			partnerType: type,
			partnerTypeIndex: index,
		});
		// 重置结果
		if (this.data.showResult) {
			this.setData({ showResult: false });
		}
	},

	// 分析按钮点击
	analyzeCompatibility: function () {
		if (!this.data.myType || !this.data.partnerType) {
			wx.showToast({
				title: "请选择双方的MBTI类型",
				icon: "none",
			});
			return;
		}

		// 计算匹配度
		const result = this.calculateCompatibility(
			this.data.myType,
			this.data.partnerType
		);

		this.setData({
			compatibilityScore: result.score,
			compatibilityLevel: result.level,
			compatibilityDescription: result.description,
			compatibilityAdvice: result.advice,
			compatibilityChallenges: result.challenges,
			showResult: true,
		});

		// 滚动到结果区域
		wx.createSelectorQuery()
			.select(".result-section")
			.boundingClientRect((rect) => {
				wx.pageScrollTo({
					scrollTop: rect.top,
					duration: 300,
				});
			})
			.exec();
	},

	// 计算匹配度
	calculateCompatibility: function (typeA, typeB) {
		// 计算两个MBTI类型之间的匹配度
		let score = 50; // 基础匹配度
		let level = "";
		let description = "";
		let advice = "";
		let challenges = "";

		// 比较E/I偏好
		if (
			(typeA.charAt(0) === "E" && typeB.charAt(0) === "I") ||
			(typeA.charAt(0) === "I" && typeB.charAt(0) === "E")
		) {
			score += 5; // 互补性加分
		}

		// 比较S/N偏好
		if (typeA.charAt(1) === typeB.charAt(1)) {
			score += 10; // 相同观察世界的方式
		} else {
			score -= 5; // 不同的观察方式可能导致误解
		}

		// 比较T/F偏好
		if (typeA.charAt(2) === typeB.charAt(2)) {
			score += 5; // 相同决策方式
		} else {
			score += 10; // 不同决策方式可能互补
		}

		// 比较J/P偏好
		if (typeA.charAt(3) === typeB.charAt(3)) {
			score += 5; // 相同生活方式
		} else {
			score += 0; // 中性影响
		}

		// 特殊匹配加分
		const specialCompatibility = this.getSpecialCompatibility(typeA, typeB);
		score += specialCompatibility.bonus;

		// 确保分数在0-100之间
		score = Math.max(0, Math.min(100, score));

		// 根据分数确定匹配等级
		if (score >= 90) {
			level = "天生一对";
		} else if (score >= 75) {
			level = "非常般配";
		} else if (score >= 60) {
			level = "较为合适";
		} else if (score >= 40) {
			level = "一般匹配";
		} else if (score >= 25) {
			level = "需要努力";
		} else {
			level = "有挑战性";
		}

		// 生成匹配描述
		description = this.generateCompatibilityDescription(typeA, typeB, score);

		// 生成相处建议
		advice = this.generateCompatibilityAdvice(typeA, typeB, score);

		// 生成潜在挑战
		challenges = this.generateCompatibilityChallenges(typeA, typeB, score);

		return {
			score,
			level,
			description,
			advice,
			challenges,
		};
	},

	// 获取特殊匹配加分
	getSpecialCompatibility: function (typeA, typeB) {
		// 一些MBTI类型之间存在特殊匹配关系
		const specialPairs = {
			"ENFP-INFJ": 25,
			"INFJ-ENFP": 25,
			"ENFJ-INFP": 25,
			"INFP-ENFJ": 25,
			"ENTJ-INTP": 20,
			"INTP-ENTJ": 20,
			"INTJ-ENTP": 20,
			"ENTP-INTJ": 20,
			"ESTJ-ISFP": 15,
			"ISFP-ESTJ": 15,
			"ESFJ-ISTP": 15,
			"ISTP-ESFJ": 15,
			"ISTJ-ESFP": 15,
			"ESFP-ISTJ": 15,
			"ISFJ-ESTP": 15,
			"ESTP-ISFJ": 15,
		};

		const pair = typeA + "-" + typeB;
		const reversePair = typeB + "-" + typeA;

		return {
			bonus: specialPairs[pair] || specialPairs[reversePair] || 0,
		};
	},

	// 生成匹配描述
	generateCompatibilityDescription: function (typeA, typeB, score) {
		const typeAName = typeA + "（" + this.data.mbtiTypes[typeA] + "）";
		const typeBName = typeB + "（" + this.data.mbtiTypes[typeB] + "）";

		// 基于分数生成描述
		if (score >= 90) {
			return `${typeAName}和${typeBName}的匹配度极高，你们之间存在自然的吸引力和理解。双方的性格特点高度互补，能够互相支持彼此的成长，同时也能欣赏对方的优点。这样的组合通常能够建立长久稳定的关系。`;
		} else if (score >= 75) {
			return `${typeAName}和${typeBName}是很好的匹配，你们有很多共同点，同时也有足够的差异让关系保持新鲜感。彼此的沟通通常顺畅，能够较好地理解对方的需求和想法。这种组合通常能够建立和谐的关系。`;
		} else if (score >= 60) {
			return `${typeAName}和${typeBName}的匹配度较好，有一些共同点也有明显的差异。这种关系需要一些努力来理解对方的思考方式，但通过有效沟通，你们可以建立稳定的关系。彼此的差异实际上可以成为关系中的优势。`;
		} else if (score >= 40) {
			return `${typeAName}和${typeBName}的匹配度一般，你们在某些方面可能有较大的差异，但这并不意味着关系不能成功。通过双方的努力和理解，你们可以学会欣赏彼此的不同，并利用这些差异来互相补充。`;
		} else if (score >= 25) {
			return `${typeAName}和${typeBName}的匹配可能面临一些挑战，你们在沟通和决策方式上可能有明显差异。要建立成功的关系，需要双方有意识地理解和尊重这些差异，并致力于寻找中间地带。`;
		} else {
			return `${typeAName}和${typeBName}的匹配度较低，这意味着你们可能在多个方面有明显的差异。这种关系需要大量的沟通、理解和妥协。虽然具有挑战性，但如果双方都愿意投入努力，仍然可以建立有意义的关系。`;
		}
	},

	// 生成相处建议
	generateCompatibilityAdvice: function (typeA, typeB, score) {
		const typeAName = typeA;
		const typeBName = typeB;

		// 根据类型组合生成具体建议
		let advice = "";

		// E/I建议
		if (typeA.charAt(0) === "E" && typeB.charAt(0) === "I") {
			advice += `作为外向型(${typeAName})，给内向型(${typeBName})足够的独处时间来恢复精力；避免把内向型的安静误解为冷漠或不感兴趣。`;
		} else if (typeA.charAt(0) === "I" && typeB.charAt(0) === "E") {
			advice += `作为内向型(${typeAName})，理解外向型(${typeBName})需要更多社交互动；尝试参与一些社交活动，但也要表达你对独处时间的需求。`;
		} else if (typeA.charAt(0) === "E" && typeB.charAt(0) === "E") {
			advice += `两人都是外向型，可以一起享受丰富的社交活动，但要注意给彼此和关系留出一些独处的空间。`;
		} else {
			advice += `两人都是内向型，能够理解彼此对独处的需求，但要注意不要过于封闭，适当参加一些社交活动以扩展共同体验。`;
		}

		advice += " ";

		// S/N建议
		if (typeA.charAt(1) === "S" && typeB.charAt(1) === "N") {
			advice += `实感型(${typeAName})应尝试理解直觉型(${typeBName})对未来可能性的关注；直觉型应尊重实感型对具体细节和现实考虑的重视。`;
		} else if (typeA.charAt(1) === "N" && typeB.charAt(1) === "S") {
			advice += `直觉型(${typeAName})应尝试具体表达想法，注意实践细节；实感型(${typeBName})可以尝试更开放地考虑新的可能性和理论。`;
		} else if (typeA.charAt(1) === "S" && typeB.charAt(1) === "S") {
			advice += `两人都是实感型，能够关注现实和细节，但要注意不要过于拘泥于现状，尝试探索新的可能性和长远规划。`;
		} else {
			advice += `两人都是直觉型，能够进行深入的概念讨论，但要注意不要忽略现实细节和实际需求。`;
		}

		return advice;
	},

	// 生成潜在挑战
	generateCompatibilityChallenges: function (typeA, typeB, score) {
		const typeAName = typeA;
		const typeBName = typeB;

		let challenges = "";

		// T/F挑战
		if (typeA.charAt(2) === "T" && typeB.charAt(2) === "F") {
			challenges += `理性型(${typeAName})可能被情感型(${typeBName})视为过于冷漠或缺乏同理心；情感型可能被理性型视为过于情绪化或非理性。`;
		} else if (typeA.charAt(2) === "F" && typeB.charAt(2) === "T") {
			challenges += `情感型(${typeAName})可能对理性型(${typeBName})的直接批评感到受伤；理性型可能不理解情感型对和谐的重视。`;
		} else if (typeA.charAt(2) === "T" && typeB.charAt(2) === "T") {
			challenges += `两人都是理性型，可能在关系中缺乏情感表达和支持，导致关系感觉冷淡。`;
		} else {
			challenges += `两人都是情感型，可能过于注重关系和谐而回避必要的冲突和问题。`;
		}

		challenges += " ";

		// J/P挑战
		if (typeA.charAt(3) === "J" && typeB.charAt(3) === "P") {
			challenges += `判断型(${typeAName})可能对探索型(${typeBName})的即兴和灵活感到不适；探索型可能觉得判断型过于僵化或控制。`;
		} else if (typeA.charAt(3) === "P" && typeB.charAt(3) === "J") {
			challenges += `探索型(${typeAName})可能被判断型(${typeBName})的计划和结构感到压力；判断型可能对探索型的即兴和拖延感到沮丧。`;
		} else if (typeA.charAt(3) === "J" && typeB.charAt(3) === "J") {
			challenges += `两人都是判断型，可能导致过度计划和缺乏自发性，有时会在决策上产生僵化。`;
		} else {
			challenges += `两人都是探索型，可能缺乏足够的结构和规划，导致项目延迟或承诺无法兑现。`;
		}

		return challenges;
	},
});
