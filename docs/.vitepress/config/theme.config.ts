import type { DefaultTheme } from 'vitepress';

import { nav } from './nav';
import { sidebar } from './sidebar';

const themeConfig: DefaultTheme.Config = {
	nav, // 导航栏配置
	sidebar, // 侧边栏配置
	logo: '/logo.gif',
	// 右侧大纲标题文本配置
	outlineTitle: '目录',
	// 文档页脚文本配置
	docFooter: {
		prev: '上一篇',
		next: '下一篇',
	},
	// 全文搜索配置
	algolia: {
		appId: '',
		apiKey: '',
		indexName: '',
	},
	// 导航栏右侧社交链接配置
	socialLinks: [
		{
			icon: {
				svg: '<svg width="21" height="21" viewBox="0 0 48 48" fill="currentColor"><title>前端面试题</title><path fill-rule="evenodd" clip-rule="evenodd" d="M37 16c0-7.18-5.82-13-13-13S11 8.82 11 16c0 1.315.195 2.584.558 3.779C6.566 21.594 3 26.38 3 32c0 7.18 5.82 13 13 13 3.017 0 5.795-1.028 8-2.752A12.944 12.944 0 0032 45c7.18 0 13-5.82 13-13 0-5.62-3.566-10.406-8.558-12.22A13 13 0 0037 16zm-2.342 7.445l.027-.038A9 9 0 1126.75 39.31 12.94 12.94 0 0029 32c0-1.315-.195-2.584-.558-3.779a13.037 13.037 0 006.216-4.776zm-21.343-.039l-.233.076A9.008 9.008 0 007 32a9 9 0 008.735 8.996L16 41l.265-.004a9 9 0 008.22-12.006 12.985 12.985 0 01-11.17-5.584zM15 16a9 9 0 1118 0 9 9 0 01-18 0z" fill="currentColor"/></svg>',
			},
			link: 'https://interview-8g7ov42dd5e84a87-1307250473.ap-shanghai.app.tcloudbase.com/#/',
		},
		{
			icon: 'github',
			link: 'https://github.com/didoee',
		},
		{
			icon: {
				svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>码云</title><path d="M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.016 0zm6.09 5.333c.328 0 .593.266.592.593v1.482a.594.594 0 0 1-.593.592H9.777c-.982 0-1.778.796-1.778 1.778v5.63c0 .327.266.592.593.592h5.63c.982 0 1.778-.796 1.778-1.778v-.296a.593.593 0 0 0-.592-.593h-4.15a.592.592 0 0 1-.592-.592v-1.482a.593.593 0 0 1 .593-.592h6.815c.327 0 .593.265.593.592v3.408a4 4 0 0 1-4 4H5.926a.593.593 0 0 1-.593-.593V9.778a4.444 4.444 0 0 1 4.445-4.444h8.296Z"/></svg>',
			},
			link: 'https://gitee.com/didoee',
		},
	],
};

export { themeConfig };
