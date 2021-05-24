module.exports = {
	purge: {
		enabled: true,
		content: ["./*.html"],
	},
	theme: {
		extend: {
			inset: {
				"-30": "-1.875rem",
			},
			colors: {
				gray: {
					600: "#282828",
					700: "#141414",
					800: "#0a0a0a",
					900: "#000000",
				},
			},
			fontFamily: {
				sans: ["Arial", "Helvetica", "sans-serif"],
			},
		},
	},
}
