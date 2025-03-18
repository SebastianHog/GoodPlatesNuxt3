<template>
	<section>
		<site-button @click="userStore.logout">Log out</site-button>
	</section>
</template>

<script lang="ts" setup>
	const userStore = useUserStore();
</script>
