<template>
	<site-button class="product-card" :to="`/recipe/${product._id}`">
		<img :src="product.thumbnail" :alt="'image of' + product.title" class="product-thumbnail">
		<div class="card-body">
			<h1 class="card-title">{{ product.title }}</h1>
			<p class="card-description">{{ product.description }}</p>
			<div class="card-footer">
				<div class="card-read-more" :to="`/recipe/${product._id}`">
					Read more
				</div>
				<user-icon :user="props.product.creator" />
			</div>
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
	thumbnail?: string;
	creator: IUser;
	date_posted: Date;
}

const props = defineProps<{ product: ProductCardProps }>();
</script>
