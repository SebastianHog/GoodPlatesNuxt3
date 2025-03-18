<template>
	<section class="login-wrapper">
		<h1>
			Welcome to
			<span class="logo-title-text">
				<img
					src="~/assets/logo_variants/GoodPlatesLogo.svg"
					class="welcome-logo" />
				<h1>GoodPlates</h1>
			</span>
		</h1>
		<div class="inputs-container">
			<input
				type="text"
				placeholder="Email"
				class="email-input" />
			<div class="password-container">
				<input
					type="password"
					placeholder="Password"
					class="password-input" />
				<site-button
					to="/forgot-password"
					class="forgot-password-btn"
					>Forgot Password?</site-button
				>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
	import './style.scss';
	definePageMeta({
		layout: 'login',
	});
</script>
