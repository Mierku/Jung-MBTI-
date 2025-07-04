// MBTI深度报告数据
const mbtiReportData = {
	// INTJ - 建筑师
	INTJ: {
		highlight: "战略性思考者，有远见卓识的独立思想家",
		description:
			"作为INTJ型人格，您是稀有而有价值的策略家。您具有非凡的分析能力和创新思维，能够看到事物背后的模式和长期影响。您倾向于在内心世界中构建复杂的系统和理论，同时使用逻辑和理性来实现目标。您对知识和能力的追求是持续不断的，不断寻求提升自己和周围环境的方法。虽然有时可能显得疏远或独立，但这正是您深度思考和专注于重要目标的结果。",
		traits: [
			{
				title: "战略性思维",
				desc: "您天生善于长期规划，能够预见复杂系统中的连锁反应和潜在问题",
			},
			{
				title: "独立自主",
				desc: "您高度珍视自己的独立性，信任自己的判断胜过外界的意见或建议",
			},
			{
				title: "追求卓越",
				desc: "您对自己和他人都有极高的标准，持续追求知识和能力的提升",
			},
			{
				title: "理性决策",
				desc: "您依赖逻辑和客观分析做决定，很少受情感影响或寻求他人认同",
			},
		],
		strengths: [
			"卓越的战略规划能力",
			"深刻的洞察力和创新思维",
			"强大的分析和解决问题的能力",
			"高度的知识追求和自我提升",
			"对目标的坚定专注和执行力",
		],
		weaknesses: [
			"可能显得过于疏远或冷漠",
			"有时对他人想法过于批判",
			"可能忽视情感因素和人际关系",
			"完美主义倾向可能导致过度压力",
			"有时太过独立，难以接受帮助",
		],
		cognitiveAnalysis:
			"您的主导功能是内倾直觉(Ni)，使您能看到事物背后的模式和意义，洞察未来的可能性。辅助功能外倾思维(Te)帮助您将想法付诸实践，有效组织和执行计划。第三功能内倾情感(Fi)支持您形成个人价值观和道德判断。劣势功能外倾感觉(Se)相对较弱，可能导致您偶尔忽视当下的细节或感官体验。",
		careerOverview:
			"您适合需要战略思维、独立工作和持续学习的职业环境。理想的工作应该具有足够的复杂性来挑战您的智力，并允许您运用创新方法解决问题。您在需要系统思考、长期规划和深度分析的领域特别出色。",
		recommendedCareers: [
			{
				category: "科学与研究",
				jobs: [
					"科学研究员",
					"数据科学家",
					"系统分析师",
					"医学研究者",
					"人工智能专家",
				],
			},
			{
				category: "商业与管理",
				jobs: ["战略规划师", "管理顾问", "投资银行家", "企业家", "项目经理"],
			},
			{
				category: "技术与设计",
				jobs: [
					"软件架构师",
					"工程师",
					"城市规划师",
					"产品设计师",
					"网络安全专家",
				],
			},
		],
		idealWorkEnvironment: [
			"注重自主性和独立工作",
			"鼓励创新和战略思维",
			"提供持续学习和专业发展",
			"重视专业知识和能力",
			"明确的目标和高效的流程",
		],
		stressfulWorkEnvironment: [
			"高度社交和团队依赖的环境",
			"过度官僚或缺乏效率的组织",
			"没有创新空间的重复性工作",
			"缺乏明确方向的管理风格",
			"过多的琐事和行政任务",
		],
		relationshipStyle:
			"在人际关系中，您倾向于寻找智力上的连接和深度交流。您欣赏那些尊重您独立性、能够进行有意义对话并分享您对知识追求热情的伙伴。您通常不会急于建立关系，而是慎重选择值得投入时间和精力的人。一旦建立了信任，您会非常忠诚和投入，尽管可能不会过多表达情感。您最欣赏那些理解您直接、诚实沟通风格的伙伴，不需要过多的社交礼节。",
		communicationTips: [
			"认可他们的独立思考能力，避免微观管理",
			"提供具体、理性的反馈，避免模糊的表达",
			"尊重他们的私人空间和独处需求",
			"如果有不同意见，准备好提供充分的逻辑论证",
			"理解他们可能通过解决问题来表达关心，而非情感支持",
		],
	},

	// INTP - 逻辑学家
	INTP: {
		highlight: "创新的思想家，追求逻辑和理解的探索者",
		description:
			"作为INTP型人格，您是充满好奇心的分析者和概念思想家。您有着敏锐的洞察力，能够看到其他人可能忽略的联系和模式。您的思维方式灵活而创新，总是质疑现有的假设，寻找更深层次的理解。您通常喜欢独立工作，沉浸在解决复杂问题和探索新思路的过程中。您对知识有着无尽的渴望，总是追求理解事物如何运作的核心原理。",
		traits: [
			{
				title: "概念思维",
				desc: "您天生善于抽象思考，能够构建复杂的理论框架和思想体系",
			},
			{
				title: "逻辑分析",
				desc: "您依靠客观逻辑和理性推理，始终寻求理解事物的内在机制",
			},
			{
				title: "创新探索",
				desc: "您乐于挑战传统观点，寻找新颖的解决方案和思路",
			},
			{
				title: "独立自主",
				desc: "您高度重视自主权，喜欢按照自己的节奏和思路工作",
			},
		],
		strengths: [
			"卓越的逻辑和分析能力",
			"创新的问题解决思维",
			"对复杂系统的深刻理解",
			"强烈的求知欲和学习能力",
			"客观公正的判断力",
		],
		weaknesses: [
			"可能忽视实际细节和执行计划",
			"有时过度理论化而缺乏行动",
			"在社交场合可能感到不自在",
			"可能忽视情感因素和人际需求",
			"容易陷入过度分析的循环",
		],
		cognitiveAnalysis:
			"您的主导功能是内倾思维(Ti)，使您能够构建复杂的内部逻辑框架，分析事物的核心原理。辅助功能外倾直觉(Ne)帮助您发现多种可能性和创新想法。第三功能内倾感觉(Si)支持您从过去经验中吸取教训，注意到细节。劣势功能外倾情感(Fe)相对较弱，可能导致您在社交互动和情感表达方面面临挑战。",
		careerOverview:
			"您适合需要分析思维、创新和独立工作的职业环境。理想的工作应该具有足够的复杂性来挑战您的智力，并允许您探索新想法和概念。您在需要理论构建、系统分析和创造性问题解决的领域特别出色。",
		recommendedCareers: [
			{
				category: "技术与研究",
				jobs: [
					"数据科学家",
					"软件开发工程师",
					"系统架构师",
					"研究科学家",
					"算法专家",
				],
			},
			{
				category: "学术与理论",
				jobs: ["大学教授", "哲学家", "经济学家", "数学家", "理论物理学家"],
			},
			{
				category: "分析与战略",
				jobs: [
					"金融分析师",
					"市场研究员",
					"法律分析师",
					"政策顾问",
					"游戏设计师",
				],
			},
		],
		idealWorkEnvironment: [
			"提供独立思考和工作的自由",
			"接触复杂问题和智力挑战",
			"允许灵活的工作方式和时间",
			"重视创新和理论探索",
			"较少的层级结构和官僚作风",
		],
		stressfulWorkEnvironment: [
			"高度重复和程序化的工作",
			"缺乏创意空间的严格环境",
			"过度社交和团队导向的文化",
			"注重细节但缺乏全局视野的任务",
			"强调情感和人际政治的环境",
		],
		relationshipStyle:
			"在人际关系中，您寻求思想上的共鸣和相互理解。您欣赏那些能够参与深度讨论、尊重您独立思考空间并分享您对知识探索热情的伙伴。您通常不会急于建立关系，而是需要时间来发展信任。一旦建立了联系，您会非常忠诚，尽管可能不会频繁或明显地表达情感。您最珍视那些接受您本真自我、不会对您的思想实验或理论探索做出判断的关系。",
		communicationTips: [
			"给予他们思考和回应的时间，不要期待即时反应",
			"参与他们感兴趣的知识性讨论，展示开放的思维方式",
			"尊重他们的独立性和私人空间",
			"以逻辑而非情感为基础进行讨论",
			"理解他们可能通过分析问题而非提供情感支持来帮助他人",
		],
	},

	// ENTJ - 指挥官
	ENTJ: {
		highlight: "果断的领导者，战略规划者和坚定的执行者",
		description:
			"作为ENTJ型人格，您是天生的领导者和决策者。您具有出色的组织能力和战略思维，能够高效地规划和执行复杂项目。您的思维清晰而客观，总是关注长期目标和结果。您勇于面对挑战，在压力下表现出色，并且有能力激励他人共同实现宏大愿景。您直接而坦率的沟通风格以及追求效率和卓越的态度，使您在各种环境中都能产生重大影响。",
		traits: [
			{
				title: "战略领导",
				desc: "您天生具有指挥能力，能够制定远见卓识的计划并带领团队执行",
			},
			{
				title: "果断决策",
				desc: "您能够迅速分析情况并做出坚定的决定，不受情感干扰",
			},
			{
				title: "目标导向",
				desc: "您始终关注长期目标，能够设计和执行达成目标的有效路径",
			},
			{
				title: "高效行动",
				desc: "您重视效率和结果，不断优化流程以达到最佳绩效",
			},
		],
		strengths: [
			"出色的领导力和组织能力",
			"战略性思维和远见卓识",
			"高效解决问题的能力",
			"坚定的决断力和执行力",
			"自信沟通和说服他人的能力",
		],
		weaknesses: [
			"可能显得过于专断或不够耐心",
			"有时忽视他人情感需求",
			"可能对不同意见反应强烈",
			"追求效率可能导致人际关系紧张",
			"完美主义倾向可能带来过度工作",
		],
		cognitiveAnalysis:
			"您的主导功能是外倾思维(Te)，使您能够系统地组织外部世界，有效地规划和执行项目。辅助功能内倾直觉(Ni)帮助您洞察长期趋势和战略方向。第三功能外倾感觉(Se)支持您适应当前环境并把握机会。劣势功能内倾情感(Fi)相对较弱，可能导致您在处理个人价值观和情感考量时面临挑战。",
		careerOverview:
			"您适合需要领导能力、战略规划和高效执行的职业环境。理想的工作应该提供足够的挑战，让您能够发挥组织才能和决策能力。您在需要远见、指导和推动变革的领域特别出色。",
		recommendedCareers: [
			{
				category: "企业与管理",
				jobs: ["企业高管", "管理顾问", "项目经理", "企业家", "业务策略师"],
			},
			{
				category: "金融与法律",
				jobs: [
					"投资银行家",
					"金融总监",
					"企业律师",
					"风险投资家",
					"政策制定者",
				],
			},
			{
				category: "组织领导",
				jobs: [
					"政府官员",
					"军事指挥官",
					"大型非营利组织负责人",
					"院校领导",
					"人力资源主管",
				],
			},
		],
		idealWorkEnvironment: [
			"重视效率和结果导向的文化",
			"提供领导和决策的机会",
			"支持创新和战略思维",
			"面临复杂挑战的动态环境",
			"重视专业能力的职场氛围",
		],
		stressfulWorkEnvironment: [
			"低效或官僚化的组织",
			"缺乏明确目标的工作环境",
			"过度关注情感而非结果的文化",
			"缺乏挑战性的重复性工作",
			"权力结构不明确的组织",
		],
		relationshipStyle:
			"在人际关系中，您往往带着相同的决断力和清晰度。您重视诚实、直接的沟通，欣赏那些能够站稳立场并参与高质量讨论的人。您通常会明确表达自己的期望，并且倾向于主动解决关系中的问题。您尊重独立和能干的伙伴，愿意给予他们支持实现自己的目标。虽然您可能不总是表现得温柔体贴，但您的忠诚和承诺是毫无疑问的。您最欣赏那些理解您直接沟通方式的人，不会将您的坦率误解为无礼或冷漠。",
		communicationTips: [
			"承认他们的见解和贡献，避免不必要的争论",
			"保持简洁明了，重点关注结果和效率",
			"准备好接受直接的反馈，不要过度个人化",
			"提供有逻辑支持的建议而非模糊的意见",
			"理解他们的直接风格通常无意冒犯，而是追求效率",
		],
	},

	// ENTP - 辩论家
	ENTP: {
		highlight: "创新的思想家，充满活力的辩论者和变革推动者",
		description:
			"作为ENTP型人格，您是充满创造力和辩才的思想家。您有敏锐的头脑和强烈的好奇心，总是寻找新想法和可能性。您乐于挑战传统观念，擅长发现问题的新解决方案。您的思维敏捷而灵活，能够快速适应变化的环境和情况。您喜欢智力挑战，享受与他人进行思想交锋和辩论。虽然有时可能显得争辩好胜，但这源于您对真相和理解的不懈追求。",
		traits: [
			{
				title: "创新思维",
				desc: "您善于产生新想法，看到常规思维之外的可能性和联系",
			},
			{
				title: "辩论能力",
				desc: "您天生具有出色的辩论技巧，能够从多角度分析和讨论问题",
			},
			{
				title: "适应力强",
				desc: "您能够轻松适应新环境和情况，在变化中看到机遇",
			},
			{
				title: "好奇探索",
				desc: "您对广泛的领域保持着强烈的好奇心，不断寻求新知识",
			},
		],
		strengths: [
			"卓越的创新和问题解决能力",
			"出色的沟通和说服技巧",
			"快速学习和适应新概念",
			"在复杂情况下保持冷静的能力",
			"激发他人创造性思维的能力",
		],
		weaknesses: [
			"可能缺乏执行力和后续跟进",
			"有时过于理论化而忽视实际细节",
			"可能因追求辩论而显得好争论",
			"在常规任务中可能感到厌烦",
			"有时难以做出最终决定",
		],
		cognitiveAnalysis:
			"您的主导功能是外倾直觉(Ne)，使您能够看到各种可能性和创新想法。辅助功能内倾思维(Ti)帮助您分析和评估这些想法的逻辑性。第三功能外倾情感(Fe)支持您理解他人的需求和价值观。劣势功能内倾感觉(Si)相对较弱，可能导致您在处理细节和日常事务时面临挑战。",
		careerOverview:
			"您适合需要创新思维、解决问题和应对挑战的职业环境。理想的工作应该提供知识探索、创意表达和变革的机会。您在需要新想法、适应性强和概念性思维的领域特别出色。",
		recommendedCareers: [
			{
				category: "创新与战略",
				jobs: [
					"企业战略师",
					"创新顾问",
					"创业者",
					"营销策略师",
					"产品开发经理",
				],
			},
			{
				category: "信息与技术",
				jobs: [
					"软件开发者",
					"系统架构师",
					"技术顾问",
					"数据科学家",
					"人工智能研究员",
				],
			},
			{
				category: "思想与表达",
				jobs: ["律师", "政治顾问", "作家", "媒体策划", "高校教授"],
			},
		],
		idealWorkEnvironment: [
			"鼓励创新和智力探索",
			"重视多样化的任务和挑战",
			"允许灵活性和自主权",
			"提供与聪明人交流的机会",
			"支持测试新想法的文化",
		],
		stressfulWorkEnvironment: [
			"严格程序化的工作结构",
			"重复性强且缺乏变化的任务",
			"过度关注细节的微管理",
			"抵制新想法的保守环境",
			"缺乏智力刺激的工作",
		],
		relationshipStyle:
			"在人际关系中，您寻求智力刺激和开放交流。您欣赏那些能够跟上您思维节奏、参与深度讨论并挑战您想法的伙伴。您通常展现出活力四射和幽默感，喜欢保持关系的新鲜感和刺激性。您重视独立性，同时也需要空间来探索自己的兴趣。您可能不是最情感化的伴侣，但您的创造力和热情使关系充满活力。您最欣赏那些理解您好奇探索本性并不将您的辩论挑战视为个人攻击的人。",
		communicationTips: [
			"尊重他们对智力自由的需求，避免强制一致性",
			"参与他们的思想实验，不要对创新想法过早下判断",
			"准备接受辩论和挑战，不要将其视为个人冒犯",
			"理解他们可能喜欢探索多种可能性而非立即做决定",
			"欣赏他们的幽默感和创造力，即使在严肃情境中",
		],
	},

	// INFJ - 提倡者
	INFJ: {
		highlight: "富有洞察力的理想主义者，追求意义和连接的和谐使者",
		description:
			"作为INFJ型人格，您是一位有远见卓识的理想主义者，具有深刻的洞察力和同理心。您能够直观地理解人和情境，往往能感知他人的情感和需求，即使它们尚未被明确表达。您追求意义和目标，希望以自己的方式为世界带来积极影响。您的内心世界丰富而复杂，同时您也非常重视与他人的真实连接。虽然您通常保持低调和私密，但当为自己信仰的事业发声时，您能展现出惊人的热情和说服力。",
		traits: [
			{
				title: "深刻洞察",
				desc: "您能够直观地理解人和情境的本质，看到表面之下的真相",
			},
			{
				title: "同理共情",
				desc: "您天生能够理解他人的情感和需求，建立真实的情感连接",
			},
			{
				title: "理想主义",
				desc: "您追求更美好的世界和更高的意义，有强烈的使命感",
			},
			{
				title: "创意思维",
				desc: "您具有独特的想象力和创造性解决问题的能力",
			},
		],
		strengths: [
			"深刻的洞察力和直觉",
			"强烈的同理心和理解能力",
			"出色的沟通和写作技巧",
			"坚定的价值观和道德准则",
			"对他人需求的敏感性",
		],
		weaknesses: [
			"可能过度理想化或完美主义",
			"有时会过度为他人着想而忽略自己",
			"可能对批评过于敏感",
			"在压力下可能过度封闭",
			"有时难以处理实际细节和日常事务",
		],
		cognitiveAnalysis:
			"您的主导功能是内倾直觉(Ni)，使您能够看到事物深层次的意义和模式，预见未来发展方向。辅助功能外倾情感(Fe)帮助您理解和调和他人的情感需求，建立和谐关系。第三功能内倾思维(Ti)支持您进行独立的逻辑分析。劣势功能外倾感觉(Se)相对较弱，可能导致您在应对即时现实和感官细节时面临挑战。",
		careerOverview:
			"您适合能够发挥创意、服务他人并符合个人价值观的职业环境。理想的工作应该提供意义感和成长机会，允许您为他人福祉做出贡献。您在需要洞察力、创造力和人际理解的领域特别出色。",
		recommendedCareers: [
			{
				category: "咨询与治疗",
				jobs: [
					"心理咨询师",
					"职业顾问",
					"家庭治疗师",
					"社会工作者",
					"生涯规划师",
				],
			},
			{
				category: "教育与发展",
				jobs: ["教师", "导师", "培训师", "教育顾问", "特殊教育工作者"],
			},
			{
				category: "创意与表达",
				jobs: ["作家", "编辑", "内容创作者", "艺术治疗师", "纪录片制作人"],
			},
		],
		idealWorkEnvironment: [
			"重视创意和个人贡献的文化",
			"提供帮助他人成长的机会",
			"安静、和谐的工作氛围",
			"明确的使命和价值观",
			"允许深度思考和独立工作",
		],
		stressfulWorkEnvironment: [
			"高度竞争或冲突的环境",
			"价值观冲突的工作文化",
			"过度关注短期利益的组织",
			"缺乏意义感的重复性工作",
			"嘈杂、过度刺激的环境",
		],
		relationshipStyle:
			"在人际关系中，您寻求深度和真实的连接。您喜欢有意义的交流，而非表面的社交活动。您善于倾听和理解他人，能够建立深厚的情感联系。您通常会慎重选择朋友和伴侣，但一旦建立关系，您会非常忠诚和投入。您欣赏那些尊重您需要独处时间同时能够分享深刻思想的伙伴。您有时可能过于理想化关系，需要平衡理想与现实。您最珍视那些理解您敏感而复杂内心世界的真诚关系。",
		communicationTips: [
			"尊重他们的隐私和独处需求",
			"进行有深度的一对一交流，避免表面社交",
			"表达真实感受，他们能感知不真诚",
			"给予他们时间处理信息和形成观点",
			"欣赏他们的洞察力和直觉，不要轻易驳回",
		],
	},

	// INFP - 调停者
	INFP: {
		highlight: "富有同情心的理想主义者，寻找内在和外在和谐的梦想家",
		description:
			"作为INFP型人格，您是一位充满热情和创造力的理想主义者。您具有强烈的个人价值观和深厚的同情心，始终追求真实性和意义。您往往有丰富的内心世界，充满想象力和深度思考。您特别关注人类潜能和个人成长，希望通过自己的方式帮助创造一个更美好、更和谐的世界。虽然您可能外表安静或保留，但您的内心充满热情，特别是当涉及到您深切关心的事物时。",
		traits: [
			{
				title: "理想主义",
				desc: "您对世界和人性持有乐观的理想愿景，追求和平与和谐",
			},
			{
				title: "创意想象",
				desc: "您拥有丰富的内心世界和想象力，常有独特的创意见解",
			},
			{
				title: "价值导向",
				desc: "您有强烈的个人价值观，这些价值观指导着您的决策和行动",
			},
			{
				title: "真实表达",
				desc: "您重视真实性和个人表达，努力保持自己的独特性",
			},
		],
		strengths: [
			"深厚的同理心和人文关怀",
			"创造性思维和独特视角",
			"强烈的道德感和个人价值观",
			"适应力和开放心态",
			"善于语言表达和创意写作",
		],
		weaknesses: [
			"可能过于理想化而不切实际",
			"有时难以做出艰难决定",
			"可能对批评过度敏感",
			"在压力下容易情绪化",
			"实际执行和细节管理可能有挑战",
		],
		cognitiveAnalysis:
			"您的主导功能是内倾情感(Fi)，使您形成强烈的个人价值观和道德准则，深刻理解自己和他人的情感世界。辅助功能外倾直觉(Ne)帮助您看到各种可能性和创意想法，探索不同的选择。第三功能内倾感觉(Si)支持您从过去经验中学习，珍视传统和熟悉的事物。劣势功能外倾思维(Te)相对较弱，可能导致您在组织、规划和客观决策方面面临挑战。",
		careerOverview:
			"您适合能够表达创意、体现个人价值观并帮助他人的职业环境。理想的工作应该有意义且符合您的信念，提供灵活性和创造性表达的空间。您在需要同理心、创造力和个人接触的领域特别出色。",
		recommendedCareers: [
			{
				category: "创意与表达",
				jobs: ["作家", "诗人", "艺术家", "音乐家", "电影制作人"],
			},
			{
				category: "咨询与支持",
				jobs: [
					"心理咨询师",
					"社会工作者",
					"生涯顾问",
					"人道主义工作者",
					"艺术治疗师",
				],
			},
			{
				category: "教育与发展",
				jobs: [
					"语言教师",
					"特殊教育工作者",
					"人格发展导师",
					"替代教育工作者",
					"图书管理员",
				],
			},
		],
		idealWorkEnvironment: [
			"重视个人价值和信念的组织",
			"提供创意自由和表达空间",
			"支持个人发展和成长",
			"和谐、非竞争性的氛围",
			"有意义且能帮助他人的工作",
		],
		stressfulWorkEnvironment: [
			"高度结构化和官僚的环境",
			"强调数据和逻辑而忽视人的价值",
			"充满冲突和对抗的文化",
			"纯粹利润导向的企业",
			"没有创意空间的重复性工作",
		],
		relationshipStyle:
			"在人际关系中，您寻求真实、深度和意义。您重视那些能够理解和接受您真实自我的关系，不需要伪装或迎合他人期望。您通常会慢慢敞开心扉，但一旦信任建立，您能够分享您丰富的内心世界。您善于倾听和支持他人，能够真诚地理解不同视角。您重视个人空间和独立性，同时渴望有意义的连接。您最珍视那些尊重您的价值观、欣赏您独特性并愿意一同成长的关系。",
		communicationTips: [
			"尊重他们的情感和价值观，即使与您不同",
			"提供安全的环境让他们表达想法和感受",
			"避免过于直接的批评或冲突",
			"理解他们可能需要时间独处和反思",
			"欣赏他们的创意和独特视角，不要试图强行使其符合常规",
		],
	},

	// ENFJ - 主人公
	ENFJ: {
		highlight: "热情的领导者，富有感召力的激励者和人际关系催化剂",
		description:
			"作为ENFJ型人格，您是天生的领导者和引导者，具有影响和激励他人的特殊能力。您温暖、有同情心，善于理解他人的需求和动机。您有很强的使命感，总是致力于帮助他人实现潜能和提高集体福祉。您思考全局，有远见卓识，能够为团队或组织指明方向。您的沟通能力出色，能够表达复杂想法并促进理解与合作。您对人际和谐非常重视，愿意投入大量精力维护关系和解决冲突。",
		traits: [
			{
				title: "人际领导",
				desc: "您能够激励和引导他人，创造积极的氛围并促进团队协作",
			},
			{
				title: "情感共鸣",
				desc: "您能准确感知他人的情感状态，自然地调整沟通方式以建立联系",
			},
			{
				title: "使命驱动",
				desc: "您由内在的目标和价值观驱动，希望为他人和社会带来积极影响",
			},
			{
				title: "整合协调",
				desc: "您善于整合不同观点，促进共识和和谐的团队动力",
			},
		],
		strengths: [
			"卓越的沟通和演讲能力",
			"自然的领导力和组织才能",
			"强烈的同理心和人际理解",
			"积极解决问题的态度",
			"激励和影响他人的能力",
		],
		weaknesses: [
			"可能过度关注他人而忽视自己需求",
			"有时难以接受负面反馈",
			"在冲突中可能过于妥协",
			"可能对他人期望过高",
			"工作过度的倾向",
		],
		cognitiveAnalysis:
			"您的主导功能是外倾情感(Fe)，使您能够自然地理解和调和他人的情感需求，建立和谐的人际关系。辅助功能内倾直觉(Ni)帮助您洞察未来可能性和潜在模式，形成长远愿景。第三功能外倾感觉(Se)支持您适应当前环境并把握机会。劣势功能内倾思维(Ti)相对较弱，可能导致您在纯客观分析和批判性思考方面面临挑战。",
		careerOverview:
			"您适合需要人际交往、团队合作和领导能力的职业环境。理想的工作应该允许您影响他人、创造积极变化并体现您的价值观。您在需要沟通、激励和人际协调的领域特别出色。",
		recommendedCareers: [
			{
				category: "教育与指导",
				jobs: ["教师", "职业教练", "培训师", "学校管理者", "教育顾问"],
			},
			{
				category: "人际服务",
				jobs: [
					"人力资源专家",
					"公关经理",
					"非营利组织领导",
					"社区组织者",
					"客户关系经理",
				],
			},
			{
				category: "健康与发展",
				jobs: [
					"健康教育工作者",
					"职业治疗师",
					"组织发展顾问",
					"康复辅导员",
					"健康管理师",
				],
			},
		],
		idealWorkEnvironment: [
			"团队导向、重视合作的文化",
			"提供帮助他人和社会的机会",
			"支持个人和专业发展",
			"重视积极沟通的组织",
			"有明确使命感的工作",
		],
		stressfulWorkEnvironment: [
			"高度竞争和冲突的环境",
			"缺乏人际互动的孤立工作",
			"价值观冲突的组织文化",
			"缺乏变革机会的僵化结构",
			"过于关注数据而忽视人的需求",
		],
		relationshipStyle:
			"在人际关系中，您通常扮演着关怀者和调和者的角色。您有天赋理解他人的需求和感受，总是愿意提供情感支持和实际帮助。您重视深度连接和有意义的对话，希望与伴侣建立互相成长的关系。您倾向于主动解决冲突，维护和谐。您对亲密关系非常投入，有时甚至可能过度牺牲自己的需求。您最珍视那些能够理解您服务他人天性同时也提醒您关注自身需求的关系。",
		communicationTips: [
			"分享您的真实想法和需求，他们重视真诚",
			"欣赏他们的关怀和支持，不要视为理所当然",
			"鼓励他们也关注自己的需求",
			"在提出批评时保持建设性，记住他们可能对批评敏感",
			"在重大决策中征求他们的意见，他们擅长看到对所有人的影响",
		],
	},

	// ENFP - 活动家
	ENFP: {
		highlight: "热情洋溢的创新者，富有想象力的探险家和可能性催化剂",
		description:
			"作为ENFP型人格，您是充满活力和创造力的自由思想家。您对可能性充满热情，总是寻求新体验和想法。您能快速看到连接和模式，擅长将不同概念融合成创新解决方案。您有很强的人际交往能力，能够与各种人建立联系，真诚关心他人的福祉和成长。您具有感染力的热情和乐观使您成为天然的激励者。您重视真实性和自我表达，渴望通过自己独特的贡献使世界变得更美好。",
		traits: [
			{
				title: "创意思维",
				desc: "您能够看到常规思维之外的可能性，产生创新想法和独特视角",
			},
			{
				title: "社交魅力",
				desc: "您充满活力和热情，能够自然地吸引他人并建立广泛的人际网络",
			},
			{
				title: "适应灵活",
				desc: "您能够轻松适应不同环境和情况，在变化中看到机遇而非威胁",
			},
			{
				title: "真实表达",
				desc: "您重视自我表达和真实性，鼓励他人也展现真实的自我",
			},
		],
		strengths: [
			"出色的创造力和想象力",
			"天然的沟通和人际交往能力",
			"解决问题的创新方法",
			"对新想法和变化的开放态度",
			"激励和团结他人的能力",
		],
		weaknesses: [
			"可能难以长期专注和完成项目",
			"有时过于分散注意力",
			"可能不擅长处理细节和日常事务",
			"在决策中可能犹豫不决",
			"过度承诺的倾向",
		],
		cognitiveAnalysis:
			"您的主导功能是外倾直觉(Ne)，使您能够看到各种可能性和创新想法，建立不同概念之间的联系。辅助功能内倾情感(Fi)帮助您形成强烈的个人价值观和深刻的情感理解。第三功能外倾思维(Te)支持您组织想法并做出实际决策。劣势功能内倾感觉(Si)相对较弱，可能导致您在日常细节、惯例和遵循既定程序方面面临挑战。",
		careerOverview:
			"您适合能够发挥创意、提供多样性和人际互动的职业环境。理想的工作应该灵活多变，允许您探索新想法并与他人积极合作。您在需要创新思维、适应性和人际技巧的领域特别出色。",
		recommendedCareers: [
			{
				category: "创意与表达",
				jobs: ["创意总监", "营销专家", "作家", "艺术家", "内容创作者"],
			},
			{
				category: "教育与发展",
				jobs: ["教师", "职业顾问", "教育创新者", "人才发展专家", "创意教练"],
			},
			{
				category: "人际服务",
				jobs: [
					"公关专家",
					"活动策划师",
					"人力资源顾问",
					"非营利组织工作",
					"创业顾问",
				],
			},
		],
		idealWorkEnvironment: [
			"鼓励创新和实验的文化",
			"灵活多变的工作内容",
			"充满活力的团队氛围",
			"重视个人贡献和自主性",
			"有意义且符合价值观的工作",
		],
		stressfulWorkEnvironment: [
			"严格规范和官僚的组织",
			"高度重复的常规工作",
			"缺乏创意空间的环境",
			"过度关注细节和规则",
			"孤立的工作条件",
		],
		relationshipStyle:
			"在人际关系中，您充满热情和支持，珍视有意义的连接和真实对话。您自然地吸引各种人，通常扮演着激励者和联系人的角色。您重视独立性和成长，同时也深度投入到关心的人身上。您欣赏那些能够接受您热情本性同时也理解您偶尔需要独处时间的伙伴。您喜欢在关系中保持一定的自发性和冒险精神，避免陷入沉闷的常规。您最珍视那些既能分享您对可能性的热情，又能在您分心时给予温和提醒的关系。",
		communicationTips: [
			"尊重他们的想法和创意，即使看起来不切实际",
			"给予他们自由探索的空间，避免过多限制",
			"在需要专注完成任务时提供友善提醒",
			"欣赏他们的热情和社交能力",
			"在讨论中保持开放心态，准备接受意想不到的方向转变",
		],
	},

	// ISTJ - 物流师
	ISTJ: {
		highlight: "可靠的实践者，尽职尽责的组织者和传统守护者",
		description:
			"作为ISTJ型人格，您是一位踏实可靠、尽职尽责的实践者。您重视秩序、稳定性和传统，喜欢在明确的结构中工作。您注重细节，有极强的责任感，总是会信守承诺并完成任务。您依靠丰富的经验和实际知识做出决策，倾向于选择经过验证的方法。您的逻辑思维和系统性使您能够高效处理复杂任务。虽然您可能看起来严肃或保守，但您对家人和亲近的人有着深厚的关怀和忠诚。",
		traits: [
			{
				title: "责任可靠",
				desc: "您高度重视责任和承诺，总是努力履行义务和完成任务",
			},
			{
				title: "逻辑系统",
				desc: "您依靠清晰的逻辑和系统化思维解决问题和组织信息",
			},
			{
				title: "注重细节",
				desc: "您对细节有敏锐的关注力，能够发现和纠正他人可能忽视的问题",
			},
			{
				title: "务实高效",
				desc: "您关注实际结果和效率，偏好经过验证的方法和程序",
			},
		],
		strengths: [
			"出色的组织和规划能力",
			"高度的可靠性和责任感",
			"细致的注意力和准确性",
			"实用的问题解决方法",
			"坚定的忠诚和承诺",
		],
		weaknesses: [
			"可能过于僵化或不愿改变",
			"有时对新想法持怀疑态度",
			"可能忽视长期愿景",
			"在情感表达方面可能有所保留",
			"有时过于严格或批判",
		],
		cognitiveAnalysis:
			"您的主导功能是内倾感觉(Si)，使您能够记住和重视过去的经验，注意细节并保持传统和稳定性。辅助功能外倾思维(Te)帮助您有效组织外部世界，做出逻辑决策并执行计划。第三功能内倾情感(Fi)支持您形成个人价值观和道德判断。劣势功能外倾直觉(Ne)相对较弱，可能导致您在应对抽象概念和探索多种可能性时面临挑战。",
		careerOverview:
			"您适合有明确结构、重视准确性和可靠性的职业环境。理想的工作应该有清晰的期望和程序，允许您运用分析能力和注重细节的特质。您在需要系统性思维、坚实执行力和高度责任感的领域特别出色。",
		recommendedCareers: [
			{
				category: "管理与行政",
				jobs: ["项目经理", "后勤管理员", "行政主管", "质量控制专家", "合规官"],
			},
			{
				category: "财务与法律",
				jobs: ["会计师", "审计师", "金融分析师", "法律顾问", "税务专家"],
			},
			{
				category: "技术与数据",
				jobs: [
					"数据库管理员",
					"系统分析师",
					"网络安全专家",
					"质量保证测试员",
					"技术文档专员",
				],
			},
		],
		idealWorkEnvironment: [
			"有明确结构和程序的组织",
			"重视准确性和可靠性",
			"提供稳定性和安全感",
			"尊重传统和经验",
			"有序且低干扰的工作环境",
		],
		stressfulWorkEnvironment: [
			"频繁变化或混乱的环境",
			"缺乏明确指导的工作",
			"过度理论化而不实际",
			"要求频繁即兴发挥",
			"情感化的决策过程",
		],
		relationshipStyle:
			"在人际关系中，您是忠诚和可靠的伙伴。您重视稳定性和承诺，会竭尽全力履行责任和义务。您通常不会频繁或夸张地表达情感，但通过实际行动展示关心和爱。您欣赏清晰的期望和诚实的沟通，不喜欢混乱或戏剧性。您需要时间建立信任，但一旦信任建立，您的忠诚度极高。您最珍视那些理解您务实本性、欣赏您可靠特质并尊重您独立性的关系。",
		communicationTips: [
			"尊重他们的需求和偏好的稳定性",
			"保持清晰和直接的沟通方式",
			"避免突然的变化，提前告知计划修改",
			"欣赏他们的可靠性和实际贡献",
			"理解他们可能需要时间适应新想法或情况",
		],
	},

	// ISFJ - 守卫者
	ISFJ: {
		highlight: "尽职尽责的保护者，细心体贴的守护者和传统维护者",
		description:
			"作为ISFJ型人格，您是一位尽职尽责、体贴入微的保护者。您天生具有强烈的责任感和服务意识，总是愿意为他人提供实际帮助和支持。您注重细节，有出色的观察力，能够察觉他人的需求和情感变化。您珍视传统和稳定性，通常依靠过去的经验做出决策。您通常谦逊低调，更喜欢通过行动而非言语表达关怀。您对家人和朋友有着深厚的忠诚和奉献精神，在确保他人舒适和安全方面找到满足感。",
		traits: [
			{
				title: "细心体贴",
				desc: "您对他人的需求和情感有很强的洞察力，主动提供帮助和支持",
			},
			{
				title: "责任可靠",
				desc: "您有很强的责任感，总是可以被信赖去完成承诺的事情",
			},
			{
				title: "注重细节",
				desc: "您能够注意到细微之处，确保一切井然有序并照顾到所有细节",
			},
			{
				title: "实际顾家",
				desc: "您注重实际需求的满足，为创造温馨舒适的环境而努力",
			},
		],
		strengths: [
			"出色的实际照顾和支持能力",
			"可靠的责任感和细致入微",
			"强烈的同理心和共情能力",
			"出色的观察力和记忆力",
			"耐心和坚定的毅力",
		],
		weaknesses: [
			"可能过度为他人牺牲自己",
			"有时难以拒绝或设立界限",
			"可能过度强调传统和常规",
			"对变化可能感到不舒适",
			"容易过度担忧或压力",
		],
		cognitiveAnalysis:
			"您的主导功能是内倾感觉(Si)，使您能够记住和重视过去的经验，注意细节并保持传统和稳定性。辅助功能外倾情感(Fe)帮助您理解和协调他人的情感需求，创造和谐的人际关系。第三功能内倾思维(Ti)支持您进行独立的逻辑分析。劣势功能外倾直觉(Ne)相对较弱，可能导致您在应对抽象概念和探索多种可能性时面临挑战。",
		careerOverview:
			"您适合能够发挥关怀特质、注重细节和责任感的职业环境。理想的工作应该提供稳定性和结构，允许您帮助他人并看到您努力的具体成果。您在需要耐心、准确性和人际敏感性的领域特别出色。",
		recommendedCareers: [
			{
				category: "健康与照护",
				jobs: ["护士", "医疗技术员", "营养师", "幼教老师", "老年护理专家"],
			},
			{
				category: "行政与支持",
				jobs: [
					"行政助理",
					"办公室经理",
					"人力资源专员",
					"客户服务代表",
					"活动协调员",
				],
			},
			{
				category: "社会服务",
				jobs: [
					"社会工作者",
					"辅导员",
					"家庭支持专家",
					"社区服务协调员",
					"图书管理员",
				],
			},
		],
		idealWorkEnvironment: [
			"有明确结构和程序的组织",
			"温暖、支持性的团队氛围",
			"能够看到帮助他人的直接成果",
			"稳定的工作环境和职责",
			"重视细节和质量的文化",
		],
		stressfulWorkEnvironment: [
			"频繁变化或不可预测的环境",
			"高度竞争或冲突的氛围",
			"缺乏明确指导的工作",
			"需要广泛理论化的职位",
			"忽视人际关系的环境",
		],
		relationshipStyle:
			"在人际关系中，您是温暖、忠诚和支持性的伙伴。您通过实际行动和周到的关怀展示爱意，总是记得重要细节和偏好。您重视和谐与稳定，愿意付出极大努力维护关系。您倾向于深度而持久的友谊，而非广泛的社交网络。您可能不善于直接表达需求或设立界限，有时会牺牲自己来满足他人。您最珍视那些能够欣赏您的奉献精神、回应您的关怀并尊重您需要稳定性和安全感的关系。",
		communicationTips: [
			"表达对他们付出的感谢和认可",
			"给予明确的反馈和期望",
			"尊重他们对传统和熟悉事物的重视",
			"鼓励他们表达个人需求和设立健康界限",
			"在提出变化时给予充分的解释和调整时间",
		],
	},

	// ESTJ - 总经理
	ESTJ: {
		highlight: "实际果断的管理者，高效的组织者和传统执行者",
		description:
			"作为ESTJ型人格，您是一位坚定自信、实际果断的管理者。您擅长组织人和资源，确保任务高效完成。您重视传统、秩序和可靠性，相信清晰的规则和结构是成功的基础。您以直接、诚实的方式沟通，并期望同样的回应。您具有强烈的责任感，总是愿意承担领导角色并确保一切按计划进行。您的决策通常基于逻辑和已证实的方法，而非理论或假设。尽管有时可能显得过于直接，但您的目标始终是实现高效率和可靠的结果。",
		traits: [
			{
				title: "组织管理",
				desc: "您天生擅长组织资源和人员，创建有效的系统和流程",
			},
			{
				title: "实用高效",
				desc: "您关注实际结果和效率，偏好经过验证的方法",
			},
			{
				title: "责任担当",
				desc: "您愿意承担责任，确保任务完成并达到高标准",
			},
			{
				title: "直接诚实",
				desc: "您采用直接、坦率的沟通方式，重视清晰和诚实",
			},
		],
		strengths: [
			"出色的组织和规划能力",
			"强大的领导力和决断力",
			"高度的责任感和可靠性",
			"实用的问题解决方法",
			"高效执行计划的能力",
		],
		weaknesses: [
			"可能显得过于武断或固执",
			"有时对情感因素不够敏感",
			"可能对变化和新方法持抵触态度",
			"有时对细节过于关注而忽视大局",
			"在压力下可能过度控制",
		],
		cognitiveAnalysis:
			"您的主导功能是外倾思维(Te)，使您能够系统地组织外部世界，高效地管理资源和执行计划。辅助功能内倾感觉(Si)帮助您重视传统、细节和过去的经验。第三功能外倾直觉(Ne)支持您在必要时考虑新的可能性。劣势功能内倾情感(Fi)相对较弱，可能导致您在理解个人价值观和深层情感方面面临挑战。",
		careerOverview:
			"您适合需要管理能力、效率和结构的职业环境。理想的工作应该有明确的目标和责任，允许您组织资源和领导团队。您在需要秩序、程序和可靠领导的领域特别出色。",
		recommendedCareers: [
			{
				category: "管理与行政",
				jobs: ["企业管理者", "项目经理", "运营总监", "行政主管", "物流经理"],
			},
			{
				category: "金融与法律",
				jobs: ["财务总监", "银行经理", "房地产经纪人", "审计师", "法务经理"],
			},
			{
				category: "公共服务",
				jobs: ["警官", "军事指挥官", "学校行政人员", "政府官员", "安全主管"],
			},
		],
		idealWorkEnvironment: [
			"有明确结构和程序的组织",
			"重视效率和结果的文化",
			"提供领导和管理的机会",
			"明确的责任和期望",
			"尊重传统和经验的环境",
		],
		stressfulWorkEnvironment: [
			"混乱无序或频繁变化的环境",
			"缺乏明确目标或结构的工作",
			"过度理论化而缺乏实践",
			"决策过程缓慢的组织",
			"重情感而轻逻辑的文化",
		],
		relationshipStyle:
			"在人际关系中，您通常采取领导或组织者的角色。您重视诚实、明确和可靠，希望关系有清晰的期望和责任。您通过实际行动和解决问题来表达关心，而非情感表达。您欣赏那些直接、可靠并能做出贡献的伙伴。您在关系中可能显得直接务实，但您的忠诚和承诺是坚定不移的。您最珍视那些理解您务实本性，欣赏您的组织能力，同时能够提醒您考虑情感因素的关系。",
		communicationTips: [
			"在交流时注意软化语气，尤其是提出批评时",
			"给予明确而具体的反馈，避免模糊表达",
			"尊重他们对效率和时间管理的重视",
			"理解他们的直接风格通常无意冒犯",
			"偶尔鼓励他们考虑情感因素和灵活性",
		],
	},

	// ESFJ - 执政官
	ESFJ: {
		highlight: "热心周到的社交组织者，和谐建立者和传统维护者",
		description:
			"作为ESFJ型人格，您是一位热情友好、注重社交和谐的人。您天生关心他人的福祉，能够敏锐地察觉并满足周围人的需求。您重视传统、责任和明确的社会准则，通常成为社区和家庭中的支柱。您擅长组织活动和照顾细节，确保每个人都感到受欢迎和被关注。您渴望赞赏和认可，因为您投入大量精力维护和谐关系。您实际而善解人意，总是愿意提供实质性帮助和情感支持给您关心的人。",
		traits: [
			{
				title: "社交关怀",
				desc: "您热爱与人交往，对他人的需求和感受敏感体贴",
			},
			{
				title: "责任可靠",
				desc: "您高度重视责任和承诺，总是可以被依赖去兑现诺言",
			},
			{
				title: "组织能力",
				desc: "您擅长组织活动和资源，确保万无一失的准备和执行",
			},
			{
				title: "传统尊重",
				desc: "您重视传统、社会准则和既定的做事方式",
			},
		],
		strengths: [
			"出色的人际交往和社交技能",
			"高度的责任感和可靠性",
			"善于创造和谐的环境",
			"关注细节和周到体贴",
			"实用的问题解决和组织能力",
		],
		weaknesses: [
			"可能过度依赖外界认可和肯定",
			"有时难以接受批评或冲突",
			"对变化和新方法可能有抵触",
			"可能过度关注他人而忽视自己",
			"决策时可能过于受情感影响",
		],
		cognitiveAnalysis:
			"您的主导功能是外倾情感(Fe)，使您能够自然地理解和调和他人的情感需求，创造和谐的人际关系。辅助功能内倾感觉(Si)帮助您重视传统、细节和过去的经验。第三功能外倾直觉(Ne)支持您在必要时考虑新的可能性。劣势功能内倾思维(Ti)相对较弱，可能导致您在进行纯客观分析和脱离情感的决策时面临挑战。",
		careerOverview:
			"您适合需要人际交往、组织能力和实际支持他人的职业环境。理想的工作应该允许您建立联系、创造积极氛围并提供关怀。您在需要社交技巧、注重细节和情感智慧的领域特别出色。",
		recommendedCareers: [
			{
				category: "健康与照护",
				jobs: ["护士", "初级保健医生", "医疗社工", "营养师", "健康顾问"],
			},
			{
				category: "教育与社区",
				jobs: [
					"小学教师",
					"学校顾问",
					"社区组织者",
					"活动策划师",
					"儿童福利工作者",
				],
			},
			{
				category: "客户服务",
				jobs: [
					"人力资源专员",
					"客户关系经理",
					"招待服务",
					"销售代表",
					"公共关系专家",
				],
			},
		],
		idealWorkEnvironment: [
			"重视团队协作和人际和谐",
			"有明确结构和程序的组织",
			"提供帮助和服务他人的机会",
			"赞赏和认可贡献的文化",
			"稳定且友好的工作氛围",
		],
		stressfulWorkEnvironment: [
			"高度竞争或冲突的环境",
			"孤立或缺乏团队互动的工作",
			"频繁变化或不可预测的职责",
			"缺乏明确程序的组织",
			"冷漠或过于客观的企业文化",
		],
		relationshipStyle:
			"在人际关系中，您是温暖、投入和关怀的伙伴。您通过实际行动和周到的关怀展示爱意，总是记得重要细节和偏好。您重视和谐与稳定，愿意付出极大努力维护关系。您倾向于深度而持久的友谊，而非广泛的社交网络。您可能不善于直接表达需求或设立界限，有时会牺牲自己来满足他人。您最珍视那些能够欣赏您的奉献精神、回应您的关怀并尊重您需要稳定性和安全感的关系。",
		communicationTips: [
			"表达感谢和认可他们的努力和关怀",
			"在讨论问题时关注解决方案而非批评",
			"尊重他们对传统和社会准则的重视",
			"鼓励他们表达个人需求和设立健康界限",
			"理解他们可能需要情感确认和积极反馈",
		],
	},

	// ISTP - 鉴赏家
	ISTP: {
		highlight: "灵活务实的问题解决者，冷静的危机应对者和技术大师",
		description:
			"作为ISTP型人格，您是一位冷静自信、灵活务实的问题解决者。您有着天生的好奇心和动手能力，擅长理解工具和系统如何运作。您喜欢独立工作，以自己的节奏探索和应对挑战。您面对压力时保持冷静，善于在危机中即兴应变。您对结果导向，更关注当下而非长远未来。您的思维逻辑清晰，能够迅速分析情况并找到实用解决方案。虽然您可能看起来保留或疏远，但您在自己感兴趣的领域和信任的人面前能展现出热情和积极参与。",
		traits: [
			{
				title: "实用灵活",
				desc: "您注重实际结果，能够灵活应对不同情况，根据需要调整方法",
			},
			{
				title: "独立自主",
				desc: "您高度重视自由和独立性，喜欢按照自己的方式和节奏行事",
			},
			{
				title: "分析解决",
				desc: "您善于以逻辑分析问题，快速找到实用有效的解决方案",
			},
			{
				title: "沉着冷静",
				desc: "您在压力和危机中保持镇定，不易受情绪干扰",
			},
		],
		strengths: [
			"出色的故障排除和问题解决能力",
			"动手实践和技术掌握的天赋",
			"危机中的冷静与应变能力",
			"适应变化的灵活性",
			"务实理性的思维方式",
		],
		weaknesses: [
			"可能不愿长期规划或承诺",
			"有时显得疏远或难以接近",
			"可能忽视情感因素和他人感受",
			"有时过于冒险或忽视安全",
			"对不感兴趣的事情容易失去耐心",
		],
		cognitiveAnalysis:
			"您的主导功能是内倾思维(Ti)，使您能够构建内在的逻辑框架，分析问题的核心原理。辅助功能外倾感觉(Se)帮助您敏锐地察觉周围环境并迅速响应当前情况。第三功能内倾直觉(Ni)支持您看到潜在模式和长期影响。劣势功能外倾情感(Fe)相对较弱，可能导致您在理解和表达情感以及社交互动方面面临挑战。",
		careerOverview:
			"您适合需要技术技能、问题解决和独立工作的职业环境。理想的工作应该具有挑战性和变化性，允许您运用实践技能和适应能力。您在需要冷静分析、即兴应变和动手操作的领域特别出色。",
		recommendedCareers: [
			{
				category: "技术与工程",
				jobs: [
					"机械工程师",
					"电子技术员",
					"计算机硬件专家",
					"系统分析师",
					"飞行员",
				],
			},
			{
				category: "紧急服务",
				jobs: ["消防员", "紧急医疗技术员", "警察", "搜救人员", "军事人员"],
			},
			{
				category: "手工与艺术",
				jobs: ["工匠", "摄影师", "声音工程师", "汽车机械师", "建筑师"],
			},
		],
		idealWorkEnvironment: [
			"提供独立工作和自主决策的自由",
			"面临实际挑战和问题解决机会",
			"重视技能和结果而非程序",
			"有变化和多样性的工作内容",
			"低社交压力的环境",
		],
		stressfulWorkEnvironment: [
			"高度结构化和官僚的组织",
			"过多限制和规则的工作",
			"需要大量情感交流的职位",
			"重复性强且缺乏挑战的任务",
			"理论性强而缺乏实践应用的环境",
		],
		relationshipStyle:
			"在人际关系中，您重视独立性和自由空间。您通常以行动而非言语表达关心，愿意为伴侣提供实际帮助和解决问题。您欣赏那些尊重您独立性、不对您施加过多情感要求的关系。您可能不会频繁表达情感，但您的忠诚和信任一旦建立则相当稳固。您喜欢与伴侣分享活动和经历，而非长时间的深度对话。您最珍视那些理解您保留本性，给予您空间，同时欣赏您实用能力的关系。",
		communicationTips: [
			"尊重他们的独立性和个人空间",
			"保持简洁明了，避免过多情感讨论",
			"专注于实际问题和具体解决方案",
			"理解他们可能需要独处时间来思考",
			"欣赏他们的实用技能和问题解决能力",
		],
	},

	// ISFP - 探险家
	ISFP: {
		highlight: "敏感艺术的创作者，和平的探险家和美学鉴赏家",
		description:
			"作为ISFP型人格，您是一位敏感和谐、富有艺术气息的个体。您对美学有着天然的鉴赏能力，善于发现日常生活中的美和创意。您重视真实性和自由表达，遵循自己的内在价值观行动。您通常温和友善，对他人的需求和感受敏感。您偏好行动胜于言辞，享受当下体验而非长期规划。虽然您可能看起来安静保留，但您对自己信念坚定，在重要问题上能展现惊人的坚持和韧性。您倾向于寻找自己的独特之路，勇于尝试新体验和表达方式。",
		traits: [
			{
				title: "艺术敏感",
				desc: "您对美学和感官体验有很强的鉴赏能力，注重和谐与自然表达",
			},
			{
				title: "真实独立",
				desc: "您重视个人真实性，依据内在价值观和感受行动而非外界期望",
			},
			{
				title: "和平灵活",
				desc: "您性格温和，适应力强，倾向于避免冲突和僵化结构",
			},
			{
				title: "当下体验",
				desc: "您善于体验并享受当下，关注感官细节和实际经历",
			},
		],
		strengths: [
			"创意表达和艺术敏感性",
			"对他人感受的自然理解",
			"适应性和灵活性",
			"实用的问题解决方法",
			"对个人价值观的忠诚",
		],
		weaknesses: [
			"可能难以长期规划或设定目标",
			"有时过于保留或难以表达需求",
			"在压力下可能变得情绪化",
			"对理论和抽象概念可能缺乏耐心",
			"可能回避冲突和艰难决定",
		],
		cognitiveAnalysis:
			"您的主导功能是内倾情感(Fi)，使您形成强烈的个人价值观和道德准则，深刻理解自己和他人的情感世界。辅助功能外倾感觉(Se)帮助您敏锐地察觉周围环境，享受感官体验和当下时刻。第三功能内倾直觉(Ni)支持您偶尔看到长期影响和未来可能性。劣势功能外倾思维(Te)相对较弱，可能导致您在组织、规划和客观决策方面面临挑战。",
		careerOverview:
			"您适合能够发挥创意、提供自由表达和体现个人价值观的职业环境。理想的工作应该有灵活性，允许您按照自己的节奏工作并带来实际结果。您在需要美学敏感性、真实性和实际技能的领域特别出色。",
		recommendedCareers: [
			{
				category: "艺术与设计",
				jobs: ["艺术家", "设计师", "摄影师", "时尚设计师", "室内装饰师"],
			},
			{
				category: "健康与服务",
				jobs: [
					"按摩治疗师",
					"心理咨询师",
					"自然疗法医师",
					"个人教练",
					"营养顾问",
				],
			},
			{
				category: "自然与户外",
				jobs: ["园艺师", "环保工作者", "动物护理员", "户外指导员", "农业专家"],
			},
		],
		idealWorkEnvironment: [
			"允许创意表达和自主工作",
			"重视个人贡献和真实性",
			"提供和谐、低压力的氛围",
			"有灵活的时间表和工作方式",
			"欣赏美学和实用技能",
		],
		stressfulWorkEnvironment: [
			"高度结构化和官僚的组织",
			"冲突频繁或竞争激烈的环境",
			"过度关注理论而非实践的工作",
			"严格的时间表和高压力",
			"不尊重个人价值观的文化",
		],
		relationshipStyle:
			"在人际关系中，您是温和、真诚的伙伴，通常通过行动而非言语表达关爱。您珍视深度连接和真实性，需要被理解和接受真实的自我。您欣赏那些尊重您独立性、不试图改变您的关系。您可能不会迅速敞开心扉，但一旦建立信任，您会展现极大的忠诚和关怀。您喜欢与伴侣分享经历和感官体验，创造特别的时刻。您最珍视那些欣赏您敏感本性，给予您表达空间，同时能提供情感安全感的关系。",
		communicationTips: [
			"给予他们表达感受的时间和空间",
			"关注他们的非语言沟通和行动表达",
			"避免强势或命令式的交流方式",
			"欣赏他们的创意和审美敏感性",
			"在冲突中保持温和，给予处理情绪的空间",
		],
	},

	// ESTP - 企业家
	ESTP: {
		highlight: "充满活力的行动者，灵活的问题解决者和机会把握者",
		description:
			"作为ESTP型人格，您是一位精力充沛、反应灵敏的行动派。您富有冒险精神，善于把握机会并迅速做出决策。您具有出色的适应能力，能够在变化的环境中茁壮成长。您关注当下现实，而非抽象理论或长远计划。您通常直接坦率，具有天然的魅力和说服力。您擅长解决实际问题，能够在紧急情况下保持冷静并找到创新解决方案。您享受感官体验和刺激，渴望生活中的多样性和兴奋。虽然您可能看起来随性无忧，但您在理解系统和人际动态方面有着敏锐的观察力。",
		traits: [
			{
				title: "行动导向",
				desc: "您倾向于立即行动解决问题，而非长时间思考或计划",
			},
			{
				title: "灵活适应",
				desc: "您能够迅速适应新环境和变化情况，在混乱中找到机会",
			},
			{
				title: "现实务实",
				desc: "您关注现实和实际结果，依靠直接观察和经验做决策",
			},
			{
				title: "社交魅力",
				desc: "您通常活力四射，具有天然的魅力和与人交往的能力",
			},
		],
		strengths: [
			"危机处理和问题解决能力",
			"强大的适应性和即兴应变能力",
			"现实、务实的决策风格",
			"自然的谈判和说服技巧",
			"勇于冒险和把握机会",
		],
		weaknesses: [
			"可能缺乏长期规划和耐心",
			"有时过度冒险或寻求刺激",
			"可能忽视决策的长期后果",
			"对常规和重复工作缺乏热情",
			"在情感深度沟通方面可能有挑战",
		],
		cognitiveAnalysis:
			"您的主导功能是外倾感觉(Se)，使您能够敏锐地察觉周围环境并快速响应当前情况。辅助功能内倾思维(Ti)帮助您分析情况并形成合理判断。第三功能外倾情感(Fe)支持您理解他人情绪并在社交场合表现出色。劣势功能内倾直觉(Ni)相对较弱，可能导致您在考虑长期后果和抽象概念时面临挑战。",
		careerOverview:
			"您适合需要快速反应、解决问题和人际互动的职业环境。理想的工作应该多样化且充满挑战，允许您灵活应对不同情况。您在需要实践技能、适应能力和行动导向的领域特别出色。",
		recommendedCareers: [
			{
				category: "销售与谈判",
				jobs: ["销售代表", "房地产经纪", "营销专员", "投资经纪人", "公关经理"],
			},
			{
				category: "紧急服务",
				jobs: ["警察", "消防员", "紧急医疗技术员", "搜救人员", "危机管理员"],
			},
			{
				category: "运动与表演",
				jobs: ["运动员", "健身教练", "特技演员", "表演艺术家", "体育教练"],
			},
		],
		idealWorkEnvironment: [
			"充满活力和变化的工作环境",
			"实践导向而非理论研究",
			"有解决实际问题的机会",
			"允许自由和灵活的工作方式",
			"提供与人交流的社交机会",
		],
		stressfulWorkEnvironment: [
			"高度规范和官僚的组织",
			"孤立和缺乏人际互动的工作",
			"需要长时间专注于抽象概念",
			"缺乏实际应用的理论工作",
			"过度计划而缺乏行动的文化",
		],
		relationshipStyle:
			"在人际关系中，您充满活力和自发性，喜欢与伴侣分享冒险和新体验。您通常直接表达自己的想法和感受，期待同样的坦率。您喜欢解决实际问题来表达关心，而非深度情感交流。您需要一定的自由和独立空间，可能对过度计划或限制感到不适。您珍视有趣、轻松的互动，通常能在紧张情况下缓和气氛。您最欣赏那些能够跟上您活跃步伐，欣赏您适应能力，同时在需要时提供稳定支持的关系。",
		communicationTips: [
			"关注实际问题和具体解决方案",
			"保持直接坦率，避免模糊表达",
			"尊重他们对自由和灵活性的需求",
			"偶尔鼓励他们考虑长期影响",
			"欣赏他们的适应能力和解决问题的技能",
		],
	},

	// ESFP - 表演者
	ESFP: {
		highlight: "热情活泼的表演者，乐观的享乐主义者和社交催化剂",
		description:
			"作为ESFP型人格，您是一位充满活力、热爱生活的表演者。您天生具有感染力的热情和魅力，能够轻松吸引他人并活跃气氛。您专注于当下的体验和乐趣，享受感官刺激和社交互动。您具有很强的适应能力，能够快速响应环境变化并随机应变。您富有同情心，自然地关注他人的需求和感受。您通常乐观积极，喜欢通过实际行动和体验解决问题。您的自发性和热情给周围人带来欢乐和活力，使您成为聚会和社交场合的灵魂人物。",
		traits: [
			{
				title: "活力四射",
				desc: "您充满热情和能量，能够活跃气氛并激励他人",
			},
			{
				title: "现在导向",
				desc: "您专注于当下体验和感官享受，而非长期计划或抽象理论",
			},
			{
				title: "社交敏感",
				desc: "您对他人的情感和需求有很强的察觉能力，善于建立融洽关系",
			},
			{
				title: "实用灵活",
				desc: "您适应力强，偏好实用解决方案和直接经验",
			},
		],
		strengths: [
			"出色的人际交往和社交能力",
			"天然的乐观精神和幽默感",
			"强大的适应性和灵活性",
			"对美学和感官体验的敏锐度",
			"解决实际问题的创造力",
		],
		weaknesses: [
			"可能难以长期规划或坚持常规",
			"有时过度关注即时满足",
			"在细节和组织方面可能不够严谨",
			"可能回避情感上的复杂问题",
			"在压力下可能寻求过度刺激",
		],
		cognitiveAnalysis:
			"您的主导功能是外倾感觉(Se)，使您能够敏锐地察觉周围环境并享受感官体验。辅助功能内倾情感(Fi)帮助您形成个人价值观和情感理解。第三功能外倾思维(Te)支持您在必要时组织思想并做出实际决策。劣势功能内倾直觉(Ni)相对较弱，可能导致您在考虑长期影响和抽象概念时面临挑战。",
		careerOverview:
			"您适合需要人际互动、创意表达和实践技能的职业环境。理想的工作应该充满变化和活力，允许您与他人合作并发挥表现力。您在需要适应能力、积极态度和实用创意的领域特别出色。",
		recommendedCareers: [
			{
				category: "表演与娱乐",
				jobs: ["演员", "主持人", "舞者", "活动策划师", "旅游导游"],
			},
			{
				category: "人际服务",
				jobs: ["销售代表", "公关专员", "客户服务经理", "美容顾问", "招待服务"],
			},
			{
				category: "教育与支持",
				jobs: [
					"幼儿教师",
					"体育教练",
					"娱乐治疗师",
					"社区工作者",
					"时尚造型师",
				],
			},
		],
		idealWorkEnvironment: [
			"充满活力和社交互动的环境",
			"允许创意表达和自发性",
			"提供多样化和实践性的任务",
			"重视实际技能和即时成果",
			"友好支持的团队氛围",
		],
		stressfulWorkEnvironment: [
			"孤立或缺乏人际互动的工作",
			"高度结构化和规范的环境",
			"需要大量抽象思考的职位",
			"单调重复的任务",
			"消极或批判性强的氛围",
		],
		relationshipStyle:
			"在人际关系中，您是充满热情和活力的伙伴，喜欢创造有趣和难忘的体验。您慷慨、体贴，善于通过实际行动表达关心。您享受与伴侣分享生活的乐趣和冒险，而非深入抽象讨论。您需要自由表达自己，可能对过多限制或规划感到不适。您能够敏锐察觉伴侣的情绪变化，善于缓和紧张气氛。您最珍视那些欣赏您热情活泼的本性，与您共享当下喜悦，同时在需要时提供一些结构和方向的关系。",
		communicationTips: [
			"欣赏他们的热情和乐观精神",
			"提供实际和具体的建议，避免抽象理论",
			"尊重他们对自由和自发性的需求",
			"在讨论严肃话题时保持轻松友好",
			"理解他们通常通过行动而非言语表达关心",
		],
	},
};

module.exports = {
	mbtiReportData,
};
