<template>
	<section class="root-header-wrapper">
		<div class="root-header-title-logo xs">
			<img
				class="header-logo"
				src="~/assets/logo_variants/GoodPlatesLogo.svg" />
			<h1 class="header-title">{{ coreData.name }}</h1>
		</div>
		<UserIcon />
		<div class="root-header-right">
			<SearchIcon />
			<MenuButton />
		</div>
	</section>
</template>

<script lang="ts" setup>
	import './style.scss';
	import coreData from '~/data/core.json';
</script>
