<template>
	<NuxtLayout :name="layout">
		<NuxtPage />
	</NuxtLayout>
</template>

<script setup lang="ts">
	import '~/assets/styles/global.scss';

	const route = useRoute();

	const layout = computed(() => {
		return route.path === '/login' ? 'login' : 'root';
	});
</script>
