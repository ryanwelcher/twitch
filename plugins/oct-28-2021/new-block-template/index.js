const { join } = require('path');

module.exports = {
	defaultValues: {
		wpScripts: false,
		editorScript: 'file:../../build/{{slug}}.js',
		editorStyle: 'file:../../build/{{slug}}.css',
		style: 'file:file:../../build/style-{{slug}}.css',
		supports: {
			html: false,
		},
	},
	templatesPath: join(__dirname, 'template'),
};
