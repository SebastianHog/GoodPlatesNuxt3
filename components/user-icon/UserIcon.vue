<template>
	<section class="user-icon-wrapper">
		<div class="user-icon">
			<img src="~/assets/site_icons/user-icon.svg" />
		</div>
		<SiteButton
			@click="login"
			v-if="!curUser"
			to="/login">
			<p class="user-icon-login-cue">out: {{ coredata.header.userIconLoginCue }}</p>
		</SiteButton>
		<SiteButton
			@click="login"
			v-else
			:to="`/user/${curUser.username}`">
			<p class="user-icon-login-cue">in: {{ curUser.username }}</p>
		</SiteButton>
	</section>
</template>

<script lang="ts" setup>
	import './style.scss';
	import coredata from '~/data/core.json';
	import type { IUser } from '~/types/user';

	const curUser = ref<IUser | null>(null);

	const userStore = useUserStore();

	const login = async () => {
		try {
			await userStore.login('seblhog@gmail.com', 'password');
		} catch (error) {
			console.error('Login failed');
		}
	};

	onMounted(async () => {
		curUser.value = await userStore.getCurrentUserData();
	});
</script>
