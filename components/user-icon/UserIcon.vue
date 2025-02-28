<template>
	<section class="user-icon-wrapper">
		<img src="~/assets/site_icons/user-icon.svg" />
		<!-- Make P tag into a link to /login -->
		<p class="user-icon-login-cue">{{ coreData.userIconLoginCue }}</p>
	</section>
</template>

<script lang="ts" setup>
	import './style.scss';
	import coreData from '~/data/core.json';
</script>
