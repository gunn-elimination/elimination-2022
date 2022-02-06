module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			animation: {
				gradient: "gradient 1s cubic-bezier(.36,.07,.19,.97) infinite",
				"gradient-slow": "gradient 3s linear infinite",
			},
			keyframes: {
				gradient: {
					from: {
						"background-size": "200%",
					},
					to: {
						"background-position": "200% center",
						"background-size": "200%",
					},
				},
			},
		},
		screens: {
			inf: { max: "99999999px" },
			//  => @media (max-width: 99999999px) { ... } Literally so i can use a form of !important

			"4xl": { max: "4096px" },
			// => @media (max-width: 4096px) { ... } Wtf is this...
			"3.5xl": { max: "3096px" },

			"3xl": { max: "2048px" },
			// => @media (max-width: 2048px) { ... }

			"2.5xl": { max: "1920px" },
			// => @media (max-width: 1920px) { ... }

			"2xl": { max: "1535px" },
			// => @media (max-width: 1535px) { ... }

			xl: { max: "1279px" },
			// => @media (max-width: 1279px) { ... }

			lg: { max: "1023px" },
			// => @media (max-width: 1023px) { ... }

			md: { max: "767px" },
			// => @media (max-width: 767px) { ... }

			sm: { max: "639px" },
			// => @media (max-width: 639px) { ... }
		},
	},
	plugins: [],
};
