<template>
	<section class="login-wrapper">
		<h1>
			Welcome to
			<span class="logo-title-text">
				<img src="~/assets/logo_variants/GoodPlatesLogo.svg" class="welcome-logo" />
				<h1>GoodPlates</h1>
			</span>
		</h1>
		<div class="inputs-container">
			<input type="text" placeholder="Email" class="email-input" v-model="email" />
			<div class="password-container">
				<input type="password" placeholder="Password" class="password-input" v-model="password" />
				<site-button to="/forgot-password" class="forgot-password-btn">Forgot Password?</site-button>
			</div>
		</div>
		<div class="buttons-container">
			<site-button @click="login" class="login-button">{{ coreData.login.button }}</site-button>
			<site-button to="/register" class="register-button">{{ coreData.register.registerPrompt }}</site-button>
		</div>
	</section>
</template>

<script lang="ts" setup>
import './style.scss';
import { useUserStore } from '#imports';
import coreData from '~/data/core.json'

const userStore = useUserStore();

const email = ref('');
const password = ref('');

definePageMeta({
	layout: 'login',
});

const login = async () => {
	try {
		const resp = await userStore.login(email.value, password.value);
		useCookie('login_token').value = resp.token;
	} catch (error) {
		console.error('Login omega failed', error);
	}
};
</script>
