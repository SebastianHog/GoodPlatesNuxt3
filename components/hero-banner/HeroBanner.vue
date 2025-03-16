<template>
	<section class="hero-wrapper">
		<div class="hero-text">
			<h1
				@click="() => refresh()"
				class="hero-title">
				{{ json.hero.title }}
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
	import json from '~/data/core.json';

	const config = useRuntimeConfig();
	const base_url = config.public.BASE_URL;

	const { data: recipe, status } = await useAsyncData<IRecipe>('recipe', () => $fetch(`${base_url}/recipes/get?recipeRequest=random`).then((res: any) => res.recipe));
	const refresh = () => refreshNuxtData('recipe');

	const successData = computed(() => status.value === 'success');
</script>
