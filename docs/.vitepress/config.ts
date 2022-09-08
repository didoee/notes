import { DefaultTheme } from 'vitepress';
import { defineConfig } from 'vitepress';

import { nav } from './config/nav';

const themeConfig: DefaultTheme.Config = {
	nav,
};

const config = defineConfig({
	title: '前端知识库',
	description: '',
	themeConfig,
});

export default config;
