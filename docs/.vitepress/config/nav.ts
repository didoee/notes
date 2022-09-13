import type { DefaultTheme } from 'vitepress/theme';

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
				link: '/course/css/01_基础',
				activeMatch: '/course/css/',
			},
			{
				text: 'HTML5',
				link: '/course/html5/01_HTML5',
				activeMatch: '/course/html5/',
			},
			{
				text: 'CSS3',
				link: '/course/css3/01_基础',
				activeMatch: '/course/css3/',
			},
			{
				text: 'ES6',
				link: '/course/es6/01_ES6',
				activeMatch: '/course/es6/',
			},
			{
				text: 'TypeScript',
				link: '/course/ts/01_typescript',
				activeMatch: '/course/typescript/',
			},
		],
	},
];

export { nav };
