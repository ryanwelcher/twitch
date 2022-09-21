const { join } = require("path");

module.exports = {
	pluginTemplatesPath: join(__dirname, "plugin-templates"),
	blockTemplatesPath: join(__dirname, "block-templates"),
	assetsPath: join(__dirname, "assets"),
	defaultValues: {
		title: "Block Scaffolding",
		dashicon: "twitter",
	},
	variants: {
		static: {},
		dynamic: {},
		viewscript: {
			viewScript: "file:./view.js",
		},
	},
};
