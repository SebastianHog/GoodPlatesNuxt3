<template>
	<section class="register-wrapper">
		<h1 class="welcome-banner">
			Welcome to
			<span class="logo-title-text">
				<img src="~/assets/logo_variants/GoodPlatesLogo.svg" class="welcome-logo" />
				<h1>GoodPlates</h1>
			</span>
		</h1>
		<div class="form-wrapper">
			<div class="inputs-container">
				<input type="text" placeholder="Username" class="username-input" v-model="username" />
				<input type="text" placeholder="Email" class="email-input" v-model="email" />
				<input type="password" placeholder="Password" class="password-input" v-model="password" />
				<input type="password" placeholder="Confirm password" class="password-input" v-model="passwordVerify" />
				<p v-if="password !== passwordVerify" class="password-mismatch-alert">{{ coreData.register.passwordNoMatch }}
				</p>
			</div>
			<div class="buttons-container">
				<site-button to="/login" class="login-promt">{{ coreData.register.loginPrompt }}</site-button>
				<site-button @click="register" class="register-button">{{ coreData.register.button }}</site-button>
			</div>
		</div>

	</section>
</template>

<script lang="ts" setup>
import './style.scss';
import { useUserStore } from '#imports';
import coreData from '~/data/core.json'

const userStore = useUserStore();

const username = ref('');
const email = ref('');
const password = ref('');
const passwordVerify = ref('');

definePageMeta({
	layout: 'login',
});

const register = async () => {
	try {
		const resp = await userStore.register(username.value, email.value, password.value);
	} catch (error) {
		console.error('Register failed', error);
	}
};
</script>
