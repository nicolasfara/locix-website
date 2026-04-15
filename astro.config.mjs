// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';
import { frameworkName } from './src/config/site.mjs';

// https://astro.build/config
export default defineConfig({
	site: 'https://locix.github.io',
	integrations: [
		starlight({
			title: frameworkName,
			description:
				`${frameworkName} explores how capabilities and placement types can unify multitier, choreographic, and aggregate programming in one typed distributed model.`,
			logo: {
				dark: './src/assets/locix-logo-dark.svg',
				light: './src/assets/locix-logo-light.svg',
				alt: `${frameworkName} logo`,
			},
			tagline: 'Capabilities and placement types for unified distributed programming.',
			expressiveCode: {
				themes: ['github-dark-dimmed', 'github-light'],
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/nicolasfara/locix' }],
			// sidebar: [
			// 	{
			// 		label: 'Overview',
			// 		items: [
			// 			{ label: 'Home', slug: 'index' },
			// 			{ label: 'Research', slug: 'research' },
			// 			{ label: 'Evidence', slug: 'evidence' },
			// 			{ label: 'Examples', slug: 'examples' },
			// 		],
			// 	},
			// ],
			head: [
				{
					tag: 'meta',
					attrs: {
						property: 'og:image',
						content: 'https://locix.github.io/social/locix-preview.png',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'twitter:card',
						content: 'summary_large_image',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'twitter:image',
						content: 'https://locix.github.io/social/locix-preview.png',
					},
				},
			],
			customCss: ['./src/styles/global.css'],
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
