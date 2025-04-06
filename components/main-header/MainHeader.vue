<template>
	<section class="root-header-wrapper">
		<div class="root-header-title-logo xs">
			<img class="header-logo" src="~/assets/logo_variants/GoodPlatesLogo.svg" />
			<site-button to="/" class="header-title">{{ coredata.name }}</site-button>
		</div>

		<site-button v-if="user?.username" :to="`/user/${user._id}`">
			{{ user.username }}
		</site-button>
		<site-button v-else to="login">Log in</site-button>

		<div class="root-header-right">
			<SearchIcon />
			<MenuButton />
		</div>
	</section>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import './style.scss';
import coredata from '~/data/core.json';

const userStore = useUserStore();

const { user } = storeToRefs(userStore);

</script>
