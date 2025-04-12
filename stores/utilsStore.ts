import { defineStore } from 'pinia';

export const useUtilsStore = defineStore('utils', {
	state: () => ({
		scrollingEnabled: true as boolean,
		sidebarOpen: false as boolean,
	}),

	actions: {
		scrollingState(value: boolean) {
			if (!value) document.body.style.overflow = 'hidden';
			else document.body.style.overflow = '';
		},
		toggleSidebar(value: boolean) {
			const screenWidth = window.innerWidth;
			this.sidebarOpen = value;
			if (screenWidth > 992) return;
			this.scrollingState(false);
		},
	},
});
