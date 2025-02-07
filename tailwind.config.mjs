/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'
import typography from '@tailwindcss/typography'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary-d-blue': '#174897',
				'primary-m-blue': '#2886BB',
				'primary-l-blue': '#39C3DE',
			},

		},
	},
	plugins: [typography, animations, function ({ addUtilities, theme, e }) {
		addUtilities(
			{
				'.gradient-text': {
					backgroundImage: 'linear-gradient(to left, #174897, #39C3DE)',
					'-webkit-background-clip': 'text',
					color: 'transparent',
				},
				'.btn-bfg': {
					background: 'linear-gradient(to top left, #174897, #39C3DE)',
					border: 'solid',
					borderWidth: '0.1rem',
					borderColor: 'rgb(255 255 255 / 0.7)',
					padding: '0.2rem 1rem',
					color: 'white',


					transition: 'all 0.3s ease',
				},

				'.faded': {
					'mask-image': 'linear-gradient(to bottom, black 75%, transparent 100%)',
				},



			},
			['responsive', 'hover']
		);
	},],
}
