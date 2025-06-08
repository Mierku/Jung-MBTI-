/**
 * MBTI认知功能题库
 * 包含八个认知功能：Te、Ti、Fe、Fi、Ne、Ni、Se、Si
 * 每个功能11个题目，测试时每个功能随机抽取9题
 */

const { mbtiCognitiveFunctions } = require("./mbti-utils");

const cognitiveQuestions = {
	// 外倾思维（Te）
	Te: [
		{ text: "我擅长快速制定计划并推动他人执行", function: "Te" },
		{ text: "解决问题时，我优先考虑效率和结果", function: "Te" },
		{ text: "我习惯用客观数据支撑自己的观点", function: "Te" },
		{ text: "整理文件和分类信息会让我感到满足", function: "Te" },
		{ text: "他人常说我逻辑清晰、目标明确", function: "Te" },
		{ text: "我倾向于直接指出他人的逻辑漏洞", function: "Te" },
		{ text: "拖延会让我感到焦虑", function: "Te" },
		{ text: "我享受在团队中担任组织者的角色", function: "Te" },
		{ text: "完成任务比探索理论更让我有成就感", function: "Te" },
		{ text: "我习惯用流程图或清单拆解复杂问题", function: "Te" },
		{ text: "我重视规则和系统的实用性而非美感", function: "Te" },
	],

	// 内倾思维（Ti）
	Ti: [
		{ text: "我常质疑表面结论并追求本质原理", function: "Ti" },
		{ text: "构建自洽的理论体系比解决实际问题更有趣", function: "Ti" },
		{ text: "我倾向于独立分析而非听从权威观点", function: "Ti" },
		{ text: "他人可能认为我过度纠结细节的准确性", function: "Ti" },
		{ text: "我对逻辑漏洞的容忍度极低", function: "Ti" },
		{ text: "我享受解构复杂概念并重新定义它们", function: "Ti" },
		{ text: '我常思考"为什么"而非"怎么做"', function: "Ti" },
		{ text: "我习惯用类比或模型解释抽象问题", function: "Ti" },
		{ text: "实用性不足的理论也可能让我着迷", function: "Ti" },
		{ text: "我常因追求完美逻辑而拖延行动", function: "Ti" },
		{ text: "我认为真相应独立于情感或社会共识", function: "Ti" },
	],

	// 外倾情感（Fe）
	Fe: [
		{ text: "我能敏锐感知他人的情绪变化", function: "Fe" },
		{ text: "维护群体和谐对我非常重要", function: "Fe" },
		{ text: "我习惯通过妥协避免冲突", function: "Fe" },
		{ text: "他人常说我善解人意、富有同理心", function: "Fe" },
		{ text: "我倾向于根据社会规范调整言行", function: "Fe" },
		{ text: "公开批评他人会让我感到不适", function: "Fe" },
		{ text: "我享受在聚会中照顾每个人的感受", function: "Fe" },
		{ text: "我习惯用赞美或鼓励推动他人行动", function: "Fe" },
		{ text: "集体价值观常影响我的个人决策", function: "Fe" },
		{ text: "我容易被他人情绪感染（如共情哭泣）", function: "Fe" },
		{ text: "我常主动调解朋友间的矛盾", function: "Fe" },
	],

	// 内倾情感（Fi）
	Fi: [
		{ text: "我坚持基于内心价值观做决定", function: "Fi" },
		{ text: "我常反思自己的情感和道德立场", function: "Fi" },
		{ text: "他人可能认为我过于理想化或固执", function: "Fi" },
		{ text: "虚假的社交互动会让我感到疲惫", function: "Fi" },
		{ text: "艺术或音乐能引发我强烈的情感共鸣", function: "Fi" },
		{ text: "我倾向于保护少数群体的权益", function: "Fi" },
		{ text: "我厌恶被强迫接受主流观点", function: "Fi" },
		{ text: "独处时我能更清晰地感知自我情绪", function: "Fi" },
		{ text: "我常通过创作（如写作/绘画）表达内心", function: "Fi" },
		{ text: "我的道德标准高于社会普遍要求", function: "Fi" },
		{ text: "我难以忍受违背本心的行为", function: "Fi" },
	],

	// 外倾直觉（Ne）
	Ne: [
		{ text: "我热衷于探索新领域而非深耕旧知识", function: "Ne" },
		{ text: "我常从随机事件中联想到多种可能性", function: "Ne" },
		{ text: "他人常说我思维跳跃、创意丰富", function: "Ne" },
		{ text: "我享受头脑风暴而非执行细节", function: "Ne" },
		{ text: '我对"潜在机会"的敏感度高于风险', function: "Ne" },
		{ text: "重复性工作会让我感到枯燥", function: "Ne" },
		{ text: "我常同时开展多个兴趣项目", function: "Ne" },
		{ text: "我习惯用隐喻或比喻解释观点", function: "Ne" },
		{ text: "我容易对已掌握的事物失去兴趣", function: "Ne" },
		{ text: "我倾向于通过提问而非结论推进对话", function: "Ne" },
		{ text: "未来可能性比当下现实更吸引我", function: "Ne" },
	],

	// 内倾直觉（Ni）
	Ni: [
		{ text: "我常通过直觉预判事件长期发展趋势", function: "Ni" },
		{ text: "我倾向于从碎片信息中提炼整体模式", function: "Ni" },
		{ text: "他人可能认为我神秘或难以捉摸", function: "Ni" },
		{ text: '我对"顿悟"时刻的依赖高于逐步推理', function: "Ni" },
		{ text: "我常专注于单一愿景而忽略现实干扰", function: "Ni" },
		{ text: "我习惯用象征或隐喻表达抽象概念", function: "Ni" },
		{ text: "我对深层意义的追求超过表面体验", function: "Ni" },
		{ text: "我常提前多年规划人生方向", function: "Ni" },
		{ text: "我容易陷入对哲学或玄学问题的思考", function: "Ni" },
		{ text: "我厌恶被琐碎细节打断宏观思考", function: "Ni" },
		{ text: "我坚信某些结论却难以解释推理过程", function: "Ni" },
	],

	// 外倾感觉（Se）
	Se: [
		{ text: "我高度关注环境的物理细节（如声音/色彩）", function: "Se" },
		{ text: "我享受即时体验（如美食、运动、旅行）", function: "Se" },
		{ text: "他人常说我充满活力且适应力强", function: "Se" },
		{ text: "我倾向于快速行动而非反复计划", function: "Se" },
		{ text: "我对当下的投入超过对未来的担忧", function: "Se" },
		{ text: "我容易被新奇刺激的事物吸引", function: "Se" },
		{ text: "我习惯通过实践而非理论学习", function: "Se" },
		{ text: "我擅长即兴发挥或应对突发状况", function: "Se" },
		{ text: "我追求物质享受或感官愉悦", function: "Se" },
		{ text: "我常通过肢体语言表达情绪", function: "Se" },
		{ text: "我优先处理眼前问题而非抽象议题", function: "Se" },
	],

	// 内倾感觉（Si）
	Si: [
		{ text: "我常通过回忆过去经验指导当前决策", function: "Si" },
		{ text: "稳定的生活节奏让我感到安全", function: "Si" },
		{ text: "我对细节的记忆力优于大多数人", function: "Si" },
		{ text: "我倾向于遵循已验证的传统方法", function: "Si" },
		{ text: "改变习惯会让我短期内不适应", function: "Si" },
		{ text: "我习惯通过对比新旧信息学习知识", function: "Si" },
		{ text: "我对熟悉的人或环境有强烈依恋", function: "Si" },
		{ text: "我常因怀旧情绪而保留旧物", function: "Si" },
		{ text: "我厌恶打破常规或承担风险", function: "Si" },
		{ text: "我对身体不适（如疼痛、饥饿）敏感", function: "Si" },
		{ text: "我擅长执行流程明确的重复性任务", function: "Si" },
	],
};

// 对立轴的映射关系
const oppositeFunction = {
	Te: "Ti",
	Ti: "Te",
	Fe: "Fi",
	Fi: "Fe",
	Ne: "Ni",
	Ni: "Ne",
	Se: "Si",
	Si: "Se",
};

// 生成测试题目集
function generateTestQuestions() {
	const allFunctions = ["Te", "Ti", "Fe", "Fi", "Ne", "Ni", "Se", "Si"];
	let selectedQuestions = [];

	// 对每个认知功能随机抽取9题
	allFunctions.forEach((func) => {
		const functionQuestions = cognitiveQuestions[func];
		// 随机选择9题
		const shuffled = [...functionQuestions].sort(() => 0.5 - Math.random());
		const selected = shuffled.slice(0, 9);

		// 添加到测试题集中
		selectedQuestions = [...selectedQuestions, ...selected];
	});

	// 打乱所有题目的顺序
	return selectedQuestions.sort(() => 0.5 - Math.random());
}

// 题目选项
const questionOptions = [
	{ text: "完全不同意", value: 0 },
	{ text: "比较不同意", value: 1 },
	{ text: "中立", value: 2 },
	{ text: "比较同意", value: 3 },
	{ text: "完全同意", value: 4 },
];

// 计算得分（新的计分方式）
function calculateScores(answers) {
	// 初始化所有认知功能的得分为0
	const scores = {
		Te: 0,
		Ti: 0,
		Fe: 0,
		Fi: 0,
		Ne: 0,
		Ni: 0,
		Se: 0,
		Si: 0,
	};

	// 计算每道题的得分
	answers.forEach((answer) => {
		const questionFunction = answer.function;
		const oppositeFunc = oppositeFunction[questionFunction];
		const answerValue = answer.value;

		// 根据新的计分规则计算得分
		if (answerValue === 0) {
			// 完全不同意
			scores[oppositeFunc] += 1; // 反向轴功能得1分
		} else if (answerValue === 1) {
			// 比较不同意
			scores[questionFunction] += 1;
			scores[oppositeFunc] += 1; // 反向轴功能也得1分
		} else if (answerValue === 2) {
			// 中立
			scores[questionFunction] += 1; // 从2分改为1分
		} else if (answerValue === 3) {
			// 比较同意
			scores[questionFunction] += 3; // 修改为3分
		} else if (answerValue === 4) {
			// 完全同意
			scores[questionFunction] += 4; // 修改为4分
		}
	});

	// 保存原始分数，用于对比
	const originalScores = { ...scores };

	// 计算每对对立轴的总分
	const axisTotalScores = {
		T: scores.Te + scores.Ti,
		F: scores.Fe + scores.Fi,
		N: scores.Ne + scores.Ni,
		S: scores.Se + scores.Si,
	};

	// 对维度轴总分进行排名
	const axisRanking = Object.entries(axisTotalScores)
		.sort((a, b) => b[1] - a[1])
		.map((entry) => entry[0]);

	// 根据排名应用不同的乘数
	const multipliers = {
		[axisRanking[0]]: 1.1, // 排第一的维度乘以1.2
		[axisRanking[1]]: 1.05, // 排第二的维度乘以1.1
		[axisRanking[2]]: 1.0, // 排第三的维度乘以1.0
		[axisRanking[3]]: 0.95, // 排第四的维度乘以0.9
	};

	// 应用乘数到对应的认知功能
	scores.Te = parseFloat((scores.Te * multipliers["T"]).toFixed(1));
	scores.Ti = parseFloat((scores.Ti * multipliers["T"]).toFixed(1));
	scores.Fe = parseFloat((scores.Fe * multipliers["F"]).toFixed(1));
	scores.Fi = parseFloat((scores.Fi * multipliers["F"]).toFixed(1));
	scores.Ne = parseFloat((scores.Ne * multipliers["N"]).toFixed(1));
	scores.Ni = parseFloat((scores.Ni * multipliers["N"]).toFixed(1));
	scores.Se = parseFloat((scores.Se * multipliers["S"]).toFixed(1));
	scores.Si = parseFloat((scores.Si * multipliers["S"]).toFixed(1));

	// 返回包含原始分数和加权分数的对象
	return {
		originalScores,
		weightedScores: scores,
		axisRanking,
		multipliers,
	};
}

// 确定MBTI类型
function determineMBTIType(scoreResult) {
	// 使用加权后的分数
	const scores = scoreResult.weightedScores;

	// 创建认知功能的排名
	const functionScores = [
		{ func: "Te", score: scores.Te, type: "外向", category: "T" },
		{ func: "Ti", score: scores.Ti, type: "内向", category: "T" },
		{ func: "Fe", score: scores.Fe, type: "外向", category: "F" },
		{ func: "Fi", score: scores.Fi, type: "内向", category: "F" },
		{ func: "Ne", score: scores.Ne, type: "外向", category: "N" },
		{ func: "Ni", score: scores.Ni, type: "内向", category: "N" },
		{ func: "Se", score: scores.Se, type: "外向", category: "S" },
		{ func: "Si", score: scores.Si, type: "内向", category: "S" },
	];

	// 按分数降序排序
	const rankedFunctions = [...functionScores].sort((a, b) => b.score - a.score);

	// 获取前两个最高分的认知功能
	const topFunction = rankedFunctions[0];
	const secondFunction = rankedFunctions[1];

	// 如果第一名与第二名的差距大于2分，则认为第一名是主导功能
	const scoreDifference = topFunction.score - secondFunction.score;
	const isDominantClear = scoreDifference >= 2.0;

	// 定义主导功能可能的辅助功能
	const possibleAuxiliaryFunctions = {
		// 内向思维
		Ti: ["Ne", "Se"],
		// 外向思维
		Te: ["Ni", "Si"],
		// 内向情感
		Fi: ["Ne", "Se"],
		// 外向情感
		Fe: ["Ni", "Si"],
		// 内向直觉
		Ni: ["Te", "Fe"],
		// 外向直觉
		Ne: ["Ti", "Fi"],
		// 内向感觉
		Si: ["Te", "Fe"],
		// 外向感觉
		Se: ["Ti", "Fi"],
	};

	// MBTI类型与认知功能的对应关系
	const typeByFunctions = {
		"Ti-Ne": "INTP",
		"Ti-Se": "ISTP",
		"Te-Ni": "ENTJ",
		"Te-Si": "ESTJ",
		"Fi-Ne": "INFP",
		"Fi-Se": "ISFP",
		"Fe-Ni": "ENFJ",
		"Fe-Si": "ESFJ",
		"Ni-Te": "INTJ",
		"Ni-Fe": "INFJ",
		"Ne-Ti": "ENTP",
		"Ne-Fi": "ENFP",
		"Si-Te": "ISTJ",
		"Si-Fe": "ISFJ",
		"Se-Ti": "ESTP",
		"Se-Fi": "ESFP",
	};

	if (isDominantClear) {
		// 如果主导功能明确，查找其最高分的辅助功能
		const dominantFunc = topFunction.func;
		const possibleAuxFuncs = possibleAuxiliaryFunctions[dominantFunc] || [];

		// 找出可能的辅助功能中分数最高的
		let highestAuxScore = -1;
		let bestAuxFunc = null;

		for (const func of possibleAuxFuncs) {
			const auxScore = scores[func];
			if (auxScore > highestAuxScore) {
				highestAuxScore = auxScore;
				bestAuxFunc = func;
			}
		}

		if (bestAuxFunc) {
			const functionPair = `${dominantFunc}-${bestAuxFunc}`;
			const mbtiType = typeByFunctions[functionPair];
			if (mbtiType) {
				// 找到了匹配的MBTI类型
				console.log(
					`主导功能明确: ${dominantFunc}, 辅助功能: ${bestAuxFunc}, 类型: ${mbtiType}`
				);
				return mbtiType;
			}
		}
	} else {
		// 如果第一名和第二名分数接近，比较它们对应的辅助功能
		const firstDominant = topFunction.func;
		const secondDominant = secondFunction.func;

		// 新增：检查前两个功能是否正好对应某个MBTI类型的主导和辅助功能
		// 如果是，则直接判定为该类型
		const dominantAuxPair = `${firstDominant}-${secondDominant}`;
		const mbtiType = typeByFunctions[dominantAuxPair];

		if (mbtiType) {
			console.log(
				`前两位功能 ${firstDominant}(${scores[firstDominant]}) 和 ${secondDominant}(${scores[secondDominant]}) 分数接近，` +
					`且匹配MBTI类型 ${mbtiType} 的主导-辅助功能对，直接判定为 ${mbtiType}`
			);
			return mbtiType;
		}

		// 检查反向组合（辅助-主导）是否匹配某个MBTI类型
		const auxiliaryDomPair = `${secondDominant}-${firstDominant}`;
		const reverseMbtiType = typeByFunctions[auxiliaryDomPair];

		if (reverseMbtiType) {
			console.log(
				`前两位功能 ${firstDominant}(${scores[firstDominant]}) 和 ${secondDominant}(${scores[secondDominant]}) 分数接近，` +
					`且反向匹配MBTI类型 ${reverseMbtiType} 的辅助-主导功能对，直接判定为 ${reverseMbtiType}`
			);
			return reverseMbtiType;
		}

		const firstPossibleAux = possibleAuxiliaryFunctions[firstDominant] || [];
		const secondPossibleAux = possibleAuxiliaryFunctions[secondDominant] || [];

		// 检查第一可能的主导功能的辅助功能
		let firstBestAux = null;
		let firstBestAuxScore = -1;
		for (const func of firstPossibleAux) {
			if (scores[func] > firstBestAuxScore) {
				firstBestAuxScore = scores[func];
				firstBestAux = func;
			}
		}

		// 检查第二可能的主导功能的辅助功能
		let secondBestAux = null;
		let secondBestAuxScore = -1;
		for (const func of secondPossibleAux) {
			if (scores[func] > secondBestAuxScore) {
				secondBestAuxScore = scores[func];
				secondBestAux = func;
			}
		}

		// 比较两组辅助功能的分数，差距大于1.5分视为明显
		const auxScoreDiff = Math.abs(firstBestAuxScore - secondBestAuxScore);

		if (auxScoreDiff >= 1.5) {
			// 辅助功能分数差距明显
			if (firstBestAuxScore > secondBestAuxScore) {
				// 第一可能的主导功能胜出
				const functionPair = `${firstDominant}-${firstBestAux}`;
				const mbtiType = typeByFunctions[functionPair];
				if (mbtiType) {
					console.log(
						`通过辅助功能确定: 主导=${firstDominant}, 辅助=${firstBestAux}, 类型=${mbtiType}`
					);
					return mbtiType;
				}
			} else {
				// 第二可能的主导功能胜出
				const functionPair = `${secondDominant}-${secondBestAux}`;
				const mbtiType = typeByFunctions[functionPair];
				if (mbtiType) {
					console.log(
						`通过辅助功能确定: 主导=${secondDominant}, 辅助=${secondBestAux}, 类型=${mbtiType}`
					);
					return mbtiType;
				}
			}
		}
	}

	// 如果以上方法无法确定类型，则回退到传统方法
	console.log("无法通过认知功能配对确定类型，回退到传统方法");

	// 比较各对立轴的强度确定类型
	const E_I =
		scores.Te + scores.Fe + scores.Se + scores.Ne >
		scores.Ti + scores.Fi + scores.Si + scores.Ni
			? "E"
			: "I";

	const S_N = scores.Se + scores.Si > scores.Ne + scores.Ni ? "S" : "N";

	const T_F = scores.Te + scores.Ti > scores.Fe + scores.Fi ? "T" : "F";

	const J_P =
		E_I === "E"
			? scores.Te + scores.Fe > scores.Ne + scores.Se
				? "J"
				: "P"
			: scores.Ti + scores.Fi > scores.Ni + scores.Si
			? "P"
			: "J";

	return E_I + S_N + T_F + J_P;
}

// 导出模块
module.exports = {
	cognitiveQuestions,
	oppositeFunction,
	generateTestQuestions,
	questionOptions,
	calculateScores,
	determineMBTIType,
};
