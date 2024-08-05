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
<<<<<<< HEAD
				accent: '#FFD700',    // Yellow for details and call-to-actions
=======
				accent: '#FFD700',
                accentDark: '#c9b423',    // Yellow for details and call-to-actions
>>>>>>> version2
				dark: '#333333',      // Dark gray for texts and elements on light background
				light: '#FFFFFF',     // White for texts and dark backgrounds
				bg: '#F4F4F4',        // Light gray for the general background of the pages
				info: '#17a2b8',      // Information color, typically used for informational alerts or messages
<<<<<<< HEAD
			  
			},	
=======

			},
            backgroundImage: {
                primaryGradient: 'linear-gradient(90deg, rgba(30,66,159,1) 0%, rgba(201,180,35,1) 100%)',
                secondaryGradient: 'linear-gradient(130deg, rgba(254,254,254,1) 0%, rgba(247,247,247,1) 100%);',
            }
>>>>>>> version2
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
<<<<<<< HEAD

=======
>>>>>>> version2
