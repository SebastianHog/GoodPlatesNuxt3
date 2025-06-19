<template>
	<section class="page-content-wrapper">
		<HeroBanner />
		<ButtonsDisplay :buttons="buttonCategories" title="categories" scroller />
		<section class="product-listings">
			<ProductCard v-if="frontPageRecipes && frontPageRecipes.length" v-for="recipe in frontPageRecipes"
				:key="recipe._id" :product="recipe" />
			<PostLoader v-else v-for="i in 8" :key="i" />
		</section>
	</section>
</template>


<script setup lang="ts">
import "./style.scss";
import coredata from "~/data/core.json";
import { getRecipes } from "~/utils/recipe/getRecipes";

const { data: frontPageRecipes } = await useAsyncData("recipes", getRecipes);

const buttonCategories = computed(() => coredata.category.currentPush);
</script>
