<template>
	<p style="color: black">{{ user?.username.slice(1) }}</p>
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

const user = computed(() => {
	return props.user;
});
</script>
