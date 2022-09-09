import { DefaultTheme } from 'vitepress';
import { getChildren } from '../utils';

export default function useSidebar(nav: Array<string>) {
	const sidebar: DefaultTheme.Sidebar = {};

	const getSidebar = (dir: string) => {
		const arr = getChildren(`./docs${dir}`);

		return arr.map((el: string) => {
			const _ = el.split('/')[1].replace(/.md/g, '');
			const text = _.split('_')[1];

			return {
				text: text.includes('index') ? '基础' : text,
				link: `${dir}${_}`,
			};
		});
	};

	for (const dir of nav) {
		sidebar[dir] = [
			{
				text: dir.split('/')[2],
				collapsible: true,
				items: getSidebar(dir),
			},
		];
	}

	return { sidebar };
}
