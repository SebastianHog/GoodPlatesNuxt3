<template>
	<section class="user-icon-wrapper">
		<div class="user-icon">
			<img src="~/assets/site_icons/user-icon.svg" />
		</div>
		<SiteButton v-if="!curUser" to="/login" class="user-btn">
			<p class="user-icon-login-cue">{{ coredata.header.userIconLoginCue }}</p>
		</SiteButton>
		<SiteButton v-else :to="`/user/${curUser.username}`" class="user-btn">
			<p class="user-icon-login-cue">{{ curUser.username }}</p>
		</SiteButton>
	</section>
</template>

<script lang="ts" setup>
import './style.scss';
import coredata from '~/data/core.json';
import type { IUser } from '~/types/user';

const curUser = ref<IUser | null>(null);

const userStore = useUserStore();

onMounted(async () => {
	curUser.value = (await userStore.getCurrentUserData()) || null;
});
</script>
