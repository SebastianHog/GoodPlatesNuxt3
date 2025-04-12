<template>
	<section class="user-icon-wrapper" @click="goToProfile">
		<p v-if="!user?.username">
			{{ userLetter }}
		</p>
		<img v-else :src="user?.photo" class="user-icon-photo">
	</section>
</template>

<script lang="ts" setup>
import './style.scss';
import type { IUser } from '~/types/user';

const utilsStore = useUtilsStore();


const props = defineProps({
	user: {
		type: Object as PropType<IUser>,
		required: false,
	},
	redirect: {
		type: Boolean,
		required: false,
		default: false
	}
});


const userLetter = computed(() => {
	return props.user?.username?.[0] ?? 'Q';
});


const goToProfile = () => {
	if (!props.redirect) return;
	navigateTo(`/user/${props.user?._id}`);
	utilsStore.toggleSidebar(false);
}

</script>
