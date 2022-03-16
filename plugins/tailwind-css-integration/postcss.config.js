const path = require('path');

// console.log(path.dirname('./custom-tailwind.config.js'));
module.exports = {
	plugins: [
		require('postcss-multiple-tailwind'),
		// require('tailwindcss')('./custom-tailwind.config.js'),
		require('autoprefixer'),
	],
};
