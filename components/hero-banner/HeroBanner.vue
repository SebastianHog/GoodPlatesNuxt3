<template>
	<section class="hero-wrapper">
		<div class="hero-text">
			<h1
				@click="() => refresh()"
				class="hero-title">
				{{ coredata.hero.title }}
			</h1>
			<h2 class="hero-food">{{ successData ? recipe?.title : 'Loading' }}</h2>
		</div>
		<div class="hero-image-scrim" />
		<img
			class="hero-image"
			:src="recipe?.thumbnail" />
		<SiteButton
			class="hero-goto-button"
			:to="`recipe/${recipe?._id}`"
			>See Recipe</SiteButton
		>
	</section>
</template>

<script lang="ts" setup>
	import type { IRecipe } from '~/types/recipe';
	import './style.scss';
	import coredata from '~/data/core.json';

	const { data: recipe, status } = await useAsyncData<IRecipe>('recipe', () => $fetch('http://localhost:3042/api/recipes/get?recipeRequest=random').then((res: any) => res.recipe));
	const refresh = () => refreshNuxtData('recipe');
	console.log(status.value);

	const successData = computed(() => status.value === 'success');
</script>
