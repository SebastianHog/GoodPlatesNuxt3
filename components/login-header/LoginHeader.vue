<template>
	<section class="login-header-wrapper">
		<div class="login-header-title-logo xs">
			<img
				class="header-logo"
				src="~/assets/logo_variants/GoodPlatesLogo.svg" />
			<site-button
				to="/"
				class="header-title"
				>{{ coredata.name }}</site-button
			>
		</div>
		<div class="root-header-right">
			<MenuButton />
		</div>
	</section>
</template>

<script lang="ts" setup>
	import './style.scss';
	import coredata from '~/data/core.json';
</script>
