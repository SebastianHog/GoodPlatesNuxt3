<template>
  <section v-if="user && userRecs && userRecs.recipes" class="my-recipes-wrapper">
    <ProductCard v-if="userRecs.recipes && userRecs.recipes" v-for="recipe in userRecs.recipes" :key="recipe._id"
      :product="recipe" />
  </section>
  <section v-else>
    <h1>Loading...</h1>
  </section>
</template>

<script lang="ts" setup>
import './style.scss'
import { useUserStore } from '../../stores/userStore';
import { useRecipeStore } from '~/stores/recipeStore';
import type { IUser } from '~/types/user';


const userStore = useUserStore();
const user: IUser | null = userStore.user;

const recipeStore = useRecipeStore();

const { data: userRecs } = await useAsyncData('recipe', async () => {
  if (!user || !user._id) return { recipes: [] };
  return await recipeStore.getRecipeByUser(user._id);
});

</script>