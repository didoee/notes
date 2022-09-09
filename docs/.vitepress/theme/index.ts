import DefaultTheme from 'vitepress/theme';
import '../styles/vars.css';
import '../styles/custom.css';
import Layout from './Layout.vue';

export default {
	...DefaultTheme,
	Layout,
	enhanceApp({ app }) {},
};
