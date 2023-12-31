/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
                xxs: "320px",
                xs: "375px",
                sm: "425px",
                smmd: "480px",
                mdsm: "640px",
				md: "768px",
                mdlg: "820px",
                lgsm: "960px",
				lg: "1024px",
				xl: "1280px",
			},
			fontSize: {
				"fs-h1": "var(--fs-h1)",
				"fs-h2": "var(--fs-h2)",
				"fs-h3": "var(--fs-h3)",
				"fs-h4": "var(--fs-h4)",
				"fs-h5": "var(--fs-h5)",
                "fs-h6": "var(--fs-h6)",
				"fs-title-3": "var(--fs-title-3)",
				"fs-title-2": "var(--fs-title-2)",
				"fs-title-1": "var(--fs-title-1)",
				"fs-body-3": "var(--fs-body-3)",
				"fs-body-2": "var(--fs-body-2)",
				"fs-body-1": "var(--fs-body-1)",
			},
			colors: {
				"clr-gdg-blue": {
					100: "#d9e7fd",
					200: "#b3cefb",
					300: "#8eb6f8",
					400: "#689df6",
					DEFAULT: "#4285f4",
					600: "#356ac3",
					700: "#285092",
					800: "#1a3562",
					900: "#0d1b31",
				},
				"clr-gdg-red": {
					100: "#f8dad7",
					200: "#f1b4af",
					300: "#e98f87",
					400: "#e2695f",
					DEFAULT: "#db4437",
					600: "#af362c",
					700: "#832921",
					800: "#581b16",
					900: "#2c0e0b",
				},
				"clr-gdg-yellow": {
					100: "#fdf0cc",
					200: "#fbe199",
					300: "#f8d266",
					400: "#f6c333",
					DEFAULT: "#f4b400",
					600: "#c39000",
					700: "#926c00",
					800: "#624800",
					900: "#312400",
				},
				"clr-gdg-green": {
					100: "#cfebde",
					200: "#9fd8bc",
					300: "#6fc49b",
					400: "#3fb179",
					DEFAULT: "#0f9d58",
					600: "#0c7e46",
					700: "#095e35",
					800: "#063f23",
					900: "#031f12",
				},
			},
            boxShadow: {
                card: "0 1px 6px rgba(0, 0, 0, 0.1)",
            }
		},
	},
	plugins: [],
};
