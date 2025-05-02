/**
 * MBTI题库
 * 根据题目设计文档构建，每个轴对应三种题型：日常行为、压力反应、价值观冲突
 */

// Te vs Ti 轴题目
const teVsTiQuestions = [
	// 日常行为题 - 权重1.0
	{
		question: "当需要解决复杂问题时，你更倾向于：",
		options: ["参考现有流程或权威方法", "自己推导一套新的解决框架"],
		dimension: "TeVsTi",
		category: "daily",
		weight: 1.0,
		positive: "Te",
	},
	{
		question: "你更可能如何整理文件？",
		options: ["按项目优先级和截止日期分类", "按内在逻辑关系建立标签系统"],
		dimension: "TeVsTi",
		category: "daily",
		weight: 1.0,
		positive: "Te",
	},
	{
		question: "你更可能如何分配时间？",
		options: ["按截止日期推进任务", "花时间验证每个步骤的合理性"],
		dimension: "TeVsTi",
		category: "daily",
		weight: 1.0,
		positive: "Te",
	},
	{
		question: "你更可能抱怨：",
		options: ["他们连基本流程都不遵守！", "他们根本没理解问题本质！"],
		dimension: "TeVsTi",
		category: "daily",
		weight: 1.0,
		positive: "Te",
	},
	{
		question: "你更可能阅读：",
		options: ["《高效能人士的七个习惯》", "《第一性原理思维指南》"],
		dimension: "TeVsTi",
		category: "daily",
		weight: 1.0,
		positive: "Te",
	},
	{
		question: "你更常思考：",
		options: ["如何优化现有流程？", "这个概念的准确定义是什么？"],
		dimension: "TeVsTi",
		category: "daily",
		weight: 1.0,
		positive: "Te",
	},

	// 压力反应题 - 权重1.2
	{
		question: "面对突发问题，你首先：",
		options: ["寻找可立即执行的解决方案", "追溯问题产生的根本原因"],
		dimension: "TeVsTi",
		category: "stress",
		weight: 1.2,
		positive: "Te",
	},
	{
		question: "当团队进度落后时，你更可能：",
		options: ["调整分工强制提速", "重新分析任务底层逻辑"],
		dimension: "TeVsTi",
		category: "stress",
		weight: 1.2,
		positive: "Te",
	},
	{
		question: "当他人质疑你的方案时，你优先：",
		options: ["用数据和案例证明有效性", "重新推导逻辑链的严谨性"],
		dimension: "TeVsTi",
		category: "stress",
		weight: 1.2,
		positive: "Te",
	},
	{
		question: "当发现自己的理论有矛盾时，你会：",
		options: ["暂时搁置并寻找替代方案", "彻底推翻并重建体系"],
		dimension: "TeVsTi",
		category: "stress",
		weight: 1.2,
		positive: "Te",
	},
	{
		question: "当数据出现矛盾时，你优先：",
		options: ["检查收集流程是否规范", "分析数据背后的逻辑漏洞"],
		dimension: "TeVsTi",
		category: "stress",
		weight: 1.2,
		positive: "Te",
	},
	{
		question: "当资源有限时，你更可能：",
		options: ["集中资源优先完成关键目标", "重新设计更节省资源的方案"],
		dimension: "TeVsTi",
		category: "stress",
		weight: 1.2,
		positive: "Te",
	},

	// 价值观冲突题 - 权重0.9
	{
		question: "你认为哪种批评更有价值？",
		options: ["你的方法效率太低", "你的逻辑存在漏洞"],
		dimension: "TeVsTi",
		category: "value",
		weight: 0.9,
		positive: "Te",
	},
	{
		question: "你更认同哪种说法？",
		options: ["结果证明手段的正确性", "真理往往存在于矛盾中"],
		dimension: "TeVsTi",
		category: "value",
		weight: 0.9,
		positive: "Te",
	},
	{
		question: "你更可能选择哪种工作？",
		options: ["需要高效协调资源的岗位", "需要深度逻辑分析的岗位"],
		dimension: "TeVsTi",
		category: "value",
		weight: 0.9,
		positive: "Te",
	},
	{
		question: "你更欣赏哪种领导者？",
		options: ["能快速达成目标的实干家", "能构建独特理论体系的学者"],
		dimension: "TeVsTi",
		category: "value",
		weight: 0.9,
		positive: "Te",
	},
	{
		question: "你更重视哪类成就？",
		options: ["实际取得的可量化成果", "思维体系的独创性"],
		dimension: "TeVsTi",
		category: "value",
		weight: 0.9,
		positive: "Te",
	},
	{
		question: "你更反感哪种行为？",
		options: ["明知方法低效却不愿改进", "用模糊概念掩盖逻辑缺陷"],
		dimension: "TeVsTi",
		category: "value",
		weight: 0.9,
		positive: "Te",
	},
];

// Fe vs Fi 轴题目
const feVsFiQuestions = [
	// 日常行为题 - 权重1.0
	{
		question: "社交场合中，你更关注：",
		options: ["群体氛围是否和谐", "自己是否感到舒适自在"],
		dimension: "FeVsFi",
		category: "daily",
		weight: 1.0,
		positive: "Fe",
	},
	{
		question: "你更可能如何表达关心？",
		options: ["通过实际行动照顾对方感受", "分享自己相似的内心体验"],
		dimension: "FeVsFi",
		category: "daily",
		weight: 1.0,
		positive: "Fe",
	},
	{
		question: "你更可能收藏：",
		options: ["朋友赠送的纪念品", "象征个人成长经历的物品"],
		dimension: "FeVsFi",
		category: "daily",
		weight: 1.0,
		positive: "Fe",
	},
	{
		question: "你更擅长：",
		options: ["察觉他人未说出口的情绪", "清晰描述自己的情感需求"],
		dimension: "FeVsFi",
		category: "daily",
		weight: 1.0,
		positive: "Fe",
	},
	{
		question: "你更可能如何拒绝他人？",
		options: ["找委婉的理由避免伤害对方", "直接说明真实想法"],
		dimension: "FeVsFi",
		category: "daily",
		weight: 1.0,
		positive: "Fe",
	},
	{
		question: "参加婚礼时，你更关注：",
		options: ["现场氛围是否温馨感人", "仪式是否体现新人独特性"],
		dimension: "FeVsFi",
		category: "daily",
		weight: 1.0,
		positive: "Fe",
	},

	// 压力反应题 - 权重1.2
	{
		question: "当朋友要求你支持其错误决定时，你更可能：",
		options: ["暂时支持以避免冲突", "拒绝并解释你的立场"],
		dimension: "FeVsFi",
		category: "stress",
		weight: 1.2,
		positive: "Fe",
	},
	{
		question: "当集体决策与个人价值观冲突时，你更可能：",
		options: ["暂时妥协以维持关系和谐", "坚持自己的立场"],
		dimension: "FeVsFi",
		category: "stress",
		weight: 1.2,
		positive: "Fe",
	},
	{
		question: "当他人当众批评你的朋友时，你更可能：",
		options: ["转移话题缓解尴尬", "私下支持朋友的立场"],
		dimension: "FeVsFi",
		category: "stress",
		weight: 1.2,
		positive: "Fe",
	},
	{
		question: "面对他人哭泣时，你更可能：",
		options: ["主动安慰以缓解对方情绪", "先思考对方是否需要独处"],
		dimension: "FeVsFi",
		category: "stress",
		weight: 1.2,
		positive: "Fe",
	},
	{
		question: "你更可能因为什么生气？",
		options: ["有人破坏公共场合的礼仪", "有人践踏你重视的理念"],
		dimension: "FeVsFi",
		category: "stress",
		weight: 1.2,
		positive: "Fe",
	},
	{
		question: "当朋友倾诉烦恼时，你更可能：",
		options: ["提供情感支持", "帮助对方梳理内心需求"],
		dimension: "FeVsFi",
		category: "stress",
		weight: 1.2,
		positive: "Fe",
	},

	// 价值观冲突题 - 权重0.9
	{
		question: "选择职业时，你更重视：",
		options: ["社会认可度或对他人的帮助", "是否符合个人理想或价值观"],
		dimension: "FeVsFi",
		category: "value",
		weight: 0.9,
		positive: "Fe",
	},
	{
		question: "你更认同哪种教育方式？",
		options: ["培养孩子成为受欢迎的成员", "鼓励孩子发展独特个性"],
		dimension: "FeVsFi",
		category: "value",
		weight: 0.9,
		positive: "Fe",
	},
	{
		question: "你更可能因为什么感动？",
		options: ["陌生人之间的互助行为", "坚守信念的孤独者故事"],
		dimension: "FeVsFi",
		category: "value",
		weight: 0.9,
		positive: "Fe",
	},
	{
		question: "你选择伴侣时更重视：",
		options: ["对方是否被社交圈认可", "对方是否契合你的价值观"],
		dimension: "FeVsFi",
		category: "value",
		weight: 0.9,
		positive: "Fe",
	},
	{
		question: "你更反感哪种行为？",
		options: ["不顾场合的直言不讳", "为迎合群体而伪装自己"],
		dimension: "FeVsFi",
		category: "value",
		weight: 0.9,
		positive: "Fe",
	},
	{
		question: "你更可能因为什么自责？",
		options: ["无意中伤害了他人感情", "违背了自己的原则"],
		dimension: "FeVsFi",
		category: "value",
		weight: 0.9,
		positive: "Fe",
	},
];

// Ne vs Ni 轴题目
const neVsNiQuestions = [
	// 日常行为题 - 权重1.0
	{
		question: "阅读一本书时，你更倾向于：",
		options: ["联想书中观点与其他领域的联系", "深入挖掘作者的核心意图"],
		dimension: "NeVsNi",
		category: "daily",
		weight: 1.0,
		positive: "Ne",
	},
	{
		question: "你更可能如何学习新技能？",
		options: ["同时涉猎多个相关领域", "专注研究该技能的底层规律"],
		dimension: "NeVsNi",
		category: "daily",
		weight: 1.0,
		positive: "Ne",
	},
	{
		question: "你更可能如何完成创作？",
		options: ["不断添加新灵感导致多次修改", "先构建完整框架再填充细节"],
		dimension: "NeVsNi",
		category: "daily",
		weight: 1.0,
		positive: "Ne",
	},
	{
		question: "你更可能如何规划旅行？",
		options: ["只订机票，行程随性探索", "详细规划每个节点的意义"],
		dimension: "NeVsNi",
		category: "daily",
		weight: 1.0,
		positive: "Ne",
	},
	{
		question: "讨论历史事件时，你更倾向：",
		options: ["分析其引发的连锁反应", "总结其对当下的启示"],
		dimension: "NeVsNi",
		category: "daily",
		weight: 1.0,
		positive: "Ne",
	},
	{
		question: "你更愿意阅读：",
		options: ["《100种跨界创新案例》", "《人类文明的终极走向》"],
		dimension: "NeVsNi",
		category: "daily",
		weight: 1.0,
		positive: "Ne",
	},

	// 压力反应题 - 权重1.2
	{
		question: "当面对信息不足的决策时，你更可能：",
		options: ["临时探索多种可能性", "依赖直觉选择最合理的方向"],
		dimension: "NeVsNi",
		category: "stress",
		weight: 1.2,
		positive: "Ne",
	},
	{
		question: "当原有计划被打乱时，你更可能：",
		options: ["兴奋于意外带来的新机会", "重新调整计划以回归最终目标"],
		dimension: "NeVsNi",
		category: "stress",
		weight: 1.2,
		positive: "Ne",
	},
	{
		question: "当他人质疑你的观点时，你更可能：",
		options: ["列举更多案例支持可能性", "提炼核心逻辑证明必然性"],
		dimension: "NeVsNi",
		category: "stress",
		weight: 1.2,
		positive: "Ne",
	},
	{
		question: "当遇到复杂谜题时，你更可能：",
		options: ["尝试各种解法直到偶然破解", "静心推导出唯一正确答案"],
		dimension: "NeVsNi",
		category: "stress",
		weight: 1.2,
		positive: "Ne",
	},
	{
		question: "当需要预测未来趋势时，你更擅长：",
		options: ["列举多种潜在可能性", "推导唯一最可能的结果"],
		dimension: "NeVsNi",
		category: "stress",
		weight: 1.2,
		positive: "Ne",
	},
	{
		question: "当他人提出矛盾观点时，你更可能：",
		options: ['追问"如果从其他角度会怎样？"', '追问"这背后的根本原因是什么？"'],
		dimension: "NeVsNi",
		category: "stress",
		weight: 1.2,
		positive: "Ne",
	},

	// 价值观冲突题 - 权重0.9
	{
		question: "你更认同哪种说法？",
		options: ["机会隐藏在随机探索中", "命运有既定的轨迹可循"],
		dimension: "NeVsNi",
		category: "value",
		weight: 0.9,
		positive: "Ne",
	},
	{
		question: "你认为哪种能力更重要？",
		options: ["快速联想不同领域的跨界思维", "洞察事物本质的预见能力"],
		dimension: "NeVsNi",
		category: "value",
		weight: 0.9,
		positive: "Ne",
	},
	{
		question: "你更常思考：",
		options: ["这个创意能用在哪些地方？", "这件事的终极意义是什么？"],
		dimension: "NeVsNi",
		category: "value",
		weight: 0.9,
		positive: "Ne",
	},
	{
		question: "你更可能收藏：",
		options: ["各种未完成的灵感笔记", "象征人生转折点的纪念物"],
		dimension: "NeVsNi",
		category: "value",
		weight: 0.9,
		positive: "Ne",
	},
	{
		question: "你更可能因为什么兴奋？",
		options: ["发现不同事物间的隐藏关联", "突然顿悟某个复杂规律"],
		dimension: "NeVsNi",
		category: "value",
		weight: 0.9,
		positive: "Ne",
	},
	{
		question: "你更认同哪种教学方式？",
		options: ["引导学生自主探索可能性", "传授洞察本质的思维框架"],
		dimension: "NeVsNi",
		category: "value",
		weight: 0.9,
		positive: "Ne",
	},
];

// Se vs Si 轴题目
const seVsSiQuestions = [
	// 日常行为题 - 权重1.0
	{
		question: "你更容易注意到：",
		options: ["环境中实时的细节变化", "过去经验中熟悉的模式"],
		dimension: "SeVsSi",
		category: "daily",
		weight: 1.0,
		positive: "Se",
	},
	{
		question: "你更可能如何选择餐厅？",
		options: ["被现场氛围或菜品摆盘吸引", "选择过去体验稳定的老店"],
		dimension: "SeVsSi",
		category: "daily",
		weight: 1.0,
		positive: "Se",
	},
	{
		question: "你更可能如何整理房间？",
		options: ["随性摆放但能快速找到物品", "严格按分类标签归档"],
		dimension: "SeVsSi",
		category: "daily",
		weight: 1.0,
		positive: "Se",
	},
	{
		question: "你更常被哪种艺术吸引？",
		options: ["冲击感官的现代装置", "唤起怀旧情绪的传统作品"],
		dimension: "SeVsSi",
		category: "daily",
		weight: 1.0,
		positive: "Se",
	},
	{
		question: "你更可能如何完成工作任务？",
		options: ["根据现场反馈灵活调整", "严格按过往成功经验执行"],
		dimension: "SeVsSi",
		category: "daily",
		weight: 1.0,
		positive: "Se",
	},
	{
		question: "回忆往事时，你更关注：",
		options: ["当时的感官体验（如气味、触感）", "事件对自己的长期影响"],
		dimension: "SeVsSi",
		category: "daily",
		weight: 1.0,
		positive: "Se",
	},

	// 压力反应题 - 权重1.2
	{
		question: "当需要快速应对突发状况时，你更依赖：",
		options: ["直觉性的即时反应", "既往类似场景的经验"],
		dimension: "SeVsSi",
		category: "stress",
		weight: 1.2,
		positive: "Se",
	},
	{
		question: "当需要学习新菜谱时，你更依赖：",
		options: ["动手尝试并即时调整", "严格按步骤记忆操作"],
		dimension: "SeVsSi",
		category: "stress",
		weight: 1.2,
		positive: "Se",
	},
	{
		question: "当长时间处于单调环境中，你更可能：",
		options: ["主动寻找新鲜刺激", "依赖既往习惯保持平静"],
		dimension: "SeVsSi",
		category: "stress",
		weight: 1.2,
		positive: "Se",
	},
	{
		question: "当需要放松时，你更可能：",
		options: ["通过剧烈运动释放能量", "重复既往有效的放松流程"],
		dimension: "SeVsSi",
		category: "stress",
		weight: 1.2,
		positive: "Se",
	},
	{
		question: "当熟悉的事物被突然改变时，你更可能：",
		options: ["快速适应新变化", "因打破习惯感到不安"],
		dimension: "SeVsSi",
		category: "stress",
		weight: 1.2,
		positive: "Se",
	},
	{
		question: "当需要处理大量细节时，你更擅长：",
		options: ["边做边调整优先级", "按既定流程逐步推进"],
		dimension: "SeVsSi",
		category: "stress",
		weight: 1.2,
		positive: "Se",
	},

	// 价值观冲突题 - 权重0.9
	{
		question: "你更认同哪种说法？",
		options: ["当下体验比历史记录更重要", "传统经验值得充分尊重"],
		dimension: "SeVsSi",
		category: "value",
		weight: 0.9,
		positive: "Se",
	},
	{
		question: "你更重视：",
		options: ["物质享受的质量", "生活习惯的稳定性"],
		dimension: "SeVsSi",
		category: "value",
		weight: 0.9,
		positive: "Se",
	},
	{
		question: "你更可能因为什么感动？",
		options: ["壮丽的自然景观", "承载回忆的旧物件"],
		dimension: "SeVsSi",
		category: "value",
		weight: 0.9,
		positive: "Se",
	},
	{
		question: "你更愿意参与：",
		options: ["极限运动", "家族传统仪式"],
		dimension: "SeVsSi",
		category: "value",
		weight: 0.9,
		positive: "Se",
	},
	{
		question: "你更可能收藏：",
		options: ["旅行中收集的奇特纪念品", "家族传承的旧照片"],
		dimension: "SeVsSi",
		category: "value",
		weight: 0.9,
		positive: "Se",
	},
	{
		question: "你更认同哪种生活态度？",
		options: ["尽情感受当下的每一刻", "从历史中汲取智慧"],
		dimension: "SeVsSi",
		category: "value",
		weight: 0.9,
		positive: "Se",
	},
];

/**
 * 随机从每个轴中抽取指定数量的题目
 * @param {number} questionsPerAxis - 每个轴抽取的题目数量
 * @returns {Array} - 随机抽取的题目列表
 */
function getRandomQuestions(questionsPerAxis = 18) {
	// 所有轴的题目集合
	const allAxisQuestions = [
		teVsTiQuestions,
		feVsFiQuestions,
		neVsNiQuestions,
		seVsSiQuestions,
	];

	const randomQuestions = [];

	// 从每个轴随机抽取题目
	allAxisQuestions.forEach((axisQuestions) => {
		// 随机打乱题目顺序
		const shuffledQuestions = shuffleArray([...axisQuestions]);
		// 选取指定数量的题目
		const selectedQuestions = shuffledQuestions.slice(0, questionsPerAxis);
		randomQuestions.push(...selectedQuestions);
	});

	// 再次打乱所有抽取的题目顺序
	return shuffleArray(randomQuestions);
}

/**
 * 随机打乱数组
 * @param {Array} array - 需要打乱的数组
 * @returns {Array} - 打乱后的数组
 */
function shuffleArray(array) {
	const newArray = [...array];
	for (let i = newArray.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[newArray[i], newArray[j]] = [newArray[j], newArray[i]];
	}
	return newArray;
}

/**
 * 计算MBTI测试结果
 * @param {Array} answers - 用户的答案数组，每个元素包含题目信息和选择的答案
 * @returns {Object} - MBTI测试结果
 */
function calculateMBTIResult(answers) {
	// 初始化各轴的得分
	const axisScores = {
		TeVsTi: 0,
		FeVsFi: 0,
		NeVsNi: 0,
		SeVsSi: 0,
	};

	// 每个轴的权重总和（用于计算加权平均）
	const axisWeightSum = {
		TeVsTi: 0,
		FeVsFi: 0,
		NeVsNi: 0,
		SeVsSi: 0,
	};

	// 计算每个轴的得分
	answers.forEach((answer) => {
		const { dimension, weight } = answer.question;

		// 使用已计算好的评分值（根据五级量表计算）
		// calculatedRating 是在test.js中提前计算好的
		const score = answer.calculatedRating || 0;

		// 应用权重
		axisScores[dimension] += score * weight;
		axisWeightSum[dimension] += weight;
	});

	// 计算加权平均分
	Object.keys(axisScores).forEach((axis) => {
		if (axisWeightSum[axis] > 0) {
			axisScores[axis] = axisScores[axis] / axisWeightSum[axis];
		}
	});

	// 计算倾向性
	const preferences = {
		"Te-Ti": axisScores["TeVsTi"] > 0 ? "Te" : "Ti",
		"Fe-Fi": axisScores["FeVsFi"] > 0 ? "Fe" : "Fi",
		"Ne-Ni": axisScores["NeVsNi"] > 0 ? "Ne" : "Ni",
		"Se-Si": axisScores["SeVsSi"] > 0 ? "Se" : "Si",
	};

	// 转换为百分比表示（模糊倾向判定）
	const percentages = {};
	Object.keys(axisScores).forEach((axis) => {
		// 将原始分数转换为百分比（0-100之间）
		const rawScore = Math.abs(axisScores[axis]);
		// 假设最大差值为4（按照文档的标准）
		const percentage = Math.min(100, Math.max(0, rawScore * 25)); // 乘以25使4分对应100%

		// 判断是否为模糊倾向（差异<10%）
		const isFuzzy = percentage < 10;

		// 存储计算结果
		const positive = axis.slice(0, 2); // 如TeVsTi的Te
		const negative = axis.slice(4, 6); // 如TeVsTi的Ti

		percentages[axis] = {
			percentage,
			positive,
			negative,
			preferred: axisScores[axis] > 0 ? positive : negative,
			isFuzzy,
		};
	});

	// 确定MBTI类型
	const mbtiType = determineMBTIType(preferences);

	return {
		axisScores,
		percentages,
		preferences,
		type: mbtiType,
	};
}

/**
 * 根据功能偏好确定MBTI类型
 * @param {Object} preferences - 各轴的偏好
 * @returns {string} - MBTI类型（如INFJ）
 */
function determineMBTIType(preferences) {
	// 提取各轴的偏好
	const teFi = preferences["Te-Ti"] === "Te" ? "Te" : "Ti";
	const feTi = preferences["Fe-Fi"] === "Fe" ? "Fe" : "Fi";
	const neSi = preferences["Ne-Ni"] === "Ne" ? "Ne" : "Ni";
	const niSe = preferences["Se-Si"] === "Se" ? "Se" : "Si";

	// 确定E/I: 主导功能是否为外倾（Te, Fe, Ne, Se）
	let dominantFunction;
	if (teFi === "Te" || feTi === "Fe") {
		dominantFunction = teFi === "Te" ? "Te" : "Fe";
	} else {
		dominantFunction = neSi === "Ne" ? "Ne" : "Se";
	}

	const isExtraverted = ["Te", "Fe", "Ne", "Se"].includes(dominantFunction);

	// 确定S/N: 是否偏好感觉（Se或Si）
	const isSensing =
		preferences["Se-Si"] === "Se" || preferences["Se-Si"] === "Si";

	// 确定T/F: 是否偏好思维（Te或Ti）
	const isThinking =
		preferences["Te-Ti"] === "Te" || preferences["Te-Ti"] === "Ti";

	// 确定J/P: 外倾功能是否为判断功能（Te或Fe）
	const isJudging = isExtraverted
		? preferences["Te-Ti"] === "Te" || preferences["Fe-Fi"] === "Fe"
		: preferences["Te-Ti"] === "Ti" || preferences["Fe-Fi"] === "Fi";

	return [
		isExtraverted ? "E" : "I",
		isSensing ? "S" : "N",
		isThinking ? "T" : "F",
		isJudging ? "J" : "P",
	].join("");
}

module.exports = {
	teVsTiQuestions,
	feVsFiQuestions,
	neVsNiQuestions,
	seVsSiQuestions,
	getRandomQuestions,
	calculateMBTIResult,
	determineMBTIType,
};
