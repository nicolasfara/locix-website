// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://locix.github.io',
	integrations: [
		starlight({
			title: 'Locix',
			logo: {
				dark: './src/assets/locix-logo-dark.svg',
				light: './src/assets/locix-logo-light.svg',
				alt: 'LociX logo',
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/nicolasfara/locix' }],
			sidebar: [],
			customCss: ['./src/styles/global.css'],
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
