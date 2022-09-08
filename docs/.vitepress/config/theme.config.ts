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
