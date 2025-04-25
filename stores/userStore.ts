import { defineStore } from 'pinia';
import type { IUser } from '~/types/user';
import type { IRecipe } from '~/types/recipe';

export const useUserStore = defineStore('user', {
	state: () => ({
		user: {} as IUser | null,
	}),

	getters: {},

	actions: {
		async login(email: string, password: string) {
			const config = useRuntimeConfig();
			const base_url = config.public.BASE_URL;
			interface resp {
				user: IUser;
				token: string;
			}

			try {
				const resp = await $fetch<resp>(`${base_url}/login`, {
					method: 'POST',
					body: {
						email,
						password,
					},
					credentials: 'include',
				});

				this.user = resp.user;
				await navigateTo('/');
				return resp;
			} catch (err: any) {
				throw new Error(err.message || 'Login failed');
			}
		},

		async logout() {
			const config = useRuntimeConfig();
			const base_url = config.public.BASE_URL;
			interface resp {
				user: IUser;
				token: string;
			}

			const resp = await $fetch<resp>(`${base_url}/logout`, {
				method: 'POST',
				credentials: 'include',
			});
			await navigateTo('/');
			window.location.reload();
		},

		async register(username: string, email: string, password: string) {
			const config = useRuntimeConfig();
			const base_url = config.public.BASE_URL;

			try {
				const resp = await $fetch<any>(`${base_url}/register`, {
					method: 'POST',
					body: {
						username,
						email,
						password,
					},
					credentials: 'include',
				});

				console.log('register:', resp);

				await navigateTo('/login');
				return resp;
			} catch (err: any) {
				throw new Error(err.message || 'Register failed');
			}
		},

		async getCurrentUserData(id: string) {
			const config = useRuntimeConfig();
			const base_url = config.public.BASE_URL;

			try {
				const resp = await $fetch<IUser>(`${base_url}/user/${id}`, {
					method: 'GET',
					credentials: 'include',
				});

				this.user = resp;
				await navigateTo('/');
				return resp;
			} catch (err: any) {
				throw new Error(err.message || 'Failed to get current user data');
			}
		},
		async getUserById(id: string) {
			const config = useRuntimeConfig();
			const base_url = config.public.BASE_URL;

			try {
				const resp = await $fetch<IUser>(`${base_url}/user/${id}`, {
					method: 'GET',
					credentials: 'include',
				});

				return resp;
			} catch (err: any) {
				throw new Error(err.message || 'Failed to get user data');
			}
		},

		async createRecipe(recipe: Partial<IRecipe>) {
			const config = useRuntimeConfig();
			const base_url = config.public.BASE_URL;

			try {
				const resp = await $fetch<IRecipe>(`${base_url}/recipes/add`, {
					method: 'POST',
					body: recipe,
					credentials: 'include',
				});
				console.log('createRecipe:', resp);

				return resp;
			} catch (err: any) {
				console.log('createRecipe error:', err);
				// throw new Error('fuckshit', err.message || 'Failed to create recipe');
			}
		},
	},
});
