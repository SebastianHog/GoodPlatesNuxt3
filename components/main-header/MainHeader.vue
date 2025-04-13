<template>
	<section class="root-header-wrapper">
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