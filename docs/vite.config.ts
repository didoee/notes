import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [],
	ssr: { noExternal: ['@arco-design/web-vue'] },
	server: {
		port: 1024,
	},
});
