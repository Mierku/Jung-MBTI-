// 云函数入口文件
const cloud = require("wx-server-sdk");

cloud.init({
	env: cloud.DYNAMIC_CURRENT_ENV, // 使用动态云环境
});

// 云函数入口函数
exports.main = async (event, context) => {
	try {
		const wxContext = cloud.getWXContext();

		// 获取小程序码图片 - 使用最新的getUnlimitedQRCode方法
		const result = await cloud.openapi.wxacode.getUnlimited({
			scene: "default", // 场景值，由于是通用码，可设置为默认值
			page: "pages/mbti/index", // 扫码后跳转的页面，必须是已经发布的小程序存在的页面
			width: 280, // 二维码的宽度
			auto_color: false,
			line_color: { r: 0, g: 0, b: 0 }, // 柔和的蓝色
			is_hyaline: false,
		});
		console.log();
		if (result.buffer) {
			return {
				success: true,
				buffer: result.buffer,
			};
		} else {
			return {
				success: false,
				error: "获取小程序码失败",
			};
		}
	} catch (error) {
		console.error("生成小程序码失败", error);
		return {
			success: false,
			error: error,
		};
	}
};
