<template>
	<section class="recipe-page-wrapper">
		<img :src="recipe?.thumbnail" alt="image" class="recipe-thumbnail" />
		<div class="recipe-info-wrapper">
			<h1 class="recipe-title">{{ recipe?.title }}</h1>
			<site-button class="recipe-author" :to="`/user/${recipe?.creator._id}`">Written by: <span>
					{{ recipe?.creator.username }}</span>
			</site-button>
			<p class="recipe-description">{{ recipe?.description }}</p>

		</div>
	</section>
</template>

<script lang="ts" setup>
import './style.scss'
import type { IRecipe } from '~/types/recipe';


const route = useRoute();
const recipeId = route.params.slug[0];

const { data: recipe } = await useAsyncData<IRecipe>('recipe', () =>
	useRecipeStore().getRecipeById(recipeId)
);

</script>

<style></style>
