<template>
	<section class="user-icon-wrapper">
		<div class="user-icon">
			<img src="~/assets/site_icons/user-icon.svg" />
		</div>
		<SiteButton
			@click="login"
			v-if="!user"
			to="/login">
			<p class="user-icon-login-cue">{{ coredata.header.userIconLoginCue }}</p>
		</SiteButton>
		<SiteButton
			@click="login"
			v-else
			:to="`/user/${user.username}`">
			<p class="user-icon-login-cue">{{ user.username }}</p>
		</SiteButton>
	</section>
</template>

<script lang="ts" setup>
	import './style.scss';
	import coredata from '~/data/core.json';

	const userStore = useUserStore();

	const login = async () => {
		try {
			await userStore.login('seblhog@gmail.com', 'password');
		} catch (error) {
			console.error('Login failed');
		}
	};

	const user = computed(() => userStore.getUser);
	console.log(user);
</script>
