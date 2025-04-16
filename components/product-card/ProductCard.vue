<template>
	<section class="product-card-wrapper">
		<div class="product-card-body">
			<header class="product-card-header">
				<user-icon :user="product.creator" class="product-card-author"></user-icon>
				<h1 class="product-card-title">{{ product.title }}</h1>
			</header>
			<p class="product-card-description">
				{{ product.description }}
			</p>
		</div>
		<img :src="product.thumbnail" alt="recipe thumbnail" class="product-card-thumbnail" />
	</section>
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

defineProps<{ product: ProductCardProps }>();
</script>
