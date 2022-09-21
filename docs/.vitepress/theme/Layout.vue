<template>
	<Layout>
		<!-- <template #layout-bottom>
			<div class="footer">
				<a href="https://beian.miit.gov.cn/" target="_blank">
					备案号:陕ICP备2022007326
				</a>
			</div>
		</template> -->
	</Layout>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import DefaultTheme from 'vitepress/theme';
import { useData } from 'vitepress';
const { Layout } = DefaultTheme;
const { page, theme, frontmatter } = useData();

// const hasSidebar = computed(() => {
// 	return (
// 		frontmatter.value.aside !== false && frontmatter.value.layout !== 'home'
// 	);
// });
</script>
<style scoped>
.footer {
	margin-top: -30px;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
