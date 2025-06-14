<template>
  <section v-if="!recipe?.title">{{ i18n.recipe_loading }}</section>
  <section v-else class="recipe-page-wrapper">
    <div class="recipe-info-section">
      <img :src="recipe.thumbnail" :alt="i18n.image_alt + recipe.title" class="recipe-thumbnail">
      <div class="recipe-information">
        <h1 class="recipe-title">{{ recipe.title }}</h1>
        <div class="authors-row">
          <site-button class="recipe-author" :to="`/user/${recipe?.creator._id}`">{{ i18n.written_by }}:
            <span>
              {{ recipe?.creator.username }}</span>
          </site-button>
          <site-button class="remove-recipe" @click="removeRecipe">{{ i18n.remove_recipe }}</site-button>
        </div>
        <p class="recipe-desc">{{ recipe.description }}</p>
      </div>
    </div>
    <div class="recipe-instruction-section">
      <title-text-box title="Requirements">
        <ul class="reqs-list">
          <li v-for="req in recipe.requirements">
            <div>{{ req.name }}</div>
            <div class="count-unit">
              <div>{{ req.amount }}</div>
              <div>{{ req.unit }}</div>
            </div>
          </li>
        </ul>
      </title-text-box>
      <title-text-box title="Instructions">
        <ul class="instructions-list">
          <li v-for="step in recipe.steps">
            <h1 class="step-title">{{ step.name }}</h1>
            <p>{{ step.description }}</p>
          </li>
        </ul>
      </title-text-box>
    </div>
  </section>
</template>


<script lang="ts" setup>
import type { IRecipe } from '~/types/recipe';
import './style.scss'
import { useUserStore } from '#imports';
import core from '../../data/core.json'

const user = useUserStore().user;
const route = useRoute();
const recipeId = route.params.slug[0];
const { data: recipe } = await useAsyncData<IRecipe>('recipe', () =>
  useRecipeStore().getRecipeById(recipeId)
);

const i18n = {
  recipe_loading: core.pages.recipe.loadingRecipe,
  image_alt: core.pages.recipe.thumbnailAlt,
  written_by: core.pages.recipe.authorMarker,
  remove_recipe: core.pages.recipe.deleteRecipe
}

const removeRecipe = () => {
  if (!recipe.value || !user) return console.error('Could not remove recipe.');
  useRecipeStore().deleteRecipe(recipe.value?._id, user?._id);
}

</script>