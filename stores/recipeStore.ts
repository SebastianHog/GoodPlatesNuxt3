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
	},
});
