<template>
	<section class="root-header-wrapper">
		<div class="root-header-current-user" :to="user?.username ? `/user/${user._id}` : '/login'">
			<div class="user-wrapper">
				<site-button v-if="user?.username" :to="`/user/${user._id}`">
					<user-icon :user="user" class="header-user-icon" />
					<span class="username-display-header">
						{{ user.username }}
					</span>
				</site-button>
				<site-button v-else to="/login">
					<user-icon v-if="user" :user="user" style="margin-right: .5rem;" />Log in
				</site-button>
			</div>
		</div>

		<div class="root-header-title-logo">
			<img class="header-logo" src="~/assets/logo_variants/GoodPlatesLogo.svg" />
			<site-button to="/" class="header-title">{{ coredata.name }}</site-button>
		</div>

		<MenuButton class="root-header-menu-button" />
	</section>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import './style.scss';
import coredata from '~/data/core.json';

const userStore = useUserStore();

const { user } = storeToRefs(userStore);

</script>