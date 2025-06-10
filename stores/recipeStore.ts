import { defineStore } from 'pinia';
import type { IUser } from '~/types/user';
import type { IRecipe } from '~/types/recipe';

export const useRecipeStore = defineStore('recipe', {
	state: () => ({}),
	getters: {},
	actions: {
		async getRecipeById(id: string) {
			const config = useRuntimeConfig();
			const base_url = config.public.BASE_URL;
			try {
				const response: any = await $fetch(
					`${base_url}/recipes/get?recipeRequest=by_id&recipeId=${id}`,
				);
				return response.recipe;
			} catch (error) {
				console.error('Error fetching recipe by ID:', error);
			}
		},
		async getRecipeByUser(userId: string) {
			const config = useRuntimeConfig();
			const base_url = config.public.BASE_URL;

			try {
				const response: any = await $fetch(
					`${base_url}/recipes/get?recipeRequest=by_author&author=${userId}`,
				);
				return response;
			} catch (error) {
				console.error('Error getting user recipes: ', error);
			}
		},
		async deleteRecipe(recipeId: string, userId: string) {
			const config = useRuntimeConfig();
			const base_url = config.public.BASE_URL;

			try {
				const response: any = await $fetch(`${base_url}/recipes/delete`, {
					method: 'DELETE',
					body: {
						recipeId,
						userId,
					},
				});

				return response;
			} catch (error) {
				console.error('Error deleting recipe:', error);
			}
		},
	},
});
