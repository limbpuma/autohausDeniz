/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,react,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			colors: {
				primary: '#60A7E5',   // Light blue, dominant in the signage
				secondary: '#1A374D', // Dark blue for contrast
				accent: '#FFD700',    // Yellow for details and call-to-actions
				dark: '#333333',      // Dark gray for texts and elements on light background
				light: '#FFFFFF',     // White for texts and dark backgrounds
				bg: '#F4F4F4',        // Light gray for the general background of the pages
				info: '#17a2b8',      // Information color, typically used for informational alerts or messages
			  
			},	
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}

