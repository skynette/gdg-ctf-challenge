/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontSize: {
				"--fs-h1": "clamp(3rem, 2.7143rem + 1.4286vw, 4rem)",
				"--fs-h2": "clamp(2.5rem, 2.2143rem + 1.4286vw, 3.5rem)",
				"--fs-h3": "clamp(2rem, 1.7143rem + 1.4286vw, 3rem)",
				"--fs-h4": "clamp(1.5rem, 1.2143rem + 1.4286vw, 2.5rem)",
				"--fs-h5": "clamp(1.25rem, 1.3571rem + 0.7143vw, 2rem)",
				"--fs-body-3": "clamp(1rem, 0.9643rem + 0.1786vw, 1.125rem)",
				"--fs-body-2": "clamp(0.875rem, 0.8571rem + 0.1786vw, 1rem)",
				"--fs-body-1": "clamp(0.75rem, 0.7143rem + 0.1786vw, 0.875rem)",
			},
			colors: {
				"--clr-gdg-blue": "#4285F4",
				"--clr-gdg-red": "#DB4437",
				"--clr-gdg-yellow": "#F4B400",
				"--clr-gdg-green": "#0F9D58",
				primary: {
					green: "#003802",
					white: "#FCFCFC",
				},
			},
		},
	},
	plugins: [],
};
