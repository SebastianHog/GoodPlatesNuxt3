<template>
	<section class="recipe-page-wrapper">
		<img :src="recipe?.thumbnail" alt="image" class="recipe-thumbnail" />
		<div class="recipe-info-wrapper">
			<h1 class="recipe-title">{{ recipe?.title }}</h1>
			<div style="display: flex; justify-content: space-between;">
				<site-button class="recipe-author" style="width: fit-content;" :to="`/user/${recipe?.creator._id}`">Written by:
					<span>
						{{ recipe?.creator.username }}</span>
				</site-button>
				<site-button v-if="user?._id === recipe?.creator._id" @click="removeRecipe"
					style="width: fit-content; height: .2rem; color: red; border: 1px solid red">Remove</site-button>
			</div>
			<p class="recipe-description">{{ recipe?.description }}</p>
			<div class="display-container">
				<h1 class="requirements-title">Requirements</h1>
				<div class="item" v-for="(req, i) in recipe?.requirements" :key="i">
					<h3 class="item-name">{{ req.name }}</h3>
					<h3 class="item-name">{{ req.amount }}</h3>
					<h3 class="item-name">{{ req.unit }}</h3>
				</div>
			</div>
			<div class="display-container">
				<h1>Instructions</h1>
				<div class="instruction-item" v-for="(step, i) in recipe?.steps" :key="i">
					<h1>
						{{ step.name }}
					</h1>
					<p>{{ step.description }}</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
import './style.scss'
import type { IRecipe } from '~/types/recipe';
import { useUserStore } from '#imports';

const user = useUserStore().user;


const route = useRoute();
const recipeId = route.params.slug[0];

const { data: recipe } = await useAsyncData<IRecipe>('recipe', () =>
	useRecipeStore().getRecipeById(recipeId)
);

const removeRecipe = () => {
	console.log('removing recipe')
	useRecipeStore().deleteRecipe(recipe.value?._id, user?._id);
}

</script>

<style></style>
