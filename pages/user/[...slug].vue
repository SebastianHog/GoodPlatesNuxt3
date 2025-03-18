<template>
	<section>
		<site-button @click="userStore.logout">Log out {{ $route.params.slug[0] }}</site-button>
	</section>
</template>

<script lang="ts" setup>
	const userStore = useUserStore();
</script>
