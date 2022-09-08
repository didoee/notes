import { DefaultTheme } from 'vitepress/theme';

const nav: DefaultTheme.Config['nav'] = [
	{
		text: '首页',
		link: '/',
		activeMatch: '^/$|^/index',
	},
	{
		text: '基础课程',
		activeMatch: '/course/',
		items: [
			{
				text: 'HTML',
				link: '/course/html/index',
				activeMatch: '/course/html/',
			},
			{
				text: 'CSS',
				link: '/course/css/index',
				activeMatch: '/course/css/',
			},
		],
	},
];

export { nav };
