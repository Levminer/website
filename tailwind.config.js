module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			inset: {
				"-30": "-1.875rem",
			},
			colors: {
				gray: {
					600: "#1E1E1E",
					700: "#141414",
					800: "#0a0a0a",
					900: "#000000",
				},

				popup: {
					red: "#CC001B",
					green: "#28A443",
					blue: "#16A3DF",
					yellow: "#F5AB00",
					magenta: "#9B5094",
				},
			},

			screens: {
				small: { max: "800px" },
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
}

