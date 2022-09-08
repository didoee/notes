import { DefaultTheme } from 'vitepress';

const sidebar: DefaultTheme.Sidebar = {
	'/course/html/': [
		{
			text: 'html',
			collapsible: true,
			items: [{ text: '基础', link: '/course/html/' }],
		},
	],
	'/course/css/': [
		{
			text: 'css',
			collapsible: true,
			items: [
				{ text: '基础', link: '/course/css/' },
				{ text: '定位', link: '/course/css/定位' },
				{ text: '浮动', link: '/course/css/浮动' },
				{ text: '盒子模 型', link: '/course/css/盒子模型' },
			],
		},
	],
};

export { sidebar };
