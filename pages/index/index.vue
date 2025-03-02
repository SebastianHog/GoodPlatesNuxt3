<template>
	<section class="page-content-wrapper">
		<HeroBanner />
		<ButtonsDisplay
			:buttons="buttonCategories"
			title="categories"
			scroller />
	</section>
</template>

<script setup>
	import './style.scss';
	import coredata from '~/data/core.json';

	const buttonCategories = computed(() => {
		const current = coredata.category.currentPush;

		return current;
	});
</script>
