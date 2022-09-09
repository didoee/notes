<template>
    <Layout>
        <template #nav-screen-content-before>
            My custom sidebar top content
        </template>
    </Layout>
</template>
<script lang="ts" setup>
    import VPSidebar from 'vitepress/dist/client/theme-default/components/VPSidebar.vue'
import { computed } from 'vue';
import DefaultTheme from 'vitepress/theme';
import { useData,useRoute } from 'vitepress';
const { Layout } = DefaultTheme;
const { page, theme, frontmatter } = useData();

const route = useRoute()
console.log(route.data.relativePath)
// const hasSidebar = computed(() => {
// 	return (
// 		frontmatter.value.aside !== false && frontmatter.value.layout !== 'home'
// 	);
// });
console.log(page.value.headers);
</script>
<style scoped></style>

