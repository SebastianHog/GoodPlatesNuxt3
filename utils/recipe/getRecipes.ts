import type { IRecipe } from "~/types/recipe";

export const getRecipes = async (): Promise<IRecipe[]> => {
  const config = useRuntimeConfig();
  const base_url = config.public.BASE_URL;

  const response: any = await $fetch(
    `${base_url}/recipes/get?recipeRequest=all`
  );
  return response.recipes;
};
