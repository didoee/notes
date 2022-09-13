<template>
	<Layout></Layout>
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
<style scoped></style>
