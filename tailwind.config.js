const defaultTheme = require('tailwindcss/defaultTheme');

console.log(defaultTheme.width);
module.exports = {
	purge: ['./public/index.html', './src/**/*.{js,jsx,ts,tsx}'],
	mode: 'jit',
	theme: {
		extend: {
			fontFamily: {
				roboto: 'Roboto',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
