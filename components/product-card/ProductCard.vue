<template>
	<site-button :to="`/recipe/${product._id}`" class="product-card-wrapper">
		<img :src="product.thumbnail" alt="recipe thumbnail" class="card-thumbnail" />
		<div class="card-body">
			<h2 class="card-title">{{ product.title }}</h2>
			<p class="card-creator">By <site-button class="card-profile-link" :to="`/user/${product.creator._id}`"
					variant="transparent"> {{
						product.creator.username }} </site-button>
			</p>
			<p class="card-description">{{ firstSentence }}</p>
		</div>
	</site-button>
</template>

<script lang="ts" setup>
import type { IUser } from "~/types/user";
import "./style.scss";

interface ProductCardProps {
	_id: string;
	title: string;
	description?: string;
	thumbnail: string;
	creator: IUser;
	date_posted: Date;
}


const props = defineProps<{ product: ProductCardProps }>();

const firstSentence = computed(() => {
	if (!props.product.description) return '';

	const match = props.product.description.match(/^.*?[.!?](?:\s|$)/);
	return match ? match[0].trim() : props.product.description;
});

</script>
