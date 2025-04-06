<template>
	<section class="user-icon-wrapper">
		<p v-if="!user?.username">
			{{ userLetter }}
		</p>
		<img v-else :src="user?.photo" class="user-icon-photo">
	</section>
</template>

<script lang="ts" setup>
import './style.scss';
import type { IUser } from '~/types/user';

const props = defineProps({
	user: {
		type: Object as PropType<IUser>,
		required: false,
	},
});

const userLetter = computed(() => {
	return props.user?.username?.[0] ?? 'U';
});
</script>
