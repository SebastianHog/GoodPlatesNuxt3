<template>
	<section class="root-header-wrapper">
		<div class="root-header-title-logo">
			<img src="~/assets/logo_variants/GoodPlatesLogo.svg" />
			<h1>{{ coreData.name }}</h1>
		</div>
		<UserIcon />
		<div class="root-header-right">
			<img
				src="~/assets/site_icons/search_icon.svg"
				class="header-search-icon" />
		</div>
	</section>
</template>

<script lang="ts" setup>
	import './style.scss';
	import coreData from '~/data/core.json';
</script>
