/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [
		plugin(function ({ addVariant, e }) {
			addVariant('data-state-open', ({ modifySelectors, separator }) => {
				modifySelectors(({ className }) => {
					return `.${e(`data-state-open${separator}${className}`)}[data-state='open']`
				}
			)})
		  })
		]
});
