import { defineStore } from 'pinia';

export const useUtilsStore = defineStore('utils', {
	state: () => ({
		scrollingEnabled: true as boolean,
		sidebarOpen: false as boolean,
	}),

	actions: {
		toggleScrolling() {
			if (document.body.style.overflow != 'hidden')
				document.body.style.overflow = 'hidden';
			else document.body.style.overflow = '';
		},
		toggleSidebar() {},
	},
});
