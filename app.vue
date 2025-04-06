<template>
	<NuxtLayout :name="layout">
		<NuxtPage />
	</NuxtLayout>
</template>

<script setup lang="ts">
import { jwtDecode } from 'jwt-decode';
import '~/assets/styles/global.scss';
const userStore = useUserStore();
const route = useRoute();

const layout = computed(() => {
	return route.path === '/login' ? 'login' : 'root';
});

onMounted(() => {
	const cookie = useCookie('login_token').value;
	if (!cookie) return;

	const userId = jwtDecode<{ id: string }>(cookie).id;
	userStore.getCurrentUserData(userId);
})


</script>
