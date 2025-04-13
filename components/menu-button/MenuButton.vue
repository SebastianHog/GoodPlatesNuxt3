<template>
	<div class="menu-icon-wrapper" @click="openSidebar">
		<img src="~/assets/site_icons/menu_icon.svg" class="menu-icon" />
	</div>
</template>

<script lang="ts" setup>
import './style.scss';

const utilsStore = useUtilsStore();
const openSidebar = () => {
	try {
		utilsStore.toggleSidebar(true);
	} catch (error) {
		console.error('failed to open sidebar');
	}
}
</script>
