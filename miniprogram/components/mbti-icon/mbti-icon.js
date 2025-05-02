// 导入MBTI工具类
const { mbtiIconMap } = require("../../utils/mbti-utils");

Component({
  externalClasses: ['mbti-icon'],
	/**
	 * 组件的属性列表
	 */
	properties: {
		// 图标类型
		src: {
			type: String,
			value: "",
    },
		// 图标大小
		size: {
			type: Number,
			value: 240,
		},
	},

	/**
	 * 组件的初始数据
	 */
	data: {
		actualSrc: "",
	},

	lifetimes: {
		attached: function () {
			const src = this.data.src;
			if (src) {
				this.updateImageSrc(src);
			}
		},
	},
	observers: {
		src: function (newVal) {
			this.updateImageSrc(newVal);
		},
	},

	methods: {
		updateImageSrc: function (src) {
			// 从工具类中获取图标URL
			const iconSrc = mbtiIconMap[src];

			if (iconSrc) {
				this.setData({
					actualSrc: iconSrc,
				});
			} else {
				// 如果没有找到对应的图标，直接使用传入的src
				this.setData({
					actualSrc: src,
				});
			}
		},
	},
});
