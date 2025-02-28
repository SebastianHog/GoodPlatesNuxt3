<template>
	<section class="user-icon-wrapper">
		<div class="user-icon">
			<img src="~/assets/site_icons/user-icon.svg" />
		</div>
		<p class="user-icon-login-cue">{{ coreData.userIconLoginCue }}</p>
	</section>
</template>

<script lang="ts" setup>
	import './style.scss';
	import coreData from '~/data/core.json';
</script>
