<template>
  <section v-if="user">
    <ProductCard v-for="recipe in userRecs.recipes" :product="recipe" :key="recipe._id" />
  </section>
  <section v-else>
    <h1>Loading user...</h1>
  </section>
</template>

<script lang="ts" setup>
const route = useRoute();
import { useUserStore } from '../../stores/userStore';
import type { IRecipe } from '~/types/recipe';
import { useRecipeStore } from '~/stores/recipeStore';
import type { IUser } from '~/types/user';

const userStore = useUserStore();
const user: IUser | null = userStore.user;

const recipeStore = useRecipeStore();

const { data: userRecs } = await useAsyncData<IRecipe[] | any>('recipe', async () => {
  console.log(user._id)
  if (!user?._id) return;
  return await recipeStore.getRecipeByUser(user._id);
});

</script>