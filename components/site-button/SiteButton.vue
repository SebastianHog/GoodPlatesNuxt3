<template>
	<NuxtLink
		class="site-button-main"
		:to="to">
		<slot />
	</NuxtLink>
</template>

<script>
	import './style.scss';
</script>
