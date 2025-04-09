<template>
	<div class="menu-icon-wrapper">
		<img src="~/assets/site_icons/menu_icon.svg" class="menu-icon" @click="openSidebar" />
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
