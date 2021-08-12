module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: 'class', // or 'media' or 'class' or false
	theme: {
		extend: {
			height: {
				'body-without-header': `calc(100% - 3rem)`,
			},
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
