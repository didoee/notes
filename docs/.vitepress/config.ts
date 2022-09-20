import { defineConfig } from 'vitepress';

import { head } from './config/head';
import { themeConfig } from './config/theme.config';

const config = defineConfig({
	title: '前端知识库',
	description: '',
	head,
	themeConfig,
	markdown: {
		toc: { level: [1, 2] },
		theme: 'light-plus',
	},
});

export default config;
